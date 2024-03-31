using GraphQL.DataLoader;
using GraphQL.Types;
using MountainTracker.Server.Services.LocalServices.Interfaces;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.GraphQlApi.GraphTypes;

public class AreaType : ObjectGraphType<Areas>, IDisposable
{
    private List<IServiceScope> scopes = new List<IServiceScope>(3);

    public AreaType(IDataLoaderContextAccessor accessor, IServiceProvider serviceProvider)
    {
        Name = "Area";
        Description = "Area Type";

        Field(d => d.Id, nullable: false).Description("Database Id");
        Field(d => d.AreaCode, nullable: false).Description("Code for area");
        Field(d => d.EnglishFullName, nullable: false).Description("Area's english name");
        Field(d => d.ZoneId, nullable: false).Description("Area's district id");
        Field(d => d.Info, nullable: true).Description("Area's english info");
        Field(d => d.ThumbPictureBytes, nullable: true).Description("Area's thumb picture in bytes");

        Field(d => d.LatitudeStartOrCenter, nullable: true).Description("Area's latitude location by center or start");
        Field(d => d.LongitudeStartOrCenter, nullable: true).Description("Area's latitude location by center or start");

        var zoneScope = CreateScope(serviceProvider);
#pragma warning disable CS1998 // Async method lacks 'await' operators and will run synchronously
        Field<ZoneType, Zones>("zone")
            .ResolveAsync(async context =>
            {
                var zoneService = zoneScope.ServiceProvider.GetService<IZoneService>()!;
                var loader = accessor.Context!.GetOrAddBatchLoader<int, Zones>("GetZonesByIds", zoneService.GetZonesByIds);
                return loader.LoadAsync(context.Source.ZoneId);
            })
            .Description("Area's associated zone");

        var rockClimbingWallsScope = CreateScope(serviceProvider);
        Field<ListGraphType<RockClimbingWallType>, IEnumerable<RockClimbingWalls>>("rockClimbingWalls")
            .ResolveAsync(context =>
            {
                var rockClimbingWallService = rockClimbingWallsScope.ServiceProvider.GetService<IRockClimbingWallService>()!;
                var loader = accessor.Context!.GetOrAddCollectionBatchLoader<int, RockClimbingWalls>("GetRockClimbingWallsByAreas", rockClimbingWallService.GetRockClimbingWallsByAreas);
                return loader.LoadAsync(context.Source.Id);
            })
            .Description("Area's associated rock climbing walls");

        var geoFenceNodesScope = CreateScope(serviceProvider);
        Field<ListGraphType<AreaGeoFenceNodeType>, IEnumerable<AreaGeoFenceNodes>>("geoFenceNodes")
            .ResolveAsync(context =>
            {
                var areaGeoFenceNodeService = geoFenceNodesScope.ServiceProvider.GetService<IAreaGeoFenceNodeService>()!;
                var loader = accessor.Context!.GetOrAddCollectionBatchLoader<int, AreaGeoFenceNodes>("GetAreaGeoFenceNodesByAreas", areaGeoFenceNodeService.GetAreaGeoFenceNodesByAreas);
                return loader.LoadAsync(context.Source.Id);
            })
            .Description("Area's associated geo fence nodes");
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
