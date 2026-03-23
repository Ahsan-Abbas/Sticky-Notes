using ConfiguratorEnrichedAPI.Models;
using ConfiguratorEnrichedAPI.Utils;
using System.Net;
using System.Text.Json;

namespace ConfiguratorEnrichedAPI.Services
{
    public class MarketoService(ApiSettings.MarketoSettings settings, SeparatedMemoryCache<MarketoService> memoryCache, HttpClient httpClient)
    {
        private readonly ApiSettings.MarketoSettings _settings = settings;

        private async Task<MarketoAuthResponse> Authorize()
        {
            var url = $"{_settings.ApiUrl}/identity/oauth/token?grant_type=client_credentials&client_id={_settings.ClientId}&client_secret={_settings.ClientSecret}";
            var response = await httpClient.GetAsync(url);

            if (!response.IsSuccessStatusCode)
                throw new Exception($"Authorize request failed with status code {response.StatusCode}: {response.ReasonPhrase}");

            var responseBody = await response.Content.ReadAsStringAsync();
            var authObj = JsonSerializer.Deserialize<MarketoAuthResponse>(responseBody);
            
            return authObj ?? throw new Exception("No response recieved when authorizing");
        }

        private async Task<string> GetAuthToken()
        {
            return await memoryCache.GetOrCreateAsync("token", async entry =>
            {
                var res = await Authorize();
                entry.AbsoluteExpirationRelativeToNow = TimeSpan.FromSeconds(res.expires_in - 60);
                entry.SetPriority(CacheItemPriority.NeverRemove);
                return res.access_token;
            }) ?? throw new Exception("Unable to obtain authorization token");
        }

        public async Task<dynamic> CreateOrUpdateLead(Dictionary<string, object> data)
        {
            var token = await GetAuthToken();

            var response = await httpClient.SendAsync(new()
            {
                Method = HttpMethod.Post,
                RequestUri = new Uri($"{_settings.ApiUrl}/rest/v1/leads.json"),
                Headers =
                {
                    { HttpRequestHeader.Authorization.ToString(), "Bearer " + token },
                    { HttpRequestHeader.Accept.ToString(), "application/json" },
                },
                Content = JsonContent.Create(new
                {
                    action = "createOrUpdate",
                    lookupField = "email",
                    input = new [] { data }
                })
            });

            if (!response.IsSuccessStatusCode)
                throw new Exception($"Authenticate request failed with status code {response.StatusCode}: {response.ReasonPhrase}");
            return await response.Content.ReadFromJsonAsync<dynamic>() ?? throw new Exception("No reply received from Marketo");
        }


#pragma warning disable IDE1006 // Naming Styles
        record MarketoAuthResponse(string access_token, string token_type, int expires_in, string scope);
#pragma warning restore IDE1006 // Naming Styles
    }
}
