using ConfiguratorEnrichedAPI.Models;
using Quartz;
using System.Net.Http.Headers;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace ConfiguratorEnrichedAPI.Services
{
    public class AceRequestService(ApiSettings.AceSettings apiSettings, HttpClient httpClient) : IJob
    {
        public string LatestPackageVersion { get; set; } = string.Empty;
        private readonly JsonSerializerOptions serializationOptions = new() { DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull };

        public async Task<AceConfigureResponse> Configure(string? packageVersion, int? workItem, AceConfigureRequest req, CancellationToken cancellationToken)
        {
            var content = JsonContent.Create(req, options: serializationOptions);
            var uri = $"{apiSettings.BaseUrl}/configurator/v1/configure?packagePath=";
            if (workItem != null)
                uri += $"{apiSettings.WorkItemPackageName}/WI-{workItem}/{req.Line?.ProductId}";
            else
                uri += $"{apiSettings.PackagePath}" + (string.IsNullOrEmpty(packageVersion) ? string.Empty : $"~{packageVersion}");
            var response = await httpClient.SendAsync(new()
            {
                Method = HttpMethod.Post,
                RequestUri = new(uri),
                Headers =
                {
                    Authorization = new AuthenticationHeaderValue("ApiKey", apiSettings.ApiKey)
                },
                Content = content
            }, cancellationToken);

            response.EnsureSuccessStatusCode();

            var result = await response.Content.ReadFromJsonAsync<AceConfigureResponse>(cancellationToken: cancellationToken);

            return result ?? throw new Exception("Unable to get response from Ace");
        }

        public async Task<AceProductsResponse> GetProducts()
        {
            var uri = $"{apiSettings.BaseUrl}/packages/v1/products?packagePath={apiSettings.PackagePath}";
            var response = await httpClient.SendAsync(new()
            {
                Method = HttpMethod.Get,
                RequestUri = new(uri),
                Headers =
                {
                    Authorization = new AuthenticationHeaderValue("ApiKey", apiSettings.ApiKey)
                }
            });

            response.EnsureSuccessStatusCode();

            var result = await response.Content.ReadFromJsonAsync<AceProductsResponse>();

            return result ?? throw new Exception("Unable to get response from Ace");
        }

        public async Task<AceProductResponse> GetProductInfo(string productId)
        {
            var uri = $"{apiSettings.BaseUrl}/packages/v1/products/{productId}?packagePath={apiSettings.PackagePath}";
            var response = await httpClient.SendAsync(new()
            {
                Method = HttpMethod.Get,
                RequestUri = new(uri),
                Headers =
                {
                    Authorization = new AuthenticationHeaderValue("ApiKey", apiSettings.ApiKey)
                }
            });

            response.EnsureSuccessStatusCode();

            var result = await response.Content.ReadFromJsonAsync<AceProductResponse>();

            return result ?? throw new Exception("Unable to get response from Ace");
        }

        private async Task LoadLatestPackageVersion()
        {
            var products = await GetProducts();
            LatestPackageVersion = products.PackagePath[(products.PackagePath.IndexOf('~') + 1)..];
        }

        public Task Execute(IJobExecutionContext context)
        {
            var task = Task.Run(LoadLatestPackageVersion);
            return Task.FromResult(true);
        }
    }
}
