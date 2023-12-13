using GraphQL;
using GraphQL.Types;
using MountainTracker.Server.GraphQlApi.GraphTypes;
using MountainTracker.Server.Services.LocalServices.Interfaces;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.GraphQlApi.GraphQueries;

public class AreaQuery : ObjectGraphType
{
    public AreaQuery(IAreaService areaService)
    {
        Name = "AreaQuery";
        Description = "Queries for area type";

        Field<ListGraphType<AreaType>, IEnumerable<Areas>>("allAreas")
            .ResolveAsync(async context => await areaService.GetAllAreas())
            .Description("Gets a list of all of the areas");

        Field<AreaType, Areas>("areaById")
            .Argument<int>("id")
            .ResolveAsync(async context =>
            {
                int id = context.GetArgument<int>("id");
                return await areaService.GetAreaById(id);
            })
            .Description("Gets a area by its db id");

        Field<AreaType, Areas>("areaByCode")
            .Argument<StringGraphType>("areaCode")
            .ResolveAsync(async context =>
            {
                string areaCode = context.GetArgument<string>("areaCode");
                return await areaService.GetAreaByCode(areaCode);
            })
            .Description("Gets a area by its area code");

        Field<ListGraphType<AreaType>, IEnumerable<Areas>>("areaByZone")
            .Argument<IntGraphType>("zoneId")
            .ResolveAsync(async context =>
            {
                int zoneId = context.GetArgument<int>("zoneId");
                return await areaService.GetAreaByZone(zoneId);
            })
            .Description("Gets a areas by its zone id");
    }
}
