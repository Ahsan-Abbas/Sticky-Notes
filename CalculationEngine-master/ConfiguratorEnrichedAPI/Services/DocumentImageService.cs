using ConfiguratorEnrichedAPI.Models;
using Newtonsoft.Json;
using SolutionSpace.DocGen.Data;

namespace ConfiguratorEnrichedAPI.Services
{
    public class DocumentImageService(ImageGenerationService imageGenerationService) : IImageProvider
    {
        private readonly UrlImageProvider _urlImageProvider = new();
        private const string PIP = "pip://";

        public Stream GetImage(string imageId, DocumentInputReader reader)
        {
            if (!string.IsNullOrEmpty(imageId) && imageId.StartsWith(PIP))
            {
                var inp = JsonConvert.DeserializeObject<LayerCollectionModel>(imageId[PIP.Length..]);
                if (inp != null)
                {
                    var task = imageGenerationService.GenerateImage(inp);
                    if (!task.IsFaulted)
                        return task.Result;
                }
            }
            return _urlImageProvider.GetImage(imageId, reader);
        }
    }
}
