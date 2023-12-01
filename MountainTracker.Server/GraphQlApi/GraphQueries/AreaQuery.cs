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

        //to do sort the code system out
        //Field<ZoneType>("countryByCode")
        //    .Argument<StringGraphType>("countryCode")
        //    .ResolveAsync(async context =>
        //    {
        //        string countryCode = context.GetArgument<string>("countryCode");
        //        return await countryService.GetCountryByCode(countryCode);
        //    })
        //    .Description("Gets a country by its iso country code");
    }
}
