global using Microsoft.Extensions.Caching.Memory;
using ConfiguratorEnrichedAPI.Models;
using ConfiguratorEnrichedAPI.Services;
using ConfiguratorEnrichedAPI.Utils;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Quartz;
using SolutionSpace.DocGen.Data;
using SolutionSpace.DocGen.Engine;
using System.Diagnostics;

var builder = WebApplication.CreateBuilder(args);

builder.Logging.AddEventLog(options =>
{
    if (EventLog.Exists("ConfiguratorEnrichedAPI"))
        options.LogName = "ConfiguratorEnrichedAPI";
    options.SourceName = "ConfiguratorEnrichedAPI";
});

// Add services to the container.
const string CorsAllowAll = "CorsAllowAll";
builder.Services.AddCors(opt => opt.AddPolicy(name: CorsAllowAll, b => b.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader()));
builder.Services.AddControllers();

var settings = builder.Configuration.Get<ApiSettings>() ?? throw new Exception("Unable to load settings");

builder.Services.AddMemoryCache();
builder.Services.AddSingleton(typeof(SeparatedMemoryCache<>));
builder.Services.AddSingleton(settings);
builder.Services.AddSingleton(settings.Ace);
builder.Services.AddSingleton(settings.BIM);
builder.Services.AddSingleton(settings.Marketo);
builder.Services.AddSingleton(settings.PIM);
builder.Services.AddSingleton(settings.RMDR);
builder.Services.AddSingleton<AceRequestService>();
builder.Services.AddSingleton<MarketoService>();
builder.Services.AddSingleton<ReferenceDataService>();
builder.Services.AddSingleton<EnrichedConfigureService>();
builder.Services.AddScoped<IImageProvider, DocumentImageService>();
builder.Services.AddScoped<DocumentGenerator>();
builder.Services.AddScoped<BIMService>();
builder.Services.AddScoped<PIMService>();
builder.Services.AddScoped<ImageGenerationService>();

builder.Services.AddHttpClient();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddQuartz(q =>
{
    if (settings.RMDR.Enabled)
    {
        var jobKey = new JobKey("ReferenceDataServiceDataLoad");
        q.AddJob<ReferenceDataService>(opts => opts.WithIdentity(jobKey));

        q.AddTrigger(opts => opts
            .ForJob(jobKey)
            .WithIdentity("ReferenceDataServiceDataLoad-trigger")
            .WithCalendarIntervalSchedule(CalendarIntervalScheduleBuilder.Create().WithIntervalInMinutes(settings.RMDR.ScheduledJobInterval))
        );
    }

    var aceJobKey = new JobKey("AceReleaseInfo");
    q.AddJob<AceRequestService>(opts => opts.WithIdentity(aceJobKey));

    q.AddTrigger(opts => opts
        .ForJob(aceJobKey)
        .WithIdentity("AceReleaseInfo-trigger")
        .WithCalendarIntervalSchedule(CalendarIntervalScheduleBuilder.Create().WithIntervalInMinutes(2))
    );
});
builder.Services.AddQuartzHostedService(q => q.WaitForJobsToComplete = true);
builder.Services.AddResponseCompression(options =>
{
    options.EnableForHttps = true;
});

var app = builder.Build();
var logger = app.Services.GetRequiredService<ILogger<Program>>();

// Configure the HTTP request pipeline
app.UseCors(CorsAllowAll);

app.UseResponseCompression();

var fso = new FileServerOptions();
fso.StaticFileOptions.OnPrepareResponse = ctx =>
{
    if (ctx.File.Name.Equals("index.html", StringComparison.OrdinalIgnoreCase))
    {
        ctx.Context.Response.Headers.CacheControl = "no-cache, no-store, must-revalidate";
        ctx.Context.Response.Headers.Expires = "-1";
    }

    logger.LogInformation("Custom log - Request path: {path}", ctx.Context.Request.Path.Value);
    if (ctx.File.PhysicalPath != null && ctx.File.PhysicalPath.Contains("storybook\\assets") && ctx.File.PhysicalPath.Contains(".css"))
    {
        ctx.Context.Response.Headers.ContentType = "application/javascript";
        ctx.Context.Response.Headers["X-DDA"] = "Test";
    }
};
app.UseFileServer(fso);

app.UseAuthorization();

app.MapControllers();

if (app.Environment.IsEnvironment("Local"))
{
    app.UseDeveloperExceptionPage();

    app.UseSwagger();
    app.UseSwaggerUI();
    app.MapWhen(x => x.Request.Path.Value == null || !x.Request.Path.Value.StartsWith("/api"), builder =>
    {
        builder.UseSpa(spa =>
        {
            spa.Options.SourcePath = "..\\CalculationToolUI";
            spa.Options.DevServerPort = 5200;

            spa.UseReactDevelopmentServer("start");
        });
    });
}
else
{
    //Specifically handle requests for index.js and .css, as the file names changed with build tool upgrades
    app.Use(async (HttpContext ctx, Func<Task> next) =>
    {
        if (ctx.Request.Path.Value == "/index.js")
            ctx.Response.Redirect("/calculation.js");
        else if (ctx.Request.Path.Value == "/index.css")
            ctx.Response.Redirect("/calculation.css");
        else
            await next.Invoke();
    });
}

app.Run();
