using GraphQL.DataLoader;
using GraphQL.Types;
using MountainTracker.Server.Services.LocalServices.Interfaces;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.GraphQlApi.GraphTypes;

public class RockClimbingWallGeoFenceNodeType : ObjectGraphType<RockClimbingWallGeoFenceNodes>, IDisposable
{
    private List<IServiceScope> scopes = new List<IServiceScope>(1);

    public RockClimbingWallGeoFenceNodeType(IDataLoaderContextAccessor accessor, IServiceProvider serviceProvider)
    {
        Name = "RockClimbingWallGeoFenceNode";
        Description = "Rock Climbing Wall Geo Fence Node Type";

        Field(d => d.Id, nullable: false).Description("Database Id");
        Field(d => d.ClimbingWallId, nullable: false).Description("Database Id of parent area");
        Field(d => d.Latitude, nullable: false).Description("Latitude of node in geo fence");
        Field(d => d.Longitude, nullable: false).Description("Longitude of node in geo fence");

        var climbingWallScope = CreateScope(serviceProvider);
        Field<RockClimbingWallType, RockClimbingWalls>("climbingWall")
        .ResolveAsync(async context =>
        {
            var rockClimbingWallService = climbingWallScope.ServiceProvider.GetService<IRockClimbingWallService>()!;
            var loader = accessor.Context!.GetOrAddBatchLoader<int, RockClimbingWalls>("GetRockClimbingWallByIds", rockClimbingWallService.GetRockClimbingWallByIds);
            return loader.LoadAsync(context.Source.ClimbingWallId);
        })
        .Description("Rock climbingWall geo fence node's associated wall");

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
