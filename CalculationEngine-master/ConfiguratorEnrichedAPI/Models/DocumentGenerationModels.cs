namespace ConfiguratorEnrichedAPI.Models
{
    public class DocumentGenerationRequest
    {
        public required string Template { get; set; }
        public string? FileName { get; set; }
        public required string JsonData { get; set; }
    }
}
