using GraphQL.DataLoader;
using GraphQL.Types;
using MountainTracker.Server.Services.LocalServices.Interfaces;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.GraphQlApi.GraphTypes;

public class DistrictGeoFenceNodeType : ObjectGraphType<DistrictGeoFenceNodes>, IDisposable
{
    private List<IServiceScope> scopes = new List<IServiceScope>(1);

    public DistrictGeoFenceNodeType(IDataLoaderContextAccessor accessor, IServiceProvider serviceProvider)
    {
        Name = "DistrictGeoFenceNode";
        Description = "District Geo Fence Node Type";

        Field(d => d.Id, nullable: false).Description("Database Id");
        Field(d => d.DistrictId, nullable: false).Description("Database Id of parent district");
        Field(d => d.Latitude, nullable: false).Description("Latitude of node in geo fence");
        Field(d => d.Longitude, nullable: false).Description("Longitude of node in geo fence");

        var districtScope = CreateScope(serviceProvider);
        Field<DistrictType, Districts>("district")
            .ResolveAsync(async context =>
            {
                var districtService = districtScope.ServiceProvider.GetService<IDistrictService>()!;
                var loader = accessor.Context!.GetOrAddBatchLoader<int, Districts>("GetDistrictsByIds", districtService.GetDistrictsByIds);
                return loader.LoadAsync(context.Source.DistrictId);
            })
            .Description("District geo fence node's associated district");
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
