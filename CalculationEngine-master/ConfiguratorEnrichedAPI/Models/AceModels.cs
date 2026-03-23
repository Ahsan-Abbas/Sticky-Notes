namespace ConfiguratorEnrichedAPI.Models
{
    public class ConfigureRequest
    {
        public required AceConfigureRequest AceConfigureRequest { get; set; }
        public string? PackageVersion { get; set; }
        public int? WorkItem { get; set; }
        public string Language { get; set; } = string.Empty;
    }
    public class AceConfigureRequest
    {
        public DateTime Date { get; set; } = DateTime.UtcNow;
        public string? ViewId { get; set; }
        public required AceConfigureRequestLine Line { get; set; }
        public AceConfigureRequestSettings? Settings { get; set; }
    }

    public class AceConfigureRequestLine
    {
        public string? ProductId { get; set; }
        public AceConfigureRequestVariableAssignment[] VariableAssignments { get; set; } = [];
    }

    public class AceConfigureRequestVariableAssignment
    {
        public string? VariableId { get; set; }
        public object? Value { get; set; }
        public string? Type { get; set; }
        public string? InstanceId { get; set; }
    }

    public class AceConfigureRequestSettings
    {
        public bool? IncludeStateAndJustification { get; set; }
        public bool? NoStateHash { get; set; }
        public string[]? IncludeSections { get; set; }
    }

    public class AceConfigureResponse
    {
        public AceConfigureResponsePhase[] Phases { get; set; } = [];
        public AceConfigureResponseSection[] Sections { get; set; } = [];
        public AceConfigureResponseRemovedAssignments RemovedAssignments { get; set; } = new();
        public bool IsComplete { get; set; }
        public bool IsConfigurable { get; set; }
        public string? Language { get; set; }
        public string PackagePath { get; set; } = string.Empty;
        public AceConfigureResponsePhaseCompletion PhaseCompletion { get; set; } = new();
        public AceConfigureResponseProduct Product { get; set; } = new();
    }

    public class AceConfigureResponsePhase
    {
        public string Id { get; set; } = string.Empty;
        public bool IsComplete { get; set; }
        public AceConfigureResponseSection[] Sections { get; set; } = [];
    }

    public class AceConfigureResponseProduct
    {
        public string Id { get; set; } = string.Empty;
        public string Name { get; set; } = string.Empty;
        public bool IsConfigurable { get; set; }
    }

    public class AceConfigureResponsePhaseCompletion
    {
        public int CompletedPhases { get; set; }
        public bool IsComplete { get; set; }
        public int TotalPhases { get; set; }
    }

    public class AceConfigureResponseSection
    {
        public string Id { get; set; } = string.Empty;
        public string Name { get; set; } = string.Empty;
        public string Type { get; set; } = string.Empty;
        public AceConfigureResponseSection[] Sections { get; set; } = [];
        public AceConfigureResponseVariable[] Variables { get; set; } = [];
        public AceConfigureResponseProperty[] Properties { get; set; } = [];
    }

    public class AceConfigureResponseProperty
    {
        public string Id { get; set; } = string.Empty;
        public object? Value { get; set; }
        public string Type { get; set; } = string.Empty;
    }

    public class AceConfigureResponseVariable
    {
        public string Id { get; set; } = string.Empty;
        public string Name { get; set; } = string.Empty;
        public string? Description { get; set; }
        public string ValueType { get; set; } = string.Empty;
        public int? Scale { get; set; }
        public decimal DistinctValueCount { get; set; }
        public bool AllowMultipleAssignments { get; set; }
        public bool HasAllowedValues { get; set; }
        public bool ReadOnly { get; set; }
        public bool IsInstanceCollectionVariable { get; set; }
        public AceConfigureResponseValue[] Values { get; set; } = [];
        public AceConfigureResponseProperty[] Properties { get; set; } = [];
    }

    public class AceConfigureResponseRemovedAssignments
    {
        public AceConfigureResponseVariableAssignment[] VariableAssignments { get; set; } = [];
        public dynamic[] PriceLineAssignments { get; set; } = [];
    }

    public class AceConfigureResponseVariableAssignment
    {
        public string Type { get; set; } = string.Empty;
        public string? InstanceId { get; set; }
        public AceConfigureResponseRemovedVariable Variable { get; set; } = new();
        public AceConfigureResponseValue Value { get; set; } = new();
    }

    public class AceConfigureResponseRemovedVariable
    {
        public string Id { get; set; } = string.Empty;
        public string Name { get; set; } = string.Empty;
        public string ValueType { get; set; } = string.Empty;
        public bool AllowMultipleAssignments { get; set; }
    }

    public class AceConfigureResponseValue
    {
        public string Name { get; set; } = string.Empty;
        public string? Description { get; set; }
        public object Value { get; set; } = new object();
        public string Type { get; set; } = string.Empty;
        public bool Incompatible { get; set; }
        public bool? IsAllowed { get; set; }
        public string Assigned { get; set; } = string.Empty;
        //public string State { get; set; } = string.Empty;
        //public string Justification { get; set; } = string.Empty;
        public object? Lower { get; set; }
        public object? Upper { get; set; }
        public bool? IsLowerInfinity { get; set; }
        public bool? IsUpperInfinity { get; set; }
        public object? Excluded { get; set; }
        public AceConfigureResponseProperty[] Properties { get; set; } = [];
        //Excluded
    }

    public record AceProductsResponse(string PackagePath, AceProduct[] Products, int Total, string Language);
    
    public record AceProduct(string Id, string Name, string Description, string Unit, AceProductProperty[] Properties, AceCapabilities Capabilities);

    public record AceProductProperty(string Id, object Value, string Type);

    public record AceCapabilities(bool Configuration, bool SolutionSpace, bool Conflicts, bool Explain);

    public record AceProductResponse(string PackagePath, string Id, AceProductVariable[] Variables, AceView[] Views, AceCapabilities Capabilities);

    public record AceProductVariable(string Type, AceProductValue[] Values, bool IsMultiValued, string Id, string Name, bool IsEnumerated, string VariableUsage, bool HasPredefinedDomain, AceProductProperty[] Properties);

    public record AceProductValue(string Id, string Name);

    public record AceView(string Id, bool Default);
    /*

    public enum AceConfigureResponsePropertyType
    {
        String = 0,
        Number = 1,
        Date = 2
    }
    public enum AceConfigureResponseValueType
    {
        String = 0,
        Number = 1,
        Date = 2,
        Boolean = 3,
    }

    public enum AceConfigureResponseValueJustification
    {
        None = 0,
        Rule = 1,
        Assignment = 2,
        Default = 3,
        Phase = 4,
        Calculation = 5
    }

    public enum AceConfigureResponseValueState
    {
        Available = 0,
        Unavailable = 1,
        Selected = 2,
        Inferred = 3
    }

    public enum AceConfigureResponseValueAssigned
    {
        byUser = 0,
        byDefault = 1,
        byPhase = 2,
        byRule = 3,
        byCalculation = 4
    }*/
}
