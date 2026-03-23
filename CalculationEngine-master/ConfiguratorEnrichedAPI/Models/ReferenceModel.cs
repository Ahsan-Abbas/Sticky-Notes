using System.Text.Json.Serialization;

namespace ConfiguratorEnrichedAPI.Models
{
    public class TranslationRequest
    {
        public required string Language { get; set; }
    }
    public class ReferenceDataServiceAuthResponse
    {
        [JsonPropertyName("access_token")]
        public required string AccessToken { get; set; }
    }

    public class ReferenceResponse<T>
    {
        public T[] Value { get; set; } = [];
    }

    public class ConceptTranslation
    {
        [JsonPropertyName("rmdr_text")]
        public string Text { get; set; } = string.Empty;

        [JsonPropertyName("rmdr_multilingualTextLanguage")]
        public TranslationLanguage Language { get; set; } = new();
    }

    public class TranslationLanguage
    {
        [JsonPropertyName("rmdr_code")]
        public string Code { get; set; } = string.Empty;
    }

    public class ConceptSystem
    {
        [JsonPropertyName("rmdr_conceptsystemid")]
        public Guid SystemId { get; set; }

        [JsonPropertyName("rmdr_multilingualTextForConceptSystLabel")]
        public ConceptTranslation[] Label { get; set; } = [];

        [JsonPropertyName("rmdr_multilingualTextForConceptSystDescription")]
        public ConceptTranslation[] Description { get; set; } = [];

        public Concept[] Concepts { get; set; } = [];
    }

    public class Concept
    {
        [JsonPropertyName("rmdr_conceptid")]
        public Guid ConceptId { get; set; }

        [JsonPropertyName("rmdr_multilingualTextForConceptLabel")]
        public ConceptTranslation[] Label { get; set; } = [];

        [JsonPropertyName("rmdr_multilingualTextForConceptDefinition")]
        public ConceptTranslation[] Description { get; set; } = [];
    }

    public class DataElementTranslation
    {
        [JsonPropertyName("dadi_text")]
        public string Text { get; set; } = string.Empty;

        [JsonPropertyName("dadi_language")]
        public TranslationLanguage Language { get; set; } = new();
    }

    public class DataElement
    {
        [JsonPropertyName("dadi_dataelementid")]
        public Guid ElementId { get; set; }

        [JsonPropertyName("dadi_label")]
        public DataElementTranslation[] Label { get; set; } = [];

        [JsonPropertyName("dadi_description")]
        public DataElementTranslation[] Description { get; set; } = [];
    }

    public class TranslatedText
    {
        public required string Text { get; set; }
        public required string LanguageCode { get; set; }
    }

    public class Translation
    {
        public required TranslatedText[] Label { get; set; }
        public required TranslatedText[] Description { get; set; }
    }
}
