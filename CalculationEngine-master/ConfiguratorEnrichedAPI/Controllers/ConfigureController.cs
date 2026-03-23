using ConfiguratorEnrichedAPI.Models;
using ConfiguratorEnrichedAPI.Services;
using Microsoft.AspNetCore.Mvc;

namespace ConfiguratorEnrichedAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class ConfigureController(EnrichedConfigureService configure, ApiSettings settings, ReferenceDataService referenceDataService) : ControllerBase
    {
        [HttpPost]
        public async Task<AceConfigureResponse?> Configure(ConfigureRequest req)
        {
            var response =  await configure.ConfigureAndTranslate(req.PackageVersion, req.WorkItem, req.AceConfigureRequest, req.Language, HttpContext.RequestAborted);
            return response;
        }

        [HttpGet]
        public object Test() => new
        {
            ConfigFile = settings?.ConfigFile ?? "No config file",
            Translations = referenceDataService.GetReferenceData().Count
        };
    }
}