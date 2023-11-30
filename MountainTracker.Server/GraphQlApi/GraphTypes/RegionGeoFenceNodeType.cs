using GraphQL.DataLoader;
using GraphQL.Reflection;
using GraphQL.Types;
using MountainTracker.Server.Services.LocalServices.Interfaces;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.GraphQlApi.GraphTypes;

public class RegionGeoFenceNodeType : ObjectGraphType<RegionGeoFenceNodes>
{
    public RegionGeoFenceNodeType(IDataLoaderContextAccessor accessor, IServiceProvider serviceProvider)
    {
        Name = "RegionGeoFenceNode";
        Description = "Region Geo Fence Node Type";

        Field(d => d.Id, nullable: false).Description("Database Id");
        Field(d => d.RegionId, nullable: false).Description("Database Id of parent region");
        Field(d => d.Latitude, nullable: false).Description("Latitude of node in geo fence");
        Field(d => d.Longitude, nullable: false).Description("Longitude of node in geo fence");

        var regionScope = serviceProvider.CreateScope();
        Field<RegionType, Regions>("region")
            .ResolveAsync(async context =>
            {
                var regionService = regionScope.ServiceProvider.GetService<IRegionService>()!;
                var loader = accessor.Context!.GetOrAddBatchLoader<int, Regions>("GetRegionsByIds", regionService.GetRegionsByIds);
                return loader.LoadAsync(context.Source.RegionId);
            })
            .Description("Region geo fence node's associated region");

    }
}
