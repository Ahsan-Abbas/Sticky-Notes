using ConfiguratorEnrichedAPI.Models;
using ConfiguratorEnrichedAPI.Services;
using Microsoft.AspNetCore.Mvc;

namespace ConfiguratorEnrichedAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ImageGenerationController(ImageGenerationService iGen) : Controller
{
    [HttpPost]
    public async Task<dynamic> GetLayeredImage([FromBody] LayerCollectionModel? req)
    {
        var (isValid, description) = Validate(req);
        if (!isValid)
            return Results.BadRequest(description);
        else
        {
            var stream = await iGen.GenerateImage(req!);
            return Results.File(stream, contentType: "image/png");
        }
    }

    private static (bool isValid, string description) Validate(LayerCollectionModel? model)
    {
        try
        {
            if (model == null)
                return (false, "The supplied data or structure is not valid");
            if ((model.Dimensions?.Width * model?.Dimensions?.Height) == 0)
                return (false, "Dimension values are not valid");
            return (true, "");
        }
        catch (Exception ex)
        {
            return (false, ex.Message);
        }
    }
}



