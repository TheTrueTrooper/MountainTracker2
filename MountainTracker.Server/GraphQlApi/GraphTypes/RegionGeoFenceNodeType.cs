using GraphQL.DataLoader;
using GraphQL.Reflection;
using GraphQL.Types;
using MountainTracker.Server.Services;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.GraphQlApi.GraphTypes;

public class RegionGeoFenceNodeType : ObjectGraphType<RegionGeoFenceNodes>
{
    public RegionGeoFenceNodeType(IDataLoaderContextAccessor accessor, IRegionService regionService)
    {
        Name = "RegionGeoFenceNode";
        Description = "Region Geo Fence Node Type";

        Field(d => d.Id, nullable: false).Description("Database Id");
        Field(d => d.RegionId, nullable: false).Description("Database Id of parent region");
        Field(d => d.Latitude, nullable: false).Description("Latitude of node in geo fence");
        Field(d => d.Longitude, nullable: false).Description("Longitude of node in geo fence");

#pragma warning disable CS1998 // The lib handels but does not suppress when method Then is called (but requires async)
        Field<RegionType, Regions>("region")
            .ResolveAsync(async context =>
            {
                var loader = accessor.Context!.GetOrAddCollectionBatchLoader<int, Regions>("GetRegionsByIds", regionService.GetRegionsByIds);
                return loader.LoadAsync(context.Source.RegionId).Then(x => x.First());
            })
            .Description("Region geo fence node's associated region");
#pragma warning restore CS1998 // Async method lacks 'await' operators and will run synchronously
    }
}
