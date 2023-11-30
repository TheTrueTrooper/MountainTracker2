using GraphQL;
using GraphQL.Types;
using MountainTracker.Server.GraphQlApi.GraphTypes;
using MountainTracker.Server.Services.LocalServices.Interfaces;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.GraphQlApi.QlQuery;

public class ProvinceOrStateQuery : ObjectGraphType
{
    public ProvinceOrStateQuery(IProvinceOrStateService provinceOrStateService)
    {
        Name = "ProvinceOrStateQuery";
        Description = "Queries for province or state type";

        Field<ListGraphType<ProvinceOrStateType>, IEnumerable<ProvincesOrStates>>("allprovincesOrStates")
            .ResolveAsync(async context => await provinceOrStateService.GetAllProvincesOrStates())
            .Description("Gets a list of all of the countries");
        Field<ProvinceOrStateType, ProvincesOrStates>("provinceOrStateServiceById")
            .Argument<short>("id")
            .ResolveAsync(async context =>
            {
                short id = context.GetArgument<short>("id");
                return await provinceOrStateService.GetProvinceOrStateById(id);
            })
            .Description("Gets a country by its db id");
        //to do sort the code system out
        //Field<ProvinceOrStateType>("countryByCode")
        //    .Argument<StringGraphType>("countryCode")
        //    .ResolveAsync(async context =>
        //    {
        //        string countryCode = context.GetArgument<string>("countryCode");
        //        return await countryService.GetCountryByCode(countryCode);
        //    })
        //    .Description("Gets a country by its iso country code");
    }
}
