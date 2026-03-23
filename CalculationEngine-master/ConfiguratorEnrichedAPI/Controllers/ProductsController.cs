using ConfiguratorEnrichedAPI.Models;
using ConfiguratorEnrichedAPI.Services;
using Microsoft.AspNetCore.Mvc;

namespace ConfiguratorEnrichedAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")] // /[action]
    public class ProductsController(PIMService pim) : Controller
    {
        [HttpPost]
        public async Task<dynamic> Post(PIMRequestService req)
        {
            await pim.GetAuthToken();
            return await pim.FindProducts(req);
        }
    }
}
