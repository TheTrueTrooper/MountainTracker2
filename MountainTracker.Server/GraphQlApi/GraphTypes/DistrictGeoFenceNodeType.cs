using GraphQL.DataLoader;
using GraphQL.Reflection;
using GraphQL.Types;
using MountainTracker.Server.Services.LocalServices.Interfaces;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.GraphQlApi.GraphTypes;

public class DistrictGeoFenceNodeType : ObjectGraphType<DistrictGeoFenceNodes>
{
    public DistrictGeoFenceNodeType(IDataLoaderContextAccessor accessor, IServiceProvider serviceProvider)
    {
        Name = "DistrictGeoFenceNode";
        Description = "District Geo Fence Node Type";

        Field(d => d.Id, nullable: false).Description("Database Id");
        Field(d => d.DistrictId, nullable: false).Description("Database Id of parent district");
        Field(d => d.Latitude, nullable: false).Description("Latitude of node in geo fence");
        Field(d => d.Longitude, nullable: false).Description("Longitude of node in geo fence");

        var districtScope = serviceProvider.CreateScope();
        Field<DistrictType, Districts>("district")
            .ResolveAsync(async context =>
            {
                var districtService = districtScope.ServiceProvider.GetService<IDistrictService>()!;
                var loader = accessor.Context!.GetOrAddBatchLoader<int, Districts>("GetDistrictsByIds", districtService.GetDistrictsByIds);
                return loader.LoadAsync(context.Source.DistrictId);
            })
            .Description("District geo fence node's associated district");
    }
}
