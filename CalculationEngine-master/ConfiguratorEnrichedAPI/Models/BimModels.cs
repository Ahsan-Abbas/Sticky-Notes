namespace ConfiguratorEnrichedAPI.Models
{
    public class BuildingElementRequest
    {
        public string ElementType { get; set; } = string.Empty;
        public string Group { get; set; } = string.Empty;
        public string Market { get; set; } = "RW-PL";
    }

    public class BuildingElementVariantRequest
    {
        public string BuildingElementId { get; set; } = string.Empty;
        public string VariantId { get; set; } = string.Empty;
        public string Market { get; set; } = "RW-PL";
    }

    public class BuildingElement
    {
        public string BuildingElementId { get; set; } = string.Empty;
        public string DisplayName { get; set; } = string.Empty;
        public string? Type { get; set; }
        public string? ImageUrl { get; set; }
        public Variant[] Variants { get; set; } = [];
    }

    public class Variant
    {
        public string VariantId { get; set; } = string.Empty;
        public string Name { get; set; } = string.Empty;
        public string? Description { get; set; }
    }
    
    public class VariantDetails
    {
        public string? RevitUrl { get; set; }
        public string? IfcUrl { get; set; }
        public int LayerCount { get => Layers.Length; }
        public Layer[] Layers { get; set; } = [];
    }

    public class Layer
    {
        public string ProductName { get; set; } = string.Empty;
        public string ProductTypeName { get; set; } = string.Empty;
        public string LayerCharacterName { get; set; } = string.Empty;
        public double? Thickness_m { get; set; }
        public double? Thickness_mm { get; set; }
        public double? Lambda { get; set; }
        public string BuildingElementType { get; set; } = string.Empty;
        public string ProductGroupId { get; set; } = string.Empty;
    }
}
