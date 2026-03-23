using ConfiguratorEnrichedAPI.Services;
using Microsoft.AspNetCore.Mvc;

namespace ConfiguratorEnrichedAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class MarketingController(MarketoService marketo) : Controller
{
    [HttpPost]
    public async Task<dynamic> SaveLead([FromBody] Dictionary<string, object> req)
    { 
        return await marketo.CreateOrUpdateLead(req);
    }
}
