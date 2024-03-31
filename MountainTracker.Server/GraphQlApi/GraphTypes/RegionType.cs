using GraphQL.DataLoader;
using GraphQL.Types;
using MountainTracker.Server.Services.LocalServices.Interfaces;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.GraphQlApi.GraphTypes;

public class RegionType : ObjectGraphType<Regions>, IDisposable
{
    private List<IServiceScope> scopes = new List<IServiceScope>(3);

    public RegionType(IDataLoaderContextAccessor accessor, IServiceProvider serviceProvider)
    {
        Name = "Region";
        Description = "Region Type";

        Field(d => d.Id, nullable: false).Description("Database Id");
        Field(d => d.RegionCode, nullable: false).Description("Code for region");
        Field(d => d.EnglishFullName, nullable: false).Description("Region's english name");
        Field(d => d.ProvinceOrStateId, nullable: false).Description("Region's province or state id");
        Field(d => d.Info, nullable: true).Description("Region's english info");
        Field(d => d.ThumbPictureBytes, nullable: true).Description("Region's thumb picture in bytes");

        Field(d => d.LatitudeStartOrCenter, nullable: true).Description("Region's thumb picture in bytes");
        Field(d => d.LongitudeStartOrCenter, nullable: true).Description("Region's thumb picture in bytes");

        //create a scope for each service call. this will isolate them from one another. But it must be outside of the function or the data loader will suffer as it uses the scope to keep its self going.
        var provinceOrStateScope = CreateScope(serviceProvider);
#pragma warning disable CS1998 // Async method lacks 'await' operators and will run synchronously
        Field<ProvinceOrStateType, ProvincesOrStates>("provinceOrState")
            .ResolveAsync(async context =>
            {
                var provinceOrStateService = provinceOrStateScope.ServiceProvider.GetService<IProvinceOrStateService>()!;
                var loader = accessor.Context!.GetOrAddBatchLoader<short, ProvincesOrStates>("GetProvincesOrStatesByIds", provinceOrStateService.GetProvincesOrStatesByIds);
                return loader.LoadAsync(context.Source.ProvinceOrStateId);
            })
            .Description("Region's associated provinces or states");

        var districtsScope = CreateScope(serviceProvider);
        Field<ListGraphType<DistrictType>, IEnumerable<Districts>>("districts")
            .ResolveAsync(context =>
            {
                var districtService = districtsScope.ServiceProvider.GetService<IDistrictService>()!;
                var loader = accessor.Context!.GetOrAddCollectionBatchLoader<int, Districts>("GetDistrictsByRegions", districtService.GetDistrictsByRegions);
                return loader.LoadAsync(context.Source.Id);
            })
            .Description("Region's associated districts");

        var geoFenceNodesScope = CreateScope(serviceProvider);
        Field<ListGraphType<RegionGeoFenceNodeType>, IEnumerable<RegionGeoFenceNodes>>("geoFenceNodes")
            .ResolveAsync(context =>
            {
                var regionGeoFenceNodeService = geoFenceNodesScope.ServiceProvider.GetService<IRegionGeoFenceNodeService>()!;
                var loader = accessor.Context!.GetOrAddCollectionBatchLoader<int, RegionGeoFenceNodes>("GetRegionGeoFenceNodesByRegions", regionGeoFenceNodeService.GetRegionGeoFenceNodesByRegions);
                return loader.LoadAsync(context.Source.Id);
            })
            .Description("Region's associated geo fence nodes");
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
