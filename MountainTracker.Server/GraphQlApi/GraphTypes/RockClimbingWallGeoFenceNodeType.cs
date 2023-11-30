using GraphQL.DataLoader;
using GraphQL.Types;
using MountainTracker.Server.Services.LocalServices.Interfaces;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.GraphQlApi.GraphTypes;

public class RockClimbingWallGeoFenceNodeType : ObjectGraphType<RockClimbingWallGeoFenceNodes>
{
    public RockClimbingWallGeoFenceNodeType(IDataLoaderContextAccessor accessor, IRockClimbingWallService rockClimbingWallService)
    {
        Name = "RockClimbingWallGeoFenceNode";
        Description = "Rock Climbing Wall Geo Fence Node Type";

        Field(d => d.Id, nullable: false).Description("Database Id");
        Field(d => d.ClimbingWallId, nullable: false).Description("Database Id of parent area");
        Field(d => d.Latitude, nullable: false).Description("Latitude of node in geo fence");
        Field(d => d.Longitude, nullable: false).Description("Longitude of node in geo fence");
#pragma warning disable CS1998 // The lib handels but does not suppress when method Then is called (but requires async)
        Field<RockClimbingWallType, RockClimbingWalls>("climbingWall")
            .ResolveAsync(async context =>
            {
                var loader = accessor.Context!.GetOrAddCollectionBatchLoader<int, RockClimbingWalls>("GetRockClimbingWallsByIds", rockClimbingWallService.GetRockClimbingWallsByIds);
                return loader.LoadAsync(context.Source.ClimbingWallId).Then(x => x.First());
            })
            .Description("Rock climbingWall geo fence node's associated wall");
#pragma warning restore CS1998 // Async method lacks 'await' operators and will run synchronously

    }
}
