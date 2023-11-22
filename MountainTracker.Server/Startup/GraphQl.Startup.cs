using GraphQL;
using GraphQL.DI;
using GraphQL.Caching;
using GraphQL.MicrosoftDI;
using GraphQL.SystemTextJson;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using MountainTracker.Server.Config;
using MountainTracker.Server.Models.GraphQlApi;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory;
using GraphQL.Types;

namespace MountainTracker.Server.Startup;

public static class GraphQlStartup
{
    public static WebApplicationBuilder AddGraphQl(this WebApplicationBuilder app)
    {
        IConfiguration Configuration = app.Configuration;
        IServiceCollection services = app.Services;

        services.AddGraphQL(b => {
            b.AddSchema<MountainTrackerSchema>(GraphQL.DI.ServiceLifetime.Scoped);
            b.AddSystemTextJson();
            b.AddApolloTracing(options => options.RequestServices!.GetRequiredService<IOptions<GraphQlConfig>>().Value.EnableMetrics);
            });
        ;

        services.Scan(scan =>
            scan.FromAssemblyOf<MountainTrackerSchema>()
            .AddClasses(classes => classes.AssignableTo<ObjectGraphType>())
            .AsSelf()
            .WithScopedLifetime()
            );

        services.Configure<GraphQlConfig>(Configuration.GetSection("GraphQlConfig"));
        services.AddScoped<MountainTrackerSchema>();
        services.AddLogging(builder => builder.AddConsole());
        services.AddHttpContextAccessor();
        services.AddControllersWithViews()
            .AddJsonOptions(opts => opts.JsonSerializerOptions.Converters.Add(new InputsJsonConverter()));
        return app;
    }
}
