using GraphQL.DataLoader;
using GraphQL.Reflection;
using GraphQL.Types;
using MountainTracker.Server.Services.LocalServices.Interfaces;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.GraphQlApi.GraphTypes;

public class DistrictGeoFenceNodeType : ObjectGraphType<DistrictGeoFenceNodes>
{
    public DistrictGeoFenceNodeType(IDataLoaderContextAccessor accessor, IDistrictService districtService)
    {
        Name = "DistrictGeoFenceNode";
        Description = "District Geo Fence Node Type";

        Field(d => d.Id, nullable: false).Description("Database Id");
        Field(d => d.DistrictId, nullable: false).Description("Database Id of parent district");
        Field(d => d.Latitude, nullable: false).Description("Latitude of node in geo fence");
        Field(d => d.Longitude, nullable: false).Description("Longitude of node in geo fence");

#pragma warning disable CS1998 // The lib handels but does not suppress when method Then is called (but requires async)
        Field<DistrictType, Districts>("district")
            .ResolveAsync(async context =>
            {
                var loader = accessor.Context!.GetOrAddCollectionBatchLoader<int, Districts>("GetDistrictsByIds", districtService.GetDistrictsByIds);
                return loader.LoadAsync(context.Source.DistrictId).Then(x => x.First());
            })
            .Description("District geo fence node's associated district");
#pragma warning restore CS1998 // Async method lacks 'await' operators and will run synchronously
    }
}
