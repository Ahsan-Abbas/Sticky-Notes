using ConfiguratorEnrichedAPI.Models;
using Quartz;
using System.Net;

namespace ConfiguratorEnrichedAPI.Services
{
    public class ReferenceDataService(ApiSettings.RMDRSettings apiSettings, HttpClient httpClient, ILogger<ReferenceDataService> logger) : IJob
    {
        private readonly ILogger<ReferenceDataService> _logger = logger;
        private IDictionary<Guid, Translation> _translations = new Dictionary<Guid, Translation>();

        public IDictionary<Guid, Translation> GetReferenceData()
        {
            return _translations;
        }

        public async Task LoadReferenceData()
        {
            _logger.LogInformation("Loading Reference data at {date}", new object[] { DateTime.Now });
            try
            {
                var token = await GetAuthToken();
                if (token == null)
                    return;

                var response = await httpClient.SendAsync(new()
                {
                    Method = HttpMethod.Get,
                    RequestUri = new Uri($"{apiSettings.ApiUrl}/rmdr_concepts?$filter=rmdr_editorialnote eq 'Concept for Calculator Engine'&$select=rmdr_conceptid&$expand=rmdr_multilingualTextForConceptLabel($select=rmdr_multilingualTextLanguage,rmdr_text;$expand=rmdr_multilingualTextLanguage($select=rmdr_code)),rmdr_multilingualTextForConceptDefinition($select=rmdr_multilingualTextLanguage,rmdr_text;$expand=rmdr_multilingualTextLanguage($select=rmdr_code))"),
                    Headers =
                            {
                                { HttpRequestHeader.Authorization.ToString(), "Bearer " + token },
                                { HttpRequestHeader.Accept.ToString(), "application/json" },
                            }
                });
                var concepts = (await response.Content.ReadFromJsonAsync<ReferenceResponse<Concept>>())?.Value ?? throw new Exception("No reply received");

                response = await httpClient.SendAsync(new()
                {
                    Method = HttpMethod.Get,
                    RequestUri = new Uri($"{apiSettings.ApiUrl}/dadi_dataelements?$filter=dadi_implementedby/dadi_systemname eq 'Calculator Engine'&$select=dadi_dataelementid&$expand=dadi_label($select=dadi_text;$expand=dadi_language($select=rmdr_code)),dadi_description($select=dadi_text;$expand=dadi_language($select=rmdr_code))"),
                    Headers =
                        {
                            { HttpRequestHeader.Authorization.ToString(), "Bearer " + token },
                            { HttpRequestHeader.Accept.ToString(), "application/json" },
                        }
                });
                var dataElements = (await response.Content.ReadFromJsonAsync<ReferenceResponse<DataElement>>())?.Value ?? throw new Exception("No reply received");

                var translations = new Dictionary<Guid, Translation>();
                foreach (var concept in concepts.Where(c => c.Label.Any(l => l.Language != null) || c.Description.Any(l => l.Language != null)))
                {
                    translations[concept.ConceptId] = new Translation
                    {
                        Label = concept.Label.Where(l => l.Language != null).Select(l => new TranslatedText
                        {
                            LanguageCode = l.Language.Code,
                            Text = l.Text
                        }).ToArray(),
                        Description = concept.Description.Where(l => l.Language != null).Select(l => new TranslatedText
                        {
                            LanguageCode = l.Language.Code,
                            Text = l.Text
                        }).ToArray()
                    };
                }

                foreach (var elm in dataElements.Where(c => c.Label.Any(l => l.Language != null) || c.Description.Any(l => l.Language != null)))
                {
                    translations[elm.ElementId] = new Translation
                    {
                        Label = elm.Label.Where(l => l.Language != null).Select(t => new TranslatedText
                        {
                            LanguageCode = t.Language.Code,
                            Text = t.Text
                        }).ToArray(),
                        Description = elm.Description.Where(l => l.Language != null).Select(l => new TranslatedText
                        {
                            LanguageCode = l.Language.Code,
                            Text = l.Text
                        }).ToArray()
                    };
                }
                _translations = translations.AsReadOnly();
                _logger.LogInformation("Finished Loading Reference data at {date}", new object[] { DateTime.Now });
            }
            catch (Exception ex)
            {
                _logger.LogError("Error loading reference data: {error}", ex.ToString());
            }
        }

        public async Task<string?> GetAuthToken()
        {
            var tokenPayload = new Dictionary<string, string>
            {
                { "client_id",  apiSettings.ClientId },
                { "client_secret", apiSettings.ClientSecret },
                { "grant_type", "client_credentials"},
                { "scope",  apiSettings.Scope }
            };

            var data = new MultipartFormDataContent();
            foreach (var kv in tokenPayload)
                data.Add(new StringContent(kv.Value), kv.Key);

            HttpResponseMessage response = await httpClient.PostAsync(apiSettings.AuthUrl, data);

            if (!response.IsSuccessStatusCode)
                throw new Exception($"POST request failed with status code {response.StatusCode}: {response.ReasonPhrase}");

            var responseBody = await response.Content.ReadAsStringAsync();
            var authObj = System.Text.Json.JsonSerializer.Deserialize<ReferenceDataServiceAuthResponse>(responseBody);

            var accessToken = authObj?.AccessToken;
            return accessToken;
        }

        public Task Execute(IJobExecutionContext context)
        {
            var task = Task.Run(LoadReferenceData);
            return Task.FromResult(true);
        }
    }
}
