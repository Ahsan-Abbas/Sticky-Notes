using ConfiguratorEnrichedAPI.Models;
using ConfiguratorEnrichedAPI.Utils;
using System.Drawing.Drawing2D;
using System.Drawing.Imaging;
using System.Drawing;

namespace ConfiguratorEnrichedAPI.Services
{
    public class ImageGenerationService(SeparatedMemoryCache<ImageGenerationService> cache, HttpClient httpClient)
    {
        private readonly MemoryCacheEntryOptions _cacheOptions = new()
        {
            AbsoluteExpirationRelativeToNow = TimeSpan.FromMinutes(15)
        };

        public async Task<Stream> GenerateImage(LayerCollectionModel model)
        {
            // Create a new bitmap image
            using Bitmap bmp = new(model.Dimensions.Width, model.Dimensions.Height);
            bmp.MakeTransparent();

            // Prepare for drawing existing images on top of the new image
            using Graphics graphics = Graphics.FromImage(bmp);
            graphics.CompositingQuality = CompositingQuality.HighQuality;
            graphics.SmoothingMode = SmoothingMode.HighQuality;
            graphics.InterpolationMode = InterpolationMode.HighQualityBicubic;

            byte[]? image = null;
            foreach (LayerModel item in model.Layers.OrderBy(x => -x.LayerPosition))
            {
                if (item.Visible == 1 && !string.IsNullOrEmpty(item.Path))
                {
                    image = await GetImage(item.Path);

                    if (image != null)
                    {
                        var imageLayer = Image.FromStream(new MemoryStream(image));
                        if (item.Position.Rotate != null && item.Position.Rotate != 0)
                        {
                            graphics.TranslateTransform(imageLayer.Width / 2, imageLayer.Height / 2);
                            graphics.RotateTransform(item.Position.Rotate.Value);
                            graphics.TranslateTransform(-imageLayer.Width / 2, -imageLayer.Height / 2);
                        }

                        int positionX = model.CoordinateBase == CoordinateBase.TopLeft ? item.Position.X : (model.Dimensions.Width / 2) - item.Position.X;
                        int positionY = model.CoordinateBase == CoordinateBase.TopLeft ? item.Position.Y : (model.Dimensions.Height / 2) - item.Position.Y;
                        graphics.DrawImage(imageLayer, positionX, positionY, imageLayer.Size.Width, imageLayer.Size.Height);
                    }
                }
            }

            // Save the image
            MemoryStream memoryStream = new();
            bmp.Save(memoryStream, ImageFormat.Png);
            memoryStream.Position = 0;

            return memoryStream;
        }

        private async Task<byte[]?> GetImage(string fileRef)
        {
            // Try getting it from Cache
            byte[]? image = GetCachedImage(fileRef);
            if (image != null)
                return image;
            // If not cached, get it from Url or File ref
            else if (fileRef.StartsWith("http"))
            {
                image = await GetImageByUrl(fileRef);
                if (image != null)
                    SetCachedImage(fileRef, image);
                return image;
            }
            else if (fileRef.StartsWith("images/rockwool/"))
            {
                var stream = typeof(ImageGenerationService).Assembly.GetManifestResourceStream("ConfiguratorEnrichedAPI.Resources.images.rockwool." + fileRef.Replace("images/rockwool/", ""));
                if (stream != null)
                {
                    image = new byte[stream.Length];
                    stream.Read(image);
                    SetCachedImage(fileRef, image);
                    return image;
                }
            }
            return null;
        }

        private async Task<byte[]?> GetImageByUrl(string url)
        {
            using var response = await httpClient.GetAsync(url);
            byte[]? image = null;
            if (response.IsSuccessStatusCode)
            {
                Stream stream = await response.Content.ReadAsStreamAsync();
                image = new byte[stream.Length];
                stream.Read(image);
            }
            return image;
        }

        public byte[]? GetCachedImage(string key)
        {
            cache.TryGetValue(key, out byte[]? result);
            return result;
        }

        public void SetCachedImage(string key, byte[] image) =>
            cache.Set(key, image, _cacheOptions);
    }
}
