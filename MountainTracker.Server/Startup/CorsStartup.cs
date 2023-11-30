using GraphQL;
using Microsoft.Extensions.Configuration;

namespace MountainTracker.Server.Startup;

public static class CorsStartup
{
    const string configKey = GlobalConfigKeys.CorsConfigKey;
    const string CorsName = GlobalConfigKeys.CorsName;
    public static IServiceCollection AddCorsConfig(this IServiceCollection services, ConfigurationManager configurationManager)
    {
        string? allowedConfig = configurationManager.GetValue<string>(configKey);
        string[] allowed = allowedConfig!.Split(';');
        services.AddCors(options =>
        {
            options.AddPolicy(CorsName,
                builder =>
                {
                    builder
                    .WithOrigins(allowed)
                    .AllowAnyMethod()
                    .AllowAnyHeader();
                });
        });
        return services;
    }

    public static void UseCorsConfig(this IApplicationBuilder webApp, IConfiguration configuration)
    {
        webApp.UseCors(CorsName);
    }
}
