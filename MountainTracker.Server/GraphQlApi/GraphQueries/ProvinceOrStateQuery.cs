using GraphQL;
using GraphQL.Types;
using MountainTracker.Server.GraphQlApi.GraphTypes;
using MountainTracker.Server.Services.LocalServices.Interfaces;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.GraphQlApi.GraphQueries;

public static class ProvinceOrStateQuery
{
    public static void AddProvinceOrStateQuery(this MountainTrackerQuery This, IServiceProvider serviceProvider)
    {
        var scope = This.CreateScope(serviceProvider);
        IProvinceOrStateService provinceOrStateService = scope.ServiceProvider.GetService<IProvinceOrStateService>()!;

        This.Field<ListGraphType<ProvinceOrStateType>, IEnumerable<ProvincesOrStates>>("allProvincesOrStates")
            .ResolveAsync(async context => await provinceOrStateService.GetAllProvincesOrStates())
            .Description("Gets a list of all of the provinces or states");

        This.Field<ProvinceOrStateType, ProvincesOrStates>("provinceOrStateById")
            .Argument<short>("id")
            .ResolveAsync(async context =>
            {
                short id = context.GetArgument<short>("id");
                return await provinceOrStateService.GetProvinceOrStateById(id);
            })
            .Description("Gets a province or state by its db id");

        This.Field<ProvinceOrStateType, ProvincesOrStates>("provinceOrStateByCode")
            .Argument<StringGraphType>("regionCode")
            .ResolveAsync(async context =>
            {
                string regionCode = context.GetArgument<string>("regionCode");
                return await provinceOrStateService.GetProvinceOrStateByCode(regionCode);
            })
            .Description("Gets a province or state by its iso province or state code");

        This.Field<ListGraphType<ProvinceOrStateType>, IEnumerable<ProvincesOrStates>>("provincesOrStatesByCountry")
            .Argument<ByteGraphType>("countryId")
            .ResolveAsync(async context =>
            {
                byte countryId = context.GetArgument<byte>("countryId");
                return await provinceOrStateService.GetProvincesOrStatesByCountry(countryId);
            })
            .Description("Gets a provinces or states by its iso country id");
    }
}
