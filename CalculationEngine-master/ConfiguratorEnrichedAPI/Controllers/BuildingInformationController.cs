using ConfiguratorEnrichedAPI.Models;
using ConfiguratorEnrichedAPI.Services;
using Microsoft.AspNetCore.Mvc;

namespace ConfiguratorEnrichedAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")] // /[action]
    public class BuildingInformationController(BIMService bim) : Controller
    {
        [HttpPost]
        public async Task<IEnumerable<BuildingElement>> Building(BuildingElementRequest req)
        {
            return await bim.GetBuildingElementList(req);
        }

        [HttpPost]
        public async Task<VariantDetails> Variant(BuildingElementVariantRequest req)
        {
            return await bim.GetBuildingElementVariant(req);
        }
    }
}
