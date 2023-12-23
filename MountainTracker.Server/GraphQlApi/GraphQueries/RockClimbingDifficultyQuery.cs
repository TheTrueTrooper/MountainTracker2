using GraphQL;
using GraphQL.Types;
using MountainTracker.Server.GraphQlApi.GraphTypes;
using MountainTracker.Server.Services.LocalServices.Interfaces;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.GraphQlApi.GraphQueries;

public static class RockClimbingDifficultyQuery
{
    public static void AddRockClimbingDifficultyQuery(this ObjectGraphType This, IRockClimbingDifficultyService rockClimbingDifficultyService)
    {
        This.Field<ListGraphType<RockClimbingDifficultyType>, IEnumerable<RockClimbingDifficulties>>("allRockClimbingDifficulties")
            .ResolveAsync(async context => await rockClimbingDifficultyService.GetAllRockClimbingDifficulties())
            .Description("Gets a list of all of the rock climbing difficulties");

        This.Field<RockClimbingDifficultyType, RockClimbingDifficulties>("rockClimbingDifficultyById")
            .Argument<byte>("id")
            .ResolveAsync(async context =>
            {
                byte id = context.GetArgument<byte>("id");
                return await rockClimbingDifficultyService.GetRockClimbingDifficultyById(id);
            })
            .Description("Gets a rock climbing difficulty rating by its db id");
    }
}
