using GraphQL;
using GraphQL.Types;
using MountainTracker.Server.GraphQlApi.GraphTypes;
using MountainTracker.Server.Services.LocalServices.Interfaces;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.GraphQlApi.QlQuery;

public class RegionQuery : ObjectGraphType
{
    public RegionQuery(IRegionService regionService)
    {
        Name = "RegionQuery";
        Description = "Queries for region type";

        Field<ListGraphType<RegionType>, IEnumerable<Regions>>("allRegions")
            .ResolveAsync(async context => await regionService.GetAllRegions())
            .Description("Gets a list of all of the countries");
        Field<RegionType, Regions>("regionById")
            .Argument<int>("id")
            .ResolveAsync(async context =>
            {
                int id = context.GetArgument<int>("id");
                return await regionService.GetRegionById(id);
            })
            .Description("Gets a country by its db id");
        //to do sort the code system out
        //Field<RegionType>("countryByCode")
        //    .Argument<StringGraphType>("countryCode")
        //    .ResolveAsync(async context =>
        //    {
        //        string countryCode = context.GetArgument<string>("countryCode");
        //        return await countryService.GetCountryByCode(countryCode);
        //    })
        //    .Description("Gets a country by its iso country code");
    }
}
