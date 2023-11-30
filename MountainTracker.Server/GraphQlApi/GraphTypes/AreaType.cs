using GraphQL.DataLoader;
using GraphQL.Types;
using MountainTracker.Server.Services.LocalServices.Interfaces;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.GraphQlApi.GraphTypes;

public class AreaType : ObjectGraphType<Areas>
{
    public AreaType(IDataLoaderContextAccessor accessor, IZoneService zoneService, IRockClimbingWallService rockClimbingWallService, IAreaGeoFenceNodeService areaGeoFenceNodeService)
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

#pragma warning disable CS1998 // The lib handels but does not suppress when method Then is called (but requires async)
        Field<ZoneType, Zones>("zone")
            .ResolveAsync(async context =>
            {
                var loader = accessor.Context!.GetOrAddCollectionBatchLoader<int, Zones>("GetZonesByIds", zoneService.GetZonesByIds);
                return loader.LoadAsync(context.Source.ZoneId).Then(x => x.First());
            })
            .Description("Area's associated zone");
#pragma warning restore CS1998 // Async method lacks 'await' operators and will run synchronously

        Field<ListGraphType<RockClimbingWallType>, IEnumerable<RockClimbingWalls>>("rockWalls")
            .ResolveAsync(context =>
            {
                var loader = accessor.Context!.GetOrAddCollectionBatchLoader<int, RockClimbingWalls>("GetRockClimbingWallsByAreas", rockClimbingWallService.GetRockClimbingWallsByAreas);
                return loader.LoadAsync(context.Source.Id);
            })
            .Description("Area's associated rock climbing walls");

        Field<ListGraphType<AreaGeoFenceNodeType>, IEnumerable<AreaGeoFenceNodes>>("geoFenceNodes")
            .ResolveAsync(context =>
            {
                var loader = accessor.Context!.GetOrAddCollectionBatchLoader<int, AreaGeoFenceNodes>("GetAreaGeoFenceNodesByAreas", areaGeoFenceNodeService.GetAreaGeoFenceNodesByAreas);
                return loader.LoadAsync(context.Source.Id);
            })
            .Description("Area's associated geo fence nodes");
    }
}
