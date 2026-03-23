using ConfiguratorEnrichedAPI.Models;
using ConfiguratorEnrichedAPI.Utils;

namespace ConfiguratorEnrichedAPI.Services
{
    public class EnrichedConfigureService(ApiSettings.RMDRSettings translationSettings, AceRequestService ace, ReferenceDataService rmdr, SeparatedMemoryCache<EnrichedConfigureService> cache, ApiSettings.AceSettings configureSettings)
    {
        public async Task<AceConfigureResponse> ConfigureAndTranslate(string? packageVersion, int? workItem, AceConfigureRequest req, string language, CancellationToken cancellationToken)
        {
            if (string.IsNullOrEmpty(packageVersion))
                packageVersion = ace.LatestPackageVersion;
            if (workItem == null && req.Line.VariableAssignments.Length <= configureSettings.CacheLowPrioritySelectionCount)
            {
                var key = GetCacheKey(packageVersion, req);
                return await cache.GetOrCreateAsync(key, async entry =>
                {
                    var currentDay = DateTime.Now.Date;
                    entry.SetAbsoluteExpiration(currentDay.AddDays(8 - (int)currentDay.DayOfWeek)); //Always expire between Sunday and Moday
                    entry.SetSlidingExpiration(TimeSpan.FromHours(configureSettings.CacheSlidingExpiryHours)); //Expire if not accessed within some time
                    entry.SetPriority(req.Line.VariableAssignments.Length <= configureSettings.CacheNormalPrioritySelectionCount ? CacheItemPriority.Normal : CacheItemPriority.Low);
                    return await ConfigureAndTranslateInternal(packageVersion, workItem, req, language, cancellationToken);
                }) ?? throw new Exception("Unable to resolve configuration from cache");
            }
            return await ConfigureAndTranslateInternal(packageVersion, workItem, req, language, cancellationToken);
        }

        private async Task<AceConfigureResponse> ConfigureAndTranslateInternal(string? packageVersion, int? workItem, AceConfigureRequest req, string language, CancellationToken cancellationToken)
        {
            var res = await ace.Configure(packageVersion, workItem, req, cancellationToken);
            return GetTranslations(res, rmdr.GetReferenceData(), language);
        }

        private static string GetCacheKey(string? packageVersion, AceConfigureRequest req) =>
            $"configure-{packageVersion}-{req.ViewId}-{req.Line.ProductId}-{string.Join(':', req.Settings?.IncludeSections ?? [])}-{GetVariableAssignmentString(req.Line.VariableAssignments)}";

        private static string GetVariableAssignmentString(AceConfigureRequestVariableAssignment[] assignments) =>
            string.Join(';', assignments.OrderBy(a => $"{a.InstanceId}:{a.VariableId}").Select(a => $"{a.InstanceId}:{a.VariableId}={a.Value}"));

        public Dictionary<string, string> GetApplicationTranslations(Dictionary<string, string> fieldsToTranslate, IDictionary<Guid, Translation> translations, string targetLanguage)
        {
            Dictionary<string, string> translated = [];
            foreach (var field in fieldsToTranslate)
            {
                var key = field.Key;
                if (!Guid.TryParse(field.Value, out Guid guid))
                    continue;

                if (!translations.TryGetValue(guid, out var group))
                    continue;

                var labelTranslation = FindMatchingLanguage(group.Label, targetLanguage);
                if (labelTranslation != null)
                    translated[key] = labelTranslation;
                else if (translationSettings.ShowNotTranslated)
                    translated[key] = "Not Translated: " + key;
            }

            return translated;
        }

        public AceConfigureResponse GetTranslations(AceConfigureResponse configureResponse, IDictionary<Guid, Translation> translations, string targetLanguage)
        {
            foreach (var section in configureResponse.Sections)
                TranslateSection(section, translations, targetLanguage);
            return configureResponse;
        }

        private void TranslateSection(AceConfigureResponseSection section, IDictionary<Guid, Translation> translations, string targetLanguage)
        {
            foreach (var variable in section.Variables)
            {
                TranslateVariable(variable, translations, targetLanguage);
            }

            foreach (var nestedSection in section.Sections)
            {
                TranslateSection(nestedSection, translations, targetLanguage); // Recursive call for nested sections
            }
        }

        private void TranslateVariable(AceConfigureResponseVariable variable, IDictionary<Guid, Translation> translations, string targetLanguage)
        {
            if (TryGetSourceId(variable.Properties, out var id))
                TranslateVariable(id, variable, translations, targetLanguage);

            foreach (var val in variable.Values)
                if (TryGetSourceId(val.Properties, out id))
                    TranslateValue(id, val, translations, targetLanguage);
        }

        private static string? FindMatchingLanguage(TranslatedText[] translations, string targetLanguage)
        {
            var translation = translations.FirstOrDefault(t => targetLanguage.Equals(t.LanguageCode, StringComparison.OrdinalIgnoreCase))?.Text;

            var idx = targetLanguage.IndexOf('-');
            if (translation == null && idx > -1)
            {
                targetLanguage = targetLanguage[..idx];
                translation = translations.FirstOrDefault(t => targetLanguage.Equals(t.LanguageCode, StringComparison.OrdinalIgnoreCase))?.Text;
            }
            return translation;
        }

        private void TranslateVariable(Guid guid, AceConfigureResponseVariable variable, IDictionary<Guid, Translation> translations, string targetLanguage)
        {
            if (!translations.TryGetValue(guid, out var translation))
                return;

            var descriptionTranslation = FindMatchingLanguage(translation.Description, targetLanguage);
            var labelTranslation = FindMatchingLanguage(translation.Label, targetLanguage);

            if (!string.IsNullOrEmpty(descriptionTranslation))
                variable.Description = descriptionTranslation;
            else if (translationSettings.ShowNotTranslated)
                variable.Description = "[Not translated]: " + variable.Description;

            if (!string.IsNullOrEmpty(labelTranslation))
                variable.Name = labelTranslation;
            else if (translationSettings.ShowNotTranslated)
                variable.Name = "[Not translated]: " + variable.Name;
        }

        private void TranslateValue(Guid valueId, AceConfigureResponseValue value, IDictionary<Guid, Translation> translations, string targetLanguage)
        {
            if (!translations.TryGetValue(valueId, out var translation))
                return;

            var descriptionTranslation = FindMatchingLanguage(translation.Description, targetLanguage);
            var labelTranslation = FindMatchingLanguage(translation.Label, targetLanguage);

            if (!string.IsNullOrEmpty(descriptionTranslation))
                value.Description = descriptionTranslation;
            else if (translationSettings.ShowNotTranslated)
                value.Description = "[Not translated]: " + value.Description;

            if (!string.IsNullOrEmpty(labelTranslation))
                value.Name = labelTranslation;
            else if (translationSettings.ShowNotTranslated)
                value.Name = "[Not translated]: " + value.Name;
        }

        private static bool TryGetSourceId(AceConfigureResponseProperty[] properties, out Guid id) =>
            Guid.TryParse(properties.FirstOrDefault(IsIdProperty)?.Value?.ToString(), out id);

        private static bool IsIdProperty(AceConfigureResponseProperty p) =>
            p.Id.Equals("SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE");
    }
}
