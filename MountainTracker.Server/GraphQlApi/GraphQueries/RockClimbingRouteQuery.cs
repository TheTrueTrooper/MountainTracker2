using GraphQL;
using GraphQL.Types;
using MountainTracker.Server.GraphQlApi.GraphTypes;
using MountainTracker.Server.Services.LocalServices.Interfaces;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.GraphQlApi.GraphQueries;

public static class RockClimbingRouteQuery
{
    public static void AddRockClimbingRouteQuery(this MountainTrackerQuery This, IServiceProvider serviceProvider)
    {
        var scope = This.CreateScope(serviceProvider);
        IRockClimbingRouteService rockClimbingRouteService = scope.ServiceProvider.GetService<IRockClimbingRouteService>()!;

        This.Field<ListGraphType<RockClimbingRouteType>, IEnumerable<RockClimbingRoutes>>("allRockClimbingRoutes")
            .ResolveAsync(async context => await rockClimbingRouteService.GetAllRockClimbingRoutes())
            .Description("Gets a list of all of the rock climbing routes");

        This.Field<RockClimbingRouteType, RockClimbingRoutes>("rockClimbingRouteById")
            .Argument<int>("id")
            .ResolveAsync(async context =>
            {
                int id = context.GetArgument<int>("id");
                return await rockClimbingRouteService.GetRockClimbingRouteById(id);
            })
            .Description("Gets a rock climbing route by its db id");

        This.Field<RockClimbingRouteType, RockClimbingRoutes>("rockClimbingRouteByCode")
            .Argument<StringGraphType>("routeCode")
            .ResolveAsync(async context =>
            {
                string routeCode = context.GetArgument<string>("routeCode");
                return await rockClimbingRouteService.GetRockClimbingRouteByCode(routeCode);
            })
            .Description("Gets a rock climbing route by its rock climbing route code");

        This.Field<ListGraphType<RockClimbingRouteType>, IEnumerable<RockClimbingRoutes>>("rockClimbingRoutesByRockClimbingWall")
            .Argument<IntGraphType>("climbingWallId")
            .ResolveAsync(async context =>
            {
                int climbingWallId = context.GetArgument<int>("climbingWallId");
                return await rockClimbingRouteService.GetRockClimbingRoutesByRockClimbingWall(climbingWallId);
            })
            .Description("Gets a rock climbing routes by its rock climbing wall id");
    }
}
