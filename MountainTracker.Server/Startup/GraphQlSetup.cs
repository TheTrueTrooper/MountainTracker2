using GraphQL;
using GraphQL.DataLoader;
using MountainTracker.Server.Config;
using MountainTracker.Server.GraphQlApi;

namespace MountainTracker.Server.Startup
{
    public static class GraphQlSetup
    {
        const string configKey = GlobalConfigKeys.GraphQlConfigKey;

        public static IServiceCollection AddGraphQl(this IServiceCollection services, ConfigurationManager configurationManager)
        {
            services.AddScoped<IDataLoaderContextAccessor, DataLoaderContextAccessor>();
            services.AddScoped<DataLoaderDocumentListener>();
            services.AddGraphQL(builder => builder
                .ConfigureExecutionOptions(options=> 
                {
                    options.ThrowOnUnhandledException = true;
                    options.EnableMetrics = true;
                 })
                .AddSelfActivatingSchema<MountainTrackerSchema>(GraphQL.DI.ServiceLifetime.Scoped)
                .AddErrorInfoProvider()
                .AddAutoClrMappings()
                .AddSystemTextJson()
                .AddErrorInfoProvider(options => 
                {
                    options.ExposeExceptionDetails = true;
                })
                .AddDataLoader()
                .AddGraphTypes());
            return services;
        }

        public static IApplicationBuilder AddGraphQl(this IApplicationBuilder webApp, IConfiguration configuration)
        {
            GraphQlConfig config = configuration.GetSection(configKey).Get<GraphQlConfig>()!;

            webApp.UseGraphQL<MountainTrackerSchema>(config.GraphQlApiEndpoint, config => {
                config.AuthorizationRequired = false;
                config.HandlePost = true;
                config.HandleWebSockets = true;
                config.EnableBatchedRequests = false;
            });
            if (config.ShowUi)
            {
                webApp.UseGraphQLPlayground(config.UiEndpoint, new GraphQL.Server.Ui.Playground.PlaygroundOptions
                {
                    GraphQLEndPoint = config.GraphQlApiEndpoint,
                });
            }
            if (config.ShowVisualNodes)
            {
                webApp.UseGraphQLVoyager(config.VisualNodesEndpoint, new GraphQL.Server.Ui.Voyager.VoyagerOptions
                {
                    GraphQLEndPoint = config.GraphQlApiEndpoint,
                });
            }
            return webApp;
        }
    }
}
