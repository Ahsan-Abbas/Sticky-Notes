using ConfiguratorEnrichedAPI.Models;
using Microsoft.AspNetCore.Mvc;
using SolutionSpace.DocGen.Data;
using SolutionSpace.DocGen.Engine;
using System.Reflection;

namespace ConfiguratorEnrichedAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DocumentGeneratorController(DocumentGenerator docGen) : ControllerBase
    {
        private readonly Assembly assembly = Assembly.GetExecutingAssembly();

        [HttpPost]
        public ActionResult Post(DocumentGenerationRequest req)
        {
            var template = GetTemplate(req.Template);
            if (template == null)
                return BadRequest("Unable to load the template");
            var reader = new JsonObjectReader(req.JsonData);

            var file = docGen.GenerateDocument(template, DocumentInputType.Docx, DocumentOutputType.Pdf, reader);
            return File(file, "application/pdf", req.FileName ?? req.Template.Replace(".docx", ".pdf"));
        }

        private Stream? GetTemplate(string template) =>
            assembly.GetManifestResourceStream("ConfiguratorEnrichedAPI.Resources.Templates." + template);
    }
}