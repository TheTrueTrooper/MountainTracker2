using GraphQL.DataLoader;
using GraphQL.Types;
using MountainTracker.Server.Services;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.GraphQlApi.GraphTypes;

public class ZoneType : ObjectGraphType<Zones>
{
    public ZoneType(IDataLoaderContextAccessor accessor, IAreaService areaService, IZoneGeoFenceNodeService zoneGeoFenceNodeService)
    {
        Name = "Zone";
        Description = "Zone Type";

        Field(d => d.Id, nullable: false).Description("Database Id");
        Field(d => d.ZoneCode, nullable: false).Description("Code for Zone or state");
        Field(d => d.EnglishFullName, nullable: false).Description("Zone's english name");
        Field(d => d.DistrictId, nullable: false).Description("Zone's district id");
        Field(d => d.Info, nullable: true).Description("Zone's english info");
        Field(d => d.ThumbPictureBytes, nullable: true).Description("Zone's thumb picture in bytes");

        Field(d => d.LatitudeStartOrCenter, nullable: true).Description("Zone's latitude location by center or start");
        Field(d => d.LongitudeStartOrCenter, nullable: true).Description("Zone's latitude location by center or start");

        Field<ListGraphType<AreaType>, IEnumerable<Areas>>("areas")
            .ResolveAsync(context =>
            {
                var loader = accessor.Context!.GetOrAddCollectionBatchLoader<int, Areas>("GetAreasByZones", areaService.GetAreasByZones);
                return loader.LoadAsync(context.Source.Id);
            })
            .Description("Zone's associated areas");

        Field<ListGraphType<ZoneGeoFenceNodeType>, IEnumerable<ZoneGeoFenceNodes>>("geoFenceNodes")
            .ResolveAsync(context =>
            {
                var loader = accessor.Context!.GetOrAddCollectionBatchLoader<int, ZoneGeoFenceNodes>("GetZoneGeoFenceNodesbyZones", zoneGeoFenceNodeService.GetZoneGeoFenceNodesbyZones);
                return loader.LoadAsync(context.Source.Id);
            })
            .Description("Zone's associated geo fence nodes");
    }
}
