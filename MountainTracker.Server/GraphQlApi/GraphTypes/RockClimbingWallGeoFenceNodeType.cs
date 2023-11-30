using GraphQL.DataLoader;
using GraphQL.Types;
using Microsoft.Extensions.DependencyInjection;
using MountainTracker.Server.Services.LocalServices.Interfaces;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.GraphQlApi.GraphTypes;

public class RockClimbingWallGeoFenceNodeType : ObjectGraphType<RockClimbingWallGeoFenceNodes>
{
    public RockClimbingWallGeoFenceNodeType(IDataLoaderContextAccessor accessor, IServiceProvider serviceProvider)
    {
        Name = "RockClimbingWallGeoFenceNode";
        Description = "Rock Climbing Wall Geo Fence Node Type";

        Field(d => d.Id, nullable: false).Description("Database Id");
        Field(d => d.ClimbingWallId, nullable: false).Description("Database Id of parent area");
        Field(d => d.Latitude, nullable: false).Description("Latitude of node in geo fence");
        Field(d => d.Longitude, nullable: false).Description("Longitude of node in geo fence");

        var climbingWallScope = serviceProvider.CreateScope();
        Field<RockClimbingWallType, RockClimbingWalls>("climbingWall")
        .ResolveAsync(async context =>
        {
            var rockClimbingWallService = climbingWallScope.ServiceProvider.GetService<IRockClimbingWallService>()!;
            var loader = accessor.Context!.GetOrAddBatchLoader<int, RockClimbingWalls>("GetRockClimbingWallsByIds", rockClimbingWallService.GetRockClimbingWallsByIds);
            return loader.LoadAsync(context.Source.ClimbingWallId);
        })
        .Description("Rock climbingWall geo fence node's associated wall");

    }
}
