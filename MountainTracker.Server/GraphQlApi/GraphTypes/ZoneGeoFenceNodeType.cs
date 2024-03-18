using GraphQL.DataLoader;
using GraphQL.Types;
using MountainTracker.Server.Services.LocalServices.Interfaces;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.GraphQlApi.GraphTypes;

public class ZoneGeoFenceNodeType : ObjectGraphType<ZoneGeoFenceNodes>, IDisposable
{
    private List<IServiceScope> scopes = new List<IServiceScope>(1);

    public ZoneGeoFenceNodeType(IDataLoaderContextAccessor accessor, IServiceProvider serviceProvider)
    {
        Name = "ZoneGeoFenceNode";
        Description = "Zone Geo Fence Node Type";

        Field(d => d.Id, nullable: false).Description("Database Id");
        Field(d => d.ZoneId, nullable: false).Description("Database Id of parent zone");
        Field(d => d.Latitude, nullable: false).Description("Latitude of node in geo fence");
        Field(d => d.Longitude, nullable: false).Description("Longitude of node in geo fence");

        var zoneScope = CreateScope(serviceProvider);
#pragma warning disable CS1998 // Async method lacks 'await' operators and will run synchronously
        Field<ZoneType, Zones>("zone")
            .ResolveAsync(async context =>
            {
                var zoneService = zoneScope.ServiceProvider.GetService<IZoneService>()!;
                var loader = accessor.Context!.GetOrAddBatchLoader<int, Zones>("GetZonesByIds", zoneService.GetZonesByIds);
                return loader.LoadAsync(context.Source.ZoneId);
            })
            .Description("Zone geo fence node's associated zone");
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
