using GraphQL;
using GraphQL.Types;
using MountainTracker.Server.GraphQlApi.GraphTypes;
using MountainTracker.Server.Services.LocalServices.Interfaces;
using MountainTracker.Server.Services.LocalServices.Services;
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
            .Description("Gets a list of all of the regions");

        Field<RegionType, Regions>("regionById")
            .Argument<int>("id")
            .ResolveAsync(async context =>
            {
                int id = context.GetArgument<int>("id");
                return await regionService.GetRegionById(id);
            })
            .Description("Gets a region by its db id");

        Field<RegionType, Regions>("regionByCode")
            .Argument<StringGraphType>("regionCode")
            .ResolveAsync(async context =>
            {
                string regionCode = context.GetArgument<string>("regionCode");
                return await regionService.GetRegionByCode(regionCode);
            })
            .Description("Gets a region by its region code");

        Field<ListGraphType<RegionType>, IEnumerable<Regions>>("regionsByProvinceOrState")
            .Argument<ShortGraphType>("provinceOrStateId")
            .ResolveAsync(async context =>
            {
                short provinceOrStateId = context.GetArgument<short>("provinceOrStateId");
                return await regionService.GetRegionsByProvinceOrState(provinceOrStateId);
            })
            .Description("Gets a region or state by its iso province or state id");
    }
}
