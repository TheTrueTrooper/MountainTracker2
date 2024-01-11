using MountainTracker.Server.Config;
using MountainTracker.Server.Config.Client;

namespace MountainTracker.Server.Startup;

public static class ClientSetup
{
    const string configKey = GlobalConfigKeys.ClientConfigKey;
    const string graphConfigKey = GlobalConfigKeys.ClientConfigKey;

    public static IServiceCollection AddClientConfig(this IServiceCollection services, ConfigurationManager configurationManager)
    {
        ClientConfig config = configurationManager.GetSection(configKey).Get<ClientConfig>()!;
        GraphQlConfig graphConfig = configurationManager.GetSection(graphConfigKey).Get<GraphQlConfig>()!;

        config.GraphQlApiEndpoint = config.GraphQlApiEndpoint ?? graphConfig.GraphQlApiEndpoint;

        services.AddScoped<IClientConfig, ClientConfig>(provider => config);
        return services;
    }
}
