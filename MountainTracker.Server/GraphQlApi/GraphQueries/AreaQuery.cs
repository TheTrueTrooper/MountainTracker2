using GraphQL;
using GraphQL.Types;
using MountainTracker.Server.GraphQlApi.GraphTypes;
using MountainTracker.Server.Services.LocalServices.Interfaces;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.GraphQlApi.GraphQueries;

public static class AreaQuery
{
    public static void AddAreaQuery(this MountainTrackerQuery This, IServiceProvider serviceProvider)
    {
        var scope = This.CreateScope(serviceProvider);
        IAreaService areaService = scope.ServiceProvider.GetService<IAreaService>()!;

        This.Field<ListGraphType<AreaType>, IEnumerable<Areas>>("allAreas")
            .ResolveAsync(async context => await areaService.GetAllAreas())
            .Description("Gets a list of all of the areas");

        This.Field<AreaType, Areas>("areaById")
            .Argument<int>("id")
            .ResolveAsync(async context =>
            {
                int id = context.GetArgument<int>("id");
                return await areaService.GetAreaById(id);
            })
            .Description("Gets a area by its db id");

        This.Field<AreaType, Areas>("areaByCode")
            .Argument<StringGraphType>("areaCode")
            .ResolveAsync(async context =>
            {
                string areaCode = context.GetArgument<string>("areaCode");
                return await areaService.GetAreaByCode(areaCode);
            })
            .Description("Gets a area by its area code");

        This.Field<ListGraphType<AreaType>, IEnumerable<Areas>>("areasByZone")
            .Argument<IntGraphType>("zoneId")
            .ResolveAsync(async context =>
            {
                int zoneId = context.GetArgument<int>("zoneId");
                return await areaService.GetAreaByZone(zoneId);
            })
            .Description("Gets a areas by its zone id");
    }
}
