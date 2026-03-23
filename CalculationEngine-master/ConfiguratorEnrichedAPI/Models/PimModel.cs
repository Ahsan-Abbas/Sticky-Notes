using GraphQL;
using System.Text.Json;

namespace ConfiguratorEnrichedAPI.Models
{
    public class PIMAuthRequest
    {
#pragma warning disable IDE1006 // Naming Styles
        public string access_token { get; set; } = string.Empty;
        public string scope { get; set; } = string.Empty;
        public int expires_in { get; set; }
        public string token_type { get; set; } = string.Empty;
#pragma warning restore IDE1006 // Naming Styles
    }

    public class PIMRequestService
    {
        public required string ChannelId { get; set; }
        public List<PimField> Filters { get; set; } = [];
        public string FilterMatching { get; set; } = string.Empty;
        public List<PimField> ResultColumns { get; set; } = [];
        public List<PimField> Sorting { get; set; } = [];
        public string Language { get; set; } = string.Empty;
    }

    public class PimField
    {
        public string SourceAttribute { get; set; } = string.Empty; //The name of the PIM Attribute
        public string? SourceEntity { get; set; } //Contains "items" or is blank depending on where the PIM attribute exists
        public JsonElement? Value { get; set; } //For filtering, this will be the value used to filter. For sorting, this will contain either "Ascending" or "Descending". Not used for ResultColumns.
        public string? Filter { get; set; } //For filtering, this is used for the comparison - if it should be equals ("eq" - default), "gt", "lt", etc
    }

    public class PIMErrorResponse(GraphQLError[]? errors)
    {
        public int TotalErrors { get; set; } = errors?.Length ?? 0;
        public string[] ErrorMessages { get; set; } = errors?.Select(error => error.Message).ToArray() ?? [];
    }

    public class PIMChannelErrorResponse(string error)
    {
        public string ErrorMessages { get; set; } = error;
    }
}