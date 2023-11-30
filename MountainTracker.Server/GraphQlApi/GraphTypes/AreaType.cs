using GraphQL.DataLoader;
using GraphQL.Types;
using MountainTracker.Server.Services.LocalServices.Interfaces;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.GraphQlApi.GraphTypes;

public class AreaType : ObjectGraphType<Areas>
{
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

        var zoneScope = serviceProvider.CreateScope();
        Field<ZoneType, Zones>("zone")
            .ResolveAsync(async context =>
            {
                var zoneService = zoneScope.ServiceProvider.GetService<IZoneService>()!;
                var loader = accessor.Context!.GetOrAddBatchLoader<int, Zones>("GetZonesByIds", zoneService.GetZonesByIds);
                return loader.LoadAsync(context.Source.ZoneId);
            })
            .Description("Area's associated zone");

        var rockClimbingWallsScope = serviceProvider.CreateScope();
        Field<ListGraphType<RockClimbingWallType>, IEnumerable<RockClimbingWalls>>("rockClimbingWalls")
            .ResolveAsync(context =>
            {
                var rockClimbingWallService = rockClimbingWallsScope.ServiceProvider.GetService<IRockClimbingWallService>()!;
                var loader = accessor.Context!.GetOrAddCollectionBatchLoader<int, RockClimbingWalls>("GetRockClimbingWallsByAreas", rockClimbingWallService.GetRockClimbingWallsByAreas);
                return loader.LoadAsync(context.Source.Id);
            })
            .Description("Area's associated rock climbing walls");

        var geoFenceNodesScope = serviceProvider.CreateScope();
        Field<ListGraphType<AreaGeoFenceNodeType>, IEnumerable<AreaGeoFenceNodes>>("geoFenceNodes")
            .ResolveAsync(context =>
            {
                var areaGeoFenceNodeService = geoFenceNodesScope.ServiceProvider.GetService<IAreaGeoFenceNodeService>()!;
                var loader = accessor.Context!.GetOrAddCollectionBatchLoader<int, AreaGeoFenceNodes>("GetAreaGeoFenceNodesByAreas", areaGeoFenceNodeService.GetAreaGeoFenceNodesByAreas);
                return loader.LoadAsync(context.Source.Id);
            })
            .Description("Area's associated geo fence nodes");
    }
}
