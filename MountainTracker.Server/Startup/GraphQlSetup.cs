using GraphQL;
using GraphQL.Types;
using Microsoft.AspNetCore.Builder;
using MountainTracker.Server.Config;
using MountainTracker.Server.GraphQlApi;
using MountainTracker.Server.GraphQlApi.GraphTypes;
using MountainTracker.Server.GraphQlApi.QlQuery;
using MountainTracker.Server.Services;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.Startup
{
    public static class GraphQlSetup
    {
        const string configKey = "GraphQlConfig";

        public static IServiceCollection AddGraphQl(this IServiceCollection services, ConfigurationManager configurationManager)
        {
            //services.AddScoped<MountainTrackerSchema>();
            //services.Scan(scan => scan
            //    .FromAssemblyOf<MountainTrackerSchema>()
            //    .AddClasses(classes => classes.AssignableTo<GraphQL.Types.GraphType>())
            //        .AsSelf()
            //        .WithScopedLifetime());

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
                .AddErrorInfoProvider(opt => opt.ExposeExceptionDetails = true)
                .AddGraphTypes());
            return services;
        }

        public static IApplicationBuilder AddGraphQl(this IApplicationBuilder webApp, IConfiguration configuration)
        {
            GraphQlConfig config = configuration.GetSection(configKey).Get<GraphQlConfig>()!;

            webApp.UseGraphQL<MountainTrackerSchema>(config.ApiEndpoint, config => {
                config.AuthorizationRequired = false;
                config.HandlePost = true;
                config.HandleWebSockets = true;
                config.EnableBatchedRequests = false;
            });
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
