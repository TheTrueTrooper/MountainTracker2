using GraphQL;
using GraphQL.Types;
using MountainTracker.Server.GraphQlApi.GraphTypes;
using MountainTracker.Server.Services.LocalServices.Interfaces;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.GraphQlApi.GraphQueries;

public static class RockClimbingWallQuery
{
    public static void AddRockClimbingWallQuery(this MountainTrackerQuery This, IServiceProvider serviceProvider)
    {
        var scope = This.CreateScope(serviceProvider);
        IRockClimbingWallService rockClimbingWallService = scope.ServiceProvider.GetService<IRockClimbingWallService>()!;

        This.Field<ListGraphType<RockClimbingWallType>, IEnumerable<RockClimbingWalls>>("allRockClimbingWall")
            .ResolveAsync(async context => await rockClimbingWallService.GetAllRockClimbingWalls())
            .Description("Gets a list of all of the rock climbing walls");

        This.Field<RockClimbingWallType, RockClimbingWalls>("rockClimbingWallById")
            .Argument<int>("id")
            .ResolveAsync(async context =>
            {
                int id = context.GetArgument<int>("id");
                return await rockClimbingWallService.GetRockClimbingWallById(id);
            })
            .Description("Gets a rock climbing wall by its db id");

        This.Field<RockClimbingWallType, RockClimbingWalls>("rockClimbingWallByCode")
            .Argument<StringGraphType>("wallCode")
            .ResolveAsync(async context =>
            {
                string wallCode = context.GetArgument<string>("wallCode");
                return await rockClimbingWallService.GetRockClimbingWallByCode(wallCode);
            })
            .Description("Gets a rock climbing wall by its rock climbing wall code");

        This.Field<ListGraphType<RockClimbingWallType>, IEnumerable<RockClimbingWalls>>("rockClimbingWallsByArea")
            .Argument<IntGraphType>("areaId")
            .ResolveAsync(async context =>
            {
                int areaId = context.GetArgument<int>("areaId");
                return await rockClimbingWallService.GetRockClimbingWallsByArea(areaId);
            })
            .Description("Gets a rock climbing walls by its area id");
    }
}
