using ConfiguratorEnrichedAPI.Models;
using ConfiguratorEnrichedAPI.Utils;
using GraphQL;
using GraphQL.Client.Http;
using GraphQL.Client.Serializer.Newtonsoft;
using Microsoft.AspNetCore.Http.Extensions;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Net.Http.Headers;
using System.Text;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Text.RegularExpressions;

namespace ConfiguratorEnrichedAPI.Services
{
    public partial class PIMService(ApiSettings.PIMSettings apiSettings, SeparatedMemoryCache<PIMService> memoryCache, HttpClient httpClient)
    {
        private GraphQLHttpClient? _graphQlClient;
        private GraphQLHttpClient Client
        {
            get
            {
                _graphQlClient ??= new GraphQLHttpClient(new GraphQLHttpClientOptions
                {
                    EndPoint = new Uri(apiSettings.ApiUrl)
                }, new NewtonsoftJsonSerializer());
                return _graphQlClient;
            }
        }
        private readonly JsonSerializerOptions serializationOptions = new() { DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull };
        private static readonly int PAGE_SIZE = 100;

        [GeneratedRegex(@"\[{0,1}\{[A-Za-z]{0,}\}\]{0,1}")]
        private static partial Regex QueryChildObject();

        private async Task<List<string>> GetChannelLanguages(PIMRequestService req)
        {
            return await memoryCache.GetOrCreateAsync("channel-languages-" + req.ChannelId, async entry =>
                {
                    var channelLanguages = await FetchChannelById(req);
                    entry.AbsoluteExpirationRelativeToNow = TimeSpan.FromMinutes(60);
                    entry.SetPriority(CacheItemPriority.High);
                    return channelLanguages;
                }) ?? throw new Exception("Unable to load channel languages");

        }

        public async Task GetAuthToken()
        {
            var payload = new
            {
                client_id = apiSettings.ClientId,
                client_secret = apiSettings.ClientSecret,
                audience = apiSettings.Audience,
                grant_type = "client_credentials"
            };

            var content = JsonContent.Create(payload, options: serializationOptions);
            var response = await httpClient.PostAsync(apiSettings.AuthUrl, content);

            if (!response.IsSuccessStatusCode)
                throw new Exception($"POST request failed with status code {response.StatusCode}: {response.ReasonPhrase}");

            var responseBody = await response.Content.ReadAsStringAsync();
            var authObj = System.Text.Json.JsonSerializer.Deserialize<PIMAuthRequest>(responseBody);

            var accessToken = authObj?.access_token;
            if (!string.IsNullOrEmpty(accessToken))
                Client.HttpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", accessToken);
        }

        #region PIM Service methods
        public async Task<List<string>> FetchChannelById(PIMRequestService req)
        {
            StringBuilder queryBuilder = new();
            queryBuilder.AppendLine("query {");
            queryBuilder.AppendLine($"  channel (id: {req.ChannelId}, languageKey: \"{req.Language}\") {{");
            queryBuilder.AppendLine("    id");
            queryBuilder.AppendLine("    channelLanguages {");
            queryBuilder.AppendLine("      key");
            queryBuilder.AppendLine("    }");
            queryBuilder.AppendLine("   }");
            queryBuilder.AppendLine("}");

            var request = new GraphQLRequest
            {
                Query = queryBuilder.ToString()
            };
            var response = await Client.SendQueryAsync<dynamic>(request);

            if ((response.Errors?.Length ?? 0) > 0)
                throw new Exception($"Error fetching channels: {string.Join("; ", (response.Errors ?? []).Select(e => e.Message))}");
            else if (response.Data.channel == null)
                throw new Exception($"Channel with Id:{req.ChannelId} and Language Code:{req.Language} does not exist.");

            List<string> languages = new List<string>();
            IEnumerable<dynamic> langs = response.Data.channel.channelLanguages;
            languages.AddRange(langs.Select(l => (l.key as JValue)?.ToString() ?? string.Empty).ToList());
            return languages;
        }

        public async Task<string> FindProducts(PIMRequestService req)
        {
            try
            {
                bool hasNextPage = true;
                int skip = 0;
                List<JObject> resultProducts = [];
                List<string> channnelLanguages = await GetChannelLanguages(req);
                var lang = req.Language;
                bool langExist = channnelLanguages.Contains(lang);
                if (!langExist)
                    return JsonConvert.SerializeObject(new PIMChannelErrorResponse($"Channel with Id:{req.ChannelId} and Language Code:{req.Language} does not exist."));

                while (hasNextPage)
                {
                    var query = BuildQuery(req.ChannelId, lang, req.Filters, req.ResultColumns, skip);

                    var request = new GraphQLRequest
                    {
                        Query = query
                    };

                    var response = await Client.SendQueryAsync<dynamic>(request);

                    if (response.Errors != null)
                        return JsonConvert.SerializeObject(new PIMErrorResponse([.. response.Errors]));

                    dynamic responseData = JsonConvert.DeserializeObject<dynamic>(response.Data.ToString());

                    if (responseData != null && responseData?.products?.totalCount > 0)
                    {
                        resultProducts.AddRange(((JArray?)responseData?.products?.items)?.ToArray().Cast<JObject>() ?? []);
                        hasNextPage = responseData?.products?.pageInfo?.hasNextPage ?? true;
                        skip += PAGE_SIZE;
                    }
                    else
                    {
                        hasNextPage = false;
                    }
                }

                foreach (var col in req.ResultColumns)
                {
                    if (col.SourceAttribute.StartsWith('@'))
                    {
                        var docType = col.SourceAttribute[1..];
                        foreach (var prod in resultProducts)
                        {
                            JToken[] resList = prod.GetValue("resources")?.Children().ToArray() ?? [];
                            prod[col.SourceAttribute] = resList?.Where(res => (string?)(res.SelectToken("documentType.key", false)) == docType && (string?)(res.SelectToken("purpose.key", false)) == "External").Select(res => (string?)res.SelectToken("url", false)).FirstOrDefault();
                        }
                    }
                }
                //TEMP: Remove some items that RW don't want to show
                string[] ignoreProducts = [
                    "Thermal Cavity Barriers",
                    "Party Wall Cavity Barriers",
                    "HardRock® Multi-Fix Angle Fillet",
                    "Fire Barrier Slab",
                    "Fire Barrier",
                    "SP 60 Firestop Slab®",
                    "SP 120  Firestop Slab®",
                    "SP Firestop Plus Slab®",
                    "RockClose® Insulated DPC",
                    "FirePro® SP FireStop EN",
                ];
                resultProducts = resultProducts
                    .Where(p => !ignoreProducts.Contains(p.GetValue("productDisplayName")?.Value<string>()))
                    .ToList();

                //If query includes items, ignore products with no items
                if (req.ResultColumns.Any(r => r.SourceEntity == "items"))
                    resultProducts = resultProducts
                        .Where(p => (p.GetValue("items")?.Children().ToArray().Length ?? 0) > 0)
                        .ToList();

                return JsonConvert.SerializeObject(resultProducts);
            }
            catch (Exception ex)
            {
                return JsonConvert.SerializeObject(new PIMChannelErrorResponse(ex.Message));
            }
        }

        #endregion

        #region service helper methods
        private static string GetQueryLine(string sourceAttribute) //TODO: the query will fail if multiple "@" properties are included in the query
        {
            if (!sourceAttribute.StartsWith('@'))
                return sourceAttribute;
            return "resources { documentType { key } purpose { key } url }";
        }

        private static string BuildQuery(string channelId, string languageKey, List<PimField> filters, List<PimField> resultColumns, int skip)
        {
            /* 
             ** filters available on product
            languageKey
            channelId
            salesOrganization
            searchText
            where
            order
            skip
            take

            ** filters available on item
            channelId
            salesOrganization
            searchText
            where
            order
            skip
            take
            */

            try
            {
                string productFilters = "";
                string itemFilters = "";

                foreach (var filter in filters)
                {
                    string sourceAttributeOrigin = QueryChildObject().Replace(filter.SourceAttribute, "");
                    string value = GetEscaped(filter.Value);

                    //key/value pairs and list key/value filters
                    string filtersToAdd = filter.SourceAttribute.EndsWith("{key}")
                        ? $"{sourceAttributeOrigin}: {{key: {{{filter.Filter ?? "eq"}: {value}}}}}"
                        : filter.SourceAttribute.EndsWith("[{key}]")
                            ? $"{sourceAttributeOrigin}: {{some: {{ key: {{ {filter.Filter ?? "eq"}: {value}}}}}}}"
                            : $"{sourceAttributeOrigin}: {{{filter.Filter ?? "eq"}: {value}}}";

                    if (filter.SourceEntity == "items")
                    {
                        if (!string.IsNullOrEmpty(itemFilters))
                            itemFilters += ", ";
                        itemFilters += filtersToAdd;
                    }
                    else
                    {
                        if (!string.IsNullOrEmpty(productFilters))
                            productFilters += ", ";
                        productFilters += filtersToAdd;
                    }
                }

                StringBuilder queryBuilder = new();

                queryBuilder.AppendLine("query {");
                queryBuilder.AppendLine($"  products (channelId: {channelId}, languageKey: \"{languageKey}\", take: {PAGE_SIZE}, skip: {skip}, where: {{{productFilters}}}) {{");
                queryBuilder.AppendLine("    totalCount");
                queryBuilder.AppendLine("    pageInfo {");
                queryBuilder.AppendLine("      hasNextPage");
                queryBuilder.AppendLine("      hasPreviousPage");
                queryBuilder.AppendLine("    }");
                queryBuilder.AppendLine("    items {");

                //product level result columns
                foreach (var item in resultColumns)
                    if (item.SourceEntity != "items")
                        queryBuilder.AppendLine(GetQueryLine(item.SourceAttribute));

                if (resultColumns.Any(x => x.SourceEntity == "items"))
                {
                    queryBuilder.AppendLine("      items {");

                    //item level result columns
                    foreach (var item in resultColumns)
                        if (item.SourceEntity == "items")
                            queryBuilder.AppendLine(GetQueryLine(item.SourceAttribute));

                    queryBuilder.AppendLine("      }");
                }
                queryBuilder.AppendLine("    }");
                queryBuilder.AppendLine("  }");
                queryBuilder.AppendLine("}");

                return queryBuilder.ToString();
            }
            catch (Exception ex)
            {
                Console.Write(ex.ToString());
                throw;
            }
        }

        private static string GetEscapeForType(JsonElement? o)
            => (o is not null && o.Value.ValueKind == JsonValueKind.Number) ? string.Empty : "\"";

        private static string GetEscaped(JsonElement? o)
            => GetEscapeForType(o) + o?.ToString() + GetEscapeForType(o);
        #endregion
    }
}
