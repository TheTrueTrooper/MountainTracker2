﻿using GraphQL;
using GraphQL.Types;
using MountainTracker.Server.GraphQlApi.GraphTypes;
using MountainTracker.Server.Services.LocalServices.Interfaces;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.GraphQlApi.GraphQueries;

public static class RegionQuery
{
    public static void AddRegionQuery(this MountainTrackerQuery This, IServiceProvider serviceProvider)
    {
        var scope = This.CreateScope(serviceProvider);
        IRegionService regionService = scope.ServiceProvider.GetService<IRegionService>()!;

        This.Field<ListGraphType<RegionType>, IEnumerable<Regions>>("allRegions")
            .ResolveAsync(async context => await regionService.GetAllRegions())
            .Description("Gets a list of all of the regions");

        This.Field<RegionType, Regions>("regionById")
            .Argument<int>("id")
            .ResolveAsync(async context =>
            {
                int id = context.GetArgument<int>("id");
                return await regionService.GetRegionById(id);
            })
            .Description("Gets a region by its db id");

        This.Field<RegionType, Regions>("regionByCode")
            .Argument<StringGraphType>("regionCode")
            .ResolveAsync(async context =>
            {
                string regionCode = context.GetArgument<string>("regionCode");
                return await regionService.GetRegionByCode(regionCode);
            })
            .Description("Gets a region by its region code");

        This.Field<ListGraphType<RegionType>, IEnumerable<Regions>>("regionsByProvinceOrState")
            .Argument<ShortGraphType>("provinceOrStateId")
            .ResolveAsync(async context =>
            {
                short provinceOrStateId = context.GetArgument<short>("provinceOrStateId");
                return await regionService.GetRegionsByProvinceOrState(provinceOrStateId);
            })
            .Description("Gets a regions by its iso province or state id");
    }
}
