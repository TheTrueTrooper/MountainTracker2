using GraphQL.DataLoader;
using GraphQL.Types;
using MountainTracker.Server.Services.LocalServices.Interfaces;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.GraphQlApi.GraphTypes;

public class RegionGeoFenceNodeType : ObjectGraphType<RegionGeoFenceNodes>, IDisposable
{
    private List<IServiceScope> scopes = new List<IServiceScope>(1);

    public RegionGeoFenceNodeType(IDataLoaderContextAccessor accessor, IServiceProvider serviceProvider)
    {
        Name = "RegionGeoFenceNode";
        Description = "Region Geo Fence Node Type";

        Field(d => d.Id, nullable: false).Description("Database Id");
        Field(d => d.RegionId, nullable: false).Description("Database Id of parent region");
        Field(d => d.Latitude, nullable: false).Description("Latitude of node in geo fence");
        Field(d => d.Longitude, nullable: false).Description("Longitude of node in geo fence");

        var regionScope = CreateScope(serviceProvider);
#pragma warning disable CS1998 // Async method lacks 'await' operators and will run synchronously
        Field<RegionType, Regions>("region")
            .ResolveAsync(async context =>
            {
                var regionService = regionScope.ServiceProvider.GetService<IRegionService>()!;
                var loader = accessor.Context!.GetOrAddBatchLoader<int, Regions>("GetRegionsByIds", regionService.GetRegionsByIds);
                return loader.LoadAsync(context.Source.RegionId);
            })
            .Description("Region geo fence node's associated region");
#pragma warning restore CS1998 // Async method lacks 'await' operators and will run synchronously

    }

    private IServiceScope CreateScope(IServiceProvider serviceProvider)
    {
        var scope = serviceProvider.CreateScope();
        scopes.Add(scope);
        return scope;
    }

    public void Dispose()
    {
        foreach (var scope in scopes)
        {
            scope.Dispose();
        }
    }
}
