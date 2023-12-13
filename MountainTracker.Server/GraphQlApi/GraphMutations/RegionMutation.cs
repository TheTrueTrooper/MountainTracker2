using GraphQL;
using GraphQL.Types;
using MountainTracker.Server.GraphQlApi.GraphInputs;
using MountainTracker.Server.GraphQlApi.GraphTypes;
using MountainTracker.Server.Services.LocalServices.Interfaces;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.GraphQlApi.GraphMutations;

public class RegionMutation : ObjectGraphType
{
    public RegionMutation(IRegionService regionService)
    {
        Name = "RegionMutation";
        Description = "Mutations for region type";

        Field<RegionType, Regions>("upateRegionById")
            .Argument<int>("id")
            .Argument<NonNullGraphType<RegionInput>>("region")
            .ResolveAsync(async context =>
            {
                int id = context.GetArgument<int>("id");
                Regions region = context.GetArgument<Regions>("region");
                return await regionService.updateRegion(id, region);
            })
            .Description("Gets a region by its db id");

    }
}
