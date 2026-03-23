using System.Text.Json.Serialization;

namespace ConfiguratorEnrichedAPI.Models
{
    public enum CoordinateBase { TopLeft = 0, Center = 1 }

    public class LayerCollectionModel
    {
        public LayerModel[] Layers { get; set; } = [];
        public DimensionsModel Dimensions { get; set; } = new();
        [JsonConverter(typeof(JsonStringEnumConverter))]
        public CoordinateBase CoordinateBase { get; set; } = CoordinateBase.TopLeft;
    }

    public class LayerModel
    {
        public int LayerPosition { get; set; }
        public string? Path { get; set; }
        public PositionModel Position { get; set; } = new();
        public int Visible { get; set; }
    }

    public class PositionModel
    {
        public int X { get; set; }
        public int Y { get; set; }
        public int? Rotate { get; set; }
    }

    public class DimensionsModel
    {
        public int Width { get; set; }
        public int Height { get; set; }
    }
}
