using ConfiguratorEnrichedAPI.Models;
using ConfiguratorEnrichedAPI.Services;
using Microsoft.AspNetCore.Mvc;

namespace ConfiguratorEnrichedAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TranslationsController(ApiSettings.RMDRSettings apiSettings, EnrichedConfigureService configure, ReferenceDataService referenceDataService) : ControllerBase
    {
        [HttpPost]
        public Dictionary<string, string> Post(TranslationRequest req)
        {
            var groups = referenceDataService.GetReferenceData();
            return configure.GetApplicationTranslations(apiSettings.ApplicationTranslations, groups, req.Language);
        }
    }
}
