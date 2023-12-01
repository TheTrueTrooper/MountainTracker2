using GraphQL.DataLoader;
using GraphQL.Types;
using MountainTracker.Server.Services.LocalServices.Interfaces;
using MountainTracker.Shared.Model;
using static System.Formats.Asn1.AsnWriter;

namespace MountainTracker.Server.GraphQlApi.GraphTypes;

public class AreaGeoFenceNodeType : ObjectGraphType<AreaGeoFenceNodes>, IDisposable
{
    private List<IServiceScope> scopes = new List<IServiceScope>(1);

    public AreaGeoFenceNodeType(IDataLoaderContextAccessor accessor, IServiceProvider serviceProvider)
    {
        Name = "AreaGeoFenceNode";
        Description = "Area Geo Fence Node Type";

        Field(d => d.Id, nullable: false).Description("Database Id");
        Field(d => d.AreaId, nullable: false).Description("Database Id of parent area");
        Field(d => d.Latitude, nullable: false).Description("Latitude of node in geo fence");
        Field(d => d.Longitude, nullable: false).Description("Longitude of node in geo fence");

        var areaScope = CreateScope(serviceProvider);
        Field<AreaType, Areas>("area")
            .ResolveAsync(async context =>
            {
                var areaService = areaScope.ServiceProvider.GetService<IAreaService>()!;
                var loader = accessor.Context!.GetOrAddBatchLoader<int, Areas>("GetAreasByIds", areaService.GetAreasByIds);
                return loader.LoadAsync(context.Source.AreaId);
            })
            .Description("Area geo fence node's associated area");
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
