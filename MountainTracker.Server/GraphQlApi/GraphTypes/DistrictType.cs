using GraphQL.DataLoader;
using GraphQL.Types;
using MountainTracker.Server.Services.LocalServices.Interfaces;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.GraphQlApi.GraphTypes;

public class DistrictType : ObjectGraphType<Districts>, IDisposable
{
    private List<IServiceScope> scopes = new List<IServiceScope>(3);

    public DistrictType(IDataLoaderContextAccessor accessor, IServiceProvider serviceProvider)
    {
        Name = "District";
        Description = "District Type";

        Field(d => d.Id, nullable: false).Description("Database Id");
        Field(d => d.DistrictCode, nullable: false).Description("Code for district");
        Field(d => d.EnglishFullName, nullable: false).Description("District's english name");
        Field(d => d.RegionId, nullable: false).Description("District's province or state id");
        Field(d => d.Info, nullable: true).Description("District's english info");
        Field(d => d.ThumbPictureBytes, nullable: true).Description("District's thumb picture in bytes");

        Field(d => d.LatitudeStartOrCenter, nullable: true).Description("District's latitude location by center or start");
        Field(d => d.LongitudeStartOrCenter, nullable: true).Description("District's latitude location by center or start");

        var regionsScope = CreateScope(serviceProvider);
        Field<RegionType, Regions>("region")
            .ResolveAsync(async context =>
            {
                var regionService = regionsScope.ServiceProvider.GetService<IRegionService>()!;
                var loader = accessor.Context!.GetOrAddBatchLoader<int, Regions>("GetRegionsByIds", regionService.GetRegionsByIds);
                return loader.LoadAsync(context.Source.RegionId);
            })
            .Description("District's associated region");

        var zonesScope = CreateScope(serviceProvider);
        Field<ListGraphType<ZoneType>, IEnumerable<Zones>>("zones")
            .ResolveAsync(context =>
            {
                var zoneService = zonesScope.ServiceProvider.GetService<IZoneService>()!;
                var loader = accessor.Context!.GetOrAddCollectionBatchLoader<int, Zones>("GetZonesByRegions", zoneService.GetZonesByRegions);
                return loader.LoadAsync(context.Source.Id);
            })
            .Description("District's associated zones");

        var geoFenceNodesScope = CreateScope(serviceProvider);
        Field<ListGraphType<DistrictGeoFenceNodeType>, IEnumerable<DistrictGeoFenceNodes>>("geoFenceNodes")
            .ResolveAsync(context =>
            {
                var districtGeoFenceNodeService = geoFenceNodesScope.ServiceProvider.GetService<IDistrictGeoFenceNodeService>()!;
                var loader = accessor.Context!.GetOrAddCollectionBatchLoader<int, DistrictGeoFenceNodes>("GetDistrictGeoFenceNodesByDistricts", districtGeoFenceNodeService.GetDistrictGeoFenceNodesByDistricts);
                return loader.LoadAsync(context.Source.Id);
            })
            .Description("District's associated geo fence nodes");
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
