namespace ConfiguratorEnrichedAPI.Models
{
    public class ApiSettings
    {
        public required string ConfigFile { get; set; }
        public required AceSettings Ace { get; set; }
        public required PIMSettings PIM { get; set; }
        public required MarketoSettings Marketo { get; set; }
        public required RMDRSettings RMDR { get; set; }
        public required BIMSettings BIM { get; set; }

        public class AceSettings
        {
            public required string BaseUrl { get; set; }
            public required string PackagePath { get; set; }
            public required string WorkItemPackageName { get; set; }
            public required string ApiKey { get; set; }
            public int CacheSlidingExpiryHours { get; set; }
            public int CacheNormalPrioritySelectionCount { get; set; }
            public int CacheLowPrioritySelectionCount { get; set; }
        }

        public class BIMSettings : Dictionary<string, Endpoint>
        {

        }

        public class PIMSettings: Endpoint
        {
            public required string Audience { get; set; }
            public required string AuthUrl { get; set; }
        }

        public class RMDRSettings : Endpoint
        {
            public bool Enabled { get; set; }
            public required string AuthUrl { get; set; }
            public required string Scope { get; set; }
            public bool ShowNotTranslated { get; set; } = false;
            public required int ScheduledJobInterval { get; set; }
            public Dictionary<string, string> ApplicationTranslations { get; set; } = [];
        }

        public class MarketoSettings : Endpoint
        {

        }

        public class Endpoint
        {
            public required string ClientId { get; set; }
            public required string ClientSecret { get; set; }
            public required string ApiUrl { get; set; }
        }
    }
}
