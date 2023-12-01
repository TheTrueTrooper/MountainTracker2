using GraphQL;
using GraphQL.Types;
using MountainTracker.Server.GraphQlApi.GraphTypes;
using MountainTracker.Server.Services.LocalServices.Interfaces;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.GraphQlApi.QlQuery;

public class AreaQuery : ObjectGraphType
{
    public AreaQuery(IAreaService areaService)
    {
        Name = "AreaQuery";
        Description = "Queries for region area type";

        Field<ListGraphType<AreaType>, IEnumerable<Areas>>("allAreas")
            .ResolveAsync(async context => await areaService.GetAllAreas())
            .Description("Gets a list of all of the countries");

        Field<AreaType, Areas>("areaById")
            .Argument<int>("id")
            .ResolveAsync(async context =>
            {
                int id = context.GetArgument<int>("id");
                return await areaService.GetAreaById(id);
            })
            .Description("Gets a country by its db id");

        Field<AreaType, Areas>("areaByCode")
            .Argument<StringGraphType>("areaCode")
            .ResolveAsync(async context =>
            {
                string areaCode = context.GetArgument<string>("areaCode");
                return await areaService.GetAreaByCode(areaCode);
            })
            .Description("Gets a are by its iso area code");
    }
}
