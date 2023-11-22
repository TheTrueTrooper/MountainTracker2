using GraphQL;
using Microsoft.AspNetCore.Builder;
using MountainTracker.Server.Config;
using MountainTracker.Server.GraphQlApi;

namespace MountainTracker.Server.Startup
{
    public static class GraphQlSetup
    {
        const string configKey = "GraphQlConfig";

        public static IServiceCollection AddGraphQl(this IServiceCollection services, ConfigurationManager configurationManager)
        {
            services.AddGraphQL(b => b
                .AddSchema<MountainTrackerSchema>()
                .AddAutoClrMappings()
                .AddSystemTextJson());
            return services;
        }

        public static IApplicationBuilder AddGraphQl(this IApplicationBuilder webApp, IConfiguration configuration)
        {
            GraphQlConfig config = configuration.GetSection(configKey).Get<GraphQlConfig>()!;

            webApp.UseGraphQL(config.ApiEndpoint);
            if (config.ShowUi)
            {
                webApp.UseGraphQLPlayground(config.UiEndpoint, new GraphQL.Server.Ui.Playground.PlaygroundOptions
                {
                    GraphQLEndPoint = config.ApiEndpoint,
                });
            }
            if (config.ShowVisualNodes)
            {
                webApp.UseGraphQLVoyager(config.VisualNodesEndpoint, new GraphQL.Server.Ui.Voyager.VoyagerOptions
                {
                    GraphQLEndPoint = config.ApiEndpoint,
                });
            }
            return webApp;
        }
    }
}
