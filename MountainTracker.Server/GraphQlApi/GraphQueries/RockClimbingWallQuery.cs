using GraphQL;
using GraphQL.Types;
using MountainTracker.Server.GraphQlApi.GraphTypes;
using MountainTracker.Server.Services.LocalServices.Interfaces;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.GraphQlApi.QlQuery;

public class RockClimbingWallQuery : ObjectGraphType
{
    public RockClimbingWallQuery(IRockClimbingWallService rockClimbingWallService)
    {
        Name = "RockClimbingWallQuery";
        Description = "Queries for region rock climbing wall type";

        Field<ListGraphType<RockClimbingWallType>, IEnumerable<RockClimbingWalls>> ("allRockClimbingWall")
            .ResolveAsync(async context => await rockClimbingWallService.GetAllRockClimbingWalls())
            .Description("Gets a list of all of the countries");

        Field<RockClimbingWallType, RockClimbingWalls>("rockClimbingWallById")
            .Argument<int>("id")
            .ResolveAsync(async context =>
            {
                int id = context.GetArgument<int>("id");
                return await rockClimbingWallService.GetRockClimbingWallById(id);
            })
            .Description("Gets a country by its db id");

        Field<RockClimbingWallType, RockClimbingWalls>("rockClimbingWallByCode")
            .Argument<StringGraphType>("wallCode")
            .ResolveAsync(async context =>
            {
                string wallCode = context.GetArgument<string>("wallCode");
                return await rockClimbingWallService.GetRockClimbingWallByCode(wallCode);
            })
            .Description("Gets a country by its iso country code");
    }
}
