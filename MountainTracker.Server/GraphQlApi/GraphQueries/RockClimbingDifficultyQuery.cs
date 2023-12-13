using GraphQL;
using GraphQL.Types;
using MountainTracker.Server.GraphQlApi.GraphTypes;
using MountainTracker.Server.Services.LocalServices.Interfaces;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.GraphQlApi.GraphQueries;

public class RockClimbingDifficultyQuery : ObjectGraphType
{
    public RockClimbingDifficultyQuery(IRockClimbingDifficultyService rockClimbingDifficultyService)
    {
        Name = "RockClimbingDifficultyQuery";
        Description = "Queries for rock climbing difficulty type query type";

        Field<ListGraphType<RockClimbingDifficultyType>, IEnumerable<RockClimbingDifficulties>>("allRockClimbingDifficulties")
            .ResolveAsync(async context => await rockClimbingDifficultyService.GetAllRockClimbingDifficulties())
            .Description("Gets a list of all of the rock climbing difficulties");

        Field<RockClimbingDifficultyType, RockClimbingDifficulties>("rockClimbingDifficultyById")
            .Argument<byte>("id")
            .ResolveAsync(async context =>
            {
                byte id = context.GetArgument<byte>("id");
                return await rockClimbingDifficultyService.GetRockClimbingDifficultyById(id);
            })
            .Description("Gets a rock climbing difficulty rating by its db id");
    }
}
