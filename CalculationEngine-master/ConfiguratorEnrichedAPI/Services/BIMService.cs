using ConfiguratorEnrichedAPI.Models;
using ConfiguratorEnrichedAPI.Utils;

namespace ConfiguratorEnrichedAPI.Services
{
    public class BIMService(ApiSettings.BIMSettings apiSettings, SeparatedMemoryCache<BIMService> cache, HttpClient httpClient)
    {
        public async Task<string> GetAuthToken(ApiSettings.Endpoint settings) =>
            await cache.GetOrCreateAsync("token-" + settings.ClientId, async ce =>
            {
                var res = await Authenticate(settings);
                ce.AbsoluteExpirationRelativeToNow = TimeSpan.FromSeconds(res.expires_in - 60); //Expire the cache slightly before the token becomes invalid
                ce.SetPriority(CacheItemPriority.NeverRemove);
                return res.access_token;
            }) ?? throw new Exception("Unable to get authentication token");

        private async Task<BimAuthResponse> Authenticate(ApiSettings.Endpoint settings)
        {
            var payload = new Dictionary<string, string>
            {
                { "client_id", settings.ClientId },
                { "client_secret", settings.ClientSecret },
                { "grant_type", "client_credentials" }
            };
            var data = new MultipartFormDataContent();
            foreach (var kv in payload)
                data.Add(new StringContent(kv.Value), kv.Key);

            var response = await httpClient.PostAsync(settings.ApiUrl + "/oauth/token/", data);

            if (!response.IsSuccessStatusCode)
                throw new Exception($"Authenticate request failed with status code {response.StatusCode}: {response.ReasonPhrase}");

            var responseContent = await response.Content.ReadFromJsonAsync<BimAuthResponse>() ?? throw new Exception("No data returned from Authenticate request");

            if (!string.IsNullOrEmpty(responseContent.error))
                throw new Exception($"Authenticate request returned error: " + responseContent.error);

            if (!string.IsNullOrEmpty(responseContent.access_token))
                return responseContent;
            throw new Exception("Unable to obtain BIM access token");
        }

        private async Task<T> GetResponse<T>(string url)
        {
            var res = await httpClient.GetAsync(url);
            if (!res.IsSuccessStatusCode)
                throw new Exception("Unable to get response from BIM for " + url);

            var s = await res.Content.ReadAsStringAsync();
            if (!s.StartsWith('{'))
                s = s[(s.IndexOf("\n{") + 1)..];

            BaseResponse<T> c = System.Text.Json.JsonSerializer.Deserialize<BaseResponse<T>>(s) ?? throw new Exception("Unable to parse response from BIM for " + url);
            return c.data;
        }

        public async Task<IEnumerable<BuildingElement>> GetBuildingElementList(BuildingElementRequest req)
        {
            if (!apiSettings.TryGetValue(req.Market, out var settings))
                throw new Exception("Invalid market: " + req.Market);
            int constructionCount = 0;
            var token = await GetAuthToken(settings);
            var constructionListRes = await GetResponse<ConstructionsListResponse[]>($"{settings.ApiUrl}/api/?get_data=constructions_list&type={req.ElementType}&add_variants=0&token={token}&client_id={settings.ClientId}" + (string.IsNullOrEmpty(req.Group) ? "" : ("&construction_grp_id=" + req.Group)));

            var constructions = constructionListRes.Where(d => d.availability == "1")
                .Select(c => new BuildingElement { DisplayName = c.disp_name, BuildingElementId = c.id, Type = c.type })
                .ToArray();
            
            foreach (var c in constructions) //await Parallel.ForEachAsync(constructions, parallelOptions, async (c, ct) =>//
            {
                var constructionData = await GetResponse<ConstructionDetailsResponse>($"{settings.ApiUrl}/api/?get_data=construction_data&construction_id={c.BuildingElementId}&add_layers=0&add_files=0&add_variants=1&token={token}&client_id={settings.ClientId}");
                if (constructionData == null)
                    continue;
                constructionCount++;
                c.ImageUrl = GetBimFileUrl(constructionData.img_url);
                c.Variants = constructionData.variants.Select(v => new Variant
                {
                    Description = v.description,
                    Name = v.name,
                    VariantId = v.id,
                }).ToArray();
            }
            return constructions.Where(c => c.Variants.Length > 0);
        }

        public async Task<VariantDetails> GetBuildingElementVariant(BuildingElementVariantRequest req)
        {
            if (!apiSettings.TryGetValue(req.Market, out var settings))
                throw new Exception("Invalid market: " + req.Market);
            var token = await GetAuthToken(settings);
            var variant = await GetResponse<BimVariant>($"{settings.ApiUrl}/api/?get_data=variant_data&variant_id={req.VariantId}&construction_id={req.BuildingElementId}&add_layers=1&add_files=1&token={token}&client_id={settings.ClientId}");
            var v = new VariantDetails();
            foreach (var file in variant.bim_models.SelectMany(m => m.files))
            {
                if (file == null)
                    continue;
                if (file.file_type == "Revit")
                    v.RevitUrl = GetBimFileUrl(file.file_url);
                else if (file.file_type == "Ifc")
                    v.IfcUrl = GetBimFileUrl(file.file_url);
            }
            if (variant.homogenous.Length > 0)
                v.Layers = variant.homogenous.Select(l => GetLayer("HOMOGENEOUS", l)).ToArray();
            else
                v.Layers = variant.inhomogenous.Select(l => GetLayer("INHOMOGENEOUS", l)).ToArray();
            return v;
        }

        private static Layer GetLayer(string buildingElementType, BimLayer layer) =>
            new()
            {
                BuildingElementType = buildingElementType,
                ProductName = layer.prod_name,
                Lambda = layer.lambda,
                Thickness_m = layer.thickness_m,
                Thickness_mm = layer.thickness_mm,
                LayerCharacterName = layer.layer_character_name,
                ProductTypeName = layer.prod_type_name,
                ProductGroupId = layer.prod_group_id
            };

        private static string GetBimFileUrl(string url)
        {
            /* TODO: implement and test
            if (string.IsNullOrEmpty(url))
                return string.Empty;
            var idx = url.IndexOf("file_data=");
            if (idx <= 0)
                return string.Empty;
            var endIdx = url.IndexOf("&", idx);
            return url[idx..(endIdx == -1 ? 0 : endIdx)];*/
            return url; 
        }

#pragma warning disable IDE1006 // Naming Styles
        record BimAuthResponse(string access_token, string access_token_datetime, string token_type, int expires_in, string refresh_token, string error);
        record BaseResponse<T>(T data);
        record ConstructionsListResponse(string id, string disp_name, string availability, string type);
        record ConstructionDetailsResponse(string img_url, ConstructionDetailsVariant[] variants);
        record ConstructionDetailsVariant(string id, string name, string description);
        record BimVariant(BimModel[] bim_models, BimLayer[] homogenous, BimLayer[] inhomogenous);
        record BimModel(BimModelFile[] files);
        record BimModelFile(string file_type, string file_url);
        record BimLayer(string prod_name, double? thickness_m, double? thickness_mm, double? lambda, string layer_character_name, string prod_type_name, string prod_group_id);
#pragma warning restore IDE1006 // Naming Styles
    }
}
