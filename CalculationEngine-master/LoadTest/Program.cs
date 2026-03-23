using ConfiguratorEnrichedAPI.Models;
using ConfiguratorEnrichedAPI.Services;
using ConfiguratorEnrichedAPI.Utils;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Diagnostics;
using System.Text;

Console.OutputEncoding = Encoding.UTF8;

//await RunLoadTest();
await RunBimExtract();

Console.WriteLine("Done!");
Console.ReadLine();

static async Task RunBimExtract()
{
    ApiSettings.BIMSettings settings = new()
    {
        {
            "RW-PL", new()
            {
              ClientId= "5f1c8d25PL-LOCAL",
              ClientSecret= "",
              ApiUrl= "https://bim.rockwool.co.uk"
            }
        },
        {
            "RW-UK", new()
            {
              ClientId= "5f1c8d25-LOCAL",
              ClientSecret= "$2y$10$DFpFh7x1ZcRO8kLcO5Lgp.lO.LVkw6WrP5Zo4afSG8EVnLayYFrua",
              ApiUrl= "https://bim.rockwool.co.uk"
            }
        }
    };
    var client = new HttpClient();
    var cache = new SeparatedMemoryCache<BIMService>(new MemoryCache(new MemoryCacheOptions()));
    var bim = new BIMService(settings, cache, client);

    /*var types = new Dictionary<string, string>()
    {
        { "1", "EXTERNAL_WALL" },
        { "2", "INTERNAL_FLOOR" },
        { "3", "CEILING" },
        { "4", "ROOF" },
    };*/
    var types = new Dictionary<string, (string typeName, string[] groups)>()
    {
        { "1", ( "EXTERNAL_WALL", [ "330", "326", "315", "321", ] ) },
        { "2", ( "INTERNAL_FLOOR", [ "334", "335", ] ) },
        { "3", ( "CEILING", [ "351", "299", "307", "301", "302", ] ) },
        { "4", ( "ROOF", [ "312", "310", ] ) },
    };

    var groupNames = new Dictionary<string, string>() {
        {"310", "Pitched roof - between  the rafter" },
        {"351", "Soffit & Car park" },
        {"312", "Attic/Loft floor" },
        {"299", "Concrete Deck" },
        {"326", "ETICS" },
        {"307", "Green Roof" },
        {"334", "Ground facing floor" },
        {"315", "Metal casettes" },
        {"301", "Metal roof" },
        {"302", "Metal roof system" },
        {"335", "Suspended floor" },
        {"321", "Timber frame" },
        {"330", "Ventilated facade" }
    };

    foreach (var type in types)
    {
        foreach (var group in type.Value.groups)
        {
            var elements = await bim.GetBuildingElementList(new() { ElementType = type.Key, Market = "RW-UK", Group = group });
            foreach (var elm in elements)
            {
                Console.Write(/*type.Value + "|" +*/ elm.Type + "|" + elm.BuildingElementId + "|" + elm.DisplayName);
                var variant = elm.Variants.FirstOrDefault();
                if (variant != null)
                {
                    var variants = await bim.GetBuildingElementVariant(new() { BuildingElementId = elm.BuildingElementId, VariantId = variant.VariantId });
                    foreach (var layer in variants.Layers)
                    {
                        Console.Write("|" + layer.ProductName);
                    }
                }
                Console.WriteLine();
            }
        }
    }
}

static async Task RunLoadTest()
{
    ApiSettings.AceSettings settings = new()
    {
        ApiKey = "MDRjNGE4ZDM4Yzc1NGU0ZmJmNGUxYTRlNTZiZTI5NjhfYzcwNTI5Yzg1NzE1NDQzNjhmZDNiMDA1ZjA4NTk4ZGY=",
        BaseUrl = "https://calculationengine-test.rockwool.com",
        PackagePath = "CalculationTool/Tools",
        WorkItemPackageName = "Internal"
    };

    var conf = new AceConfigureRequest
    {
        Date = DateTime.Now,
        ViewId = "STANDARD_VIEW_01",
        Settings = new()
        {
            NoStateHash = true
        },
        Line = new()
        {
            ProductId = "QUANTITY_CALCULATOR",
            VariableAssignments = [new()
            {
                VariableId = "DIM_BUILDDATE",
                Value = "2023-12-06T00:00:00Z",
                InstanceId = "ROOT"
            }]
        }
    };

    using var loggerFactory = LoggerFactory.Create(loggingBuilder => loggingBuilder
        .SetMinimumLevel(LogLevel.Trace)
        .AddConsole());
    var logger = loggerFactory.CreateLogger<AceRequestService>();

    using var client = new HttpClient();
    var ace = new AceRequestService(settings, client);
    var source = new CancellationTokenSource();

    //Warmup request - don't measure this
    await ace.Configure(null, null, conf, source.Token);

    //First request
    var firstWatch = Stopwatch.StartNew();
    await ace.Configure(null, null, conf, source.Token);
    firstWatch.Stop();
    Console.WriteLine("Time for first request: " + firstWatch.ElapsedMilliseconds + "ms.");

    //Start and cancel 50 requests without waiting
    var loopWatch = Stopwatch.StartNew();
    for (int i = 0; i < 50; i++)
    {
        var innerSource = new CancellationTokenSource();
        var req = ace.Configure(null, null, conf, innerSource.Token);
        innerSource.Cancel();
    }
    loopWatch.Stop();
    Console.WriteLine("Time for loop: " + loopWatch.ElapsedMilliseconds + "ms.");

    //Run last request
    var lastWatch = Stopwatch.StartNew();
    await ace.Configure(null, null, conf, source.Token);
    lastWatch.Stop();
    Console.WriteLine("Time for last request: " + lastWatch.ElapsedMilliseconds + "ms");
}