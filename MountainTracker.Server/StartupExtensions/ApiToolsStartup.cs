using MountainTracker.Server.Config;
using NSwag;
using NSwag.Generation.AspNetCore;

namespace MountainTracker.Server.StartupExtensions;

public static class ApiToolsStartup
{
    const string apiToolsKey = GlobalConfigKeys.ApiToolsKey;

    public static IServiceCollection AddTools(this IServiceCollection services, ConfigurationManager configurationManager)
    {
        services.AddSwagger(configurationManager);
        return services;
    }

    private static IServiceCollection AddSwagger(this IServiceCollection services, ConfigurationManager configurationManager)
    {
        AspNetCoreOpenApiDocumentGeneratorSettings config = configurationManager.GetSection($"{apiToolsKey}:OpenApi").Get<AspNetCoreOpenApiDocumentGeneratorSettings>()!;
        services.AddOpenApiDocument(options =>
        {
            options.DocumentName = config.Version;
            options.Title = config.Title;
            options.Version = config.Version;
        });
        return services;
    }

    public static IApplicationBuilder UseTools(this IApplicationBuilder webApp, IConfiguration configuration)
    {
        webApp.UseOpenApi(configuration);
        return webApp;
    }

    private static IApplicationBuilder UseOpenApi(this IApplicationBuilder webApp, IConfiguration configuration)
    {
        AspNetCoreOpenApiDocumentGeneratorSettings config = configuration.GetSection($"{apiToolsKey}:OpenApi").Get<AspNetCoreOpenApiDocumentGeneratorSettings>()!;
        webApp.UseOpenApi(p => p.Path = $"/swagger/{config.Version}/swagger.yaml");
        webApp.UseSwaggerUi(p => p.DocumentPath = $"/swagger/{config.Version}/swagger.yaml");
        return webApp;
    }
}
