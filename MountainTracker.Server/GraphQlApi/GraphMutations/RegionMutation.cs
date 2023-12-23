using GraphQL;
using GraphQL.Types;
using MountainTracker.Server.GraphQlApi.GraphInputs;
using MountainTracker.Server.GraphQlApi.GraphTypes;
using MountainTracker.Server.Services.LocalServices.Interfaces;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.GraphQlApi.GraphMutations;

public static class RegionMutation
{
    public static void AddRegionMutation(this ObjectGraphType This, IRegionService regionService)
    {
        This.Field<RegionType, Regions>("updateRegionById")
            .Argument<int>("id")
            .Argument<NonNullGraphType<RegionInput>>("region")
            .ResolveAsync(async context =>
            {
                int id = context.GetArgument<int>("id");
                Regions region = context.GetArgument<Regions>("region");
                return await regionService.UpdateRegion(id, region);
            })
            .Description("Gets a region by its db id");

        This.Field<RegionType, Regions>("createRegion")
            .Argument<NonNullGraphType<RegionInput>>("region")
            .ResolveAsync(async context =>
            {
                Regions region = context.GetArgument<Regions>("region");
                return await regionService.CreateRegion(region);
            })
            .Description("Gets a region by its db id");

        This.Field<BooleanGraphType, bool>("deleteRegion")
            .Argument<int>("id")
            .ResolveAsync(async context =>
            {
                int id = context.GetArgument<int>("id");
                return await regionService.DeleteRegion(id);
            })
            .Description("Gets a region by its db id");
    }
}
