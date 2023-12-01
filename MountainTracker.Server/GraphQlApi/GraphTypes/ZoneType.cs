using GraphQL.DataLoader;
using GraphQL.Types;
using Microsoft.Extensions.DependencyInjection;
using MountainTracker.Server.Services.LocalServices.Interfaces;
using MountainTracker.Shared.Model;
using static System.Formats.Asn1.AsnWriter;

namespace MountainTracker.Server.GraphQlApi.GraphTypes;

public class ZoneType : ObjectGraphType<Zones>, IDisposable
{
    private List<IServiceScope> scopes = new List<IServiceScope>(3);

    public ZoneType(IDataLoaderContextAccessor accessor, IServiceProvider serviceProvider)
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

        var districtScope = CreateScope(serviceProvider);
        Field<DistrictType, Districts>("district")
            .ResolveAsync(async context =>
            {
                var districtService = districtScope.ServiceProvider.GetService<IDistrictService>()!;
                var loader = accessor.Context!.GetOrAddBatchLoader<int, Districts>("GetDistrictsByIds", districtService.GetDistrictsByIds);
                return loader.LoadAsync(context.Source.DistrictId);
            })
            .Description("Zones's associated district");

        var areasScope = CreateScope(serviceProvider);
        Field<ListGraphType<AreaType>, IEnumerable<Areas>>("areas")
            .ResolveAsync(context =>
            {
                var areaService = areasScope.ServiceProvider.GetService<IAreaService>()!;
                var loader = accessor.Context!.GetOrAddCollectionBatchLoader<int, Areas>("GetAreasByZones", areaService.GetAreasByZones);
                return loader.LoadAsync(context.Source.Id);
            })
            .Description("Zone's associated areas");

        var geoFenceNodesScope = CreateScope(serviceProvider);
        Field<ListGraphType<ZoneGeoFenceNodeType>, IEnumerable<ZoneGeoFenceNodes>>("geoFenceNodes")
            .ResolveAsync(context =>
            {
                var zoneGeoFenceNodeService = geoFenceNodesScope.ServiceProvider.GetService<IZoneGeoFenceNodeService>()!;
                var loader = accessor.Context!.GetOrAddCollectionBatchLoader<int, ZoneGeoFenceNodes>("GetZoneGeoFenceNodesByZones", zoneGeoFenceNodeService.GetZoneGeoFenceNodesByZones);
                return loader.LoadAsync(context.Source.Id);
            })
            .Description("Zone's associated geo fence nodes");
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
