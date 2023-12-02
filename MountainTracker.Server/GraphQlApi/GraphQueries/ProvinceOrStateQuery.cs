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
            .Description("Gets a list of all of the provinces or states");

        Field<ProvinceOrStateType, ProvincesOrStates>("provinceOrStateById")
            .Argument<short>("id")
            .ResolveAsync(async context =>
            {
                short id = context.GetArgument<short>("id");
                return await provinceOrStateService.GetProvinceOrStateById(id);
            })
            .Description("Gets a province or state by its db id");

        Field<ProvinceOrStateType, ProvincesOrStates>("provinceOrStateByCode")
            .Argument<StringGraphType>("regionCode")
            .ResolveAsync(async context =>
            {
                string regionCode = context.GetArgument<string>("regionCode");
                return await provinceOrStateService.GetProvinceOrStateByCode(regionCode);
            })
            .Description("Gets a province or state by its iso province or state code");
    }
}
