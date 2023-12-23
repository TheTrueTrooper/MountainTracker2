using GraphQL;
using GraphQL.Types;
using MountainTracker.Server.GraphQlApi.GraphTypes;
using MountainTracker.Server.Services.LocalServices.Interfaces;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.GraphQlApi.GraphQueries;

public static class ClimbingQualityRatingQuery
{
    public static void AddClimbingQualityRatingQuery(this ObjectGraphType This, IClimbingQualityRatingService climbingQualityRatingsService)
    {
        This.Field<ListGraphType<ClimbingQualityRatingType>, IEnumerable<ClimbingQualityRatings>>("allClimbingQualityRatings")
            .ResolveAsync(async context => await climbingQualityRatingsService.GetAllClimbingQualityRatings())
            .Description("Gets a list of all of the climbing quality ratings");

        This.Field<ClimbingQualityRatingType, ClimbingQualityRatings>("climbingQualityRatingById")
            .Argument<byte>("id")
            .ResolveAsync(async context =>
            {
                byte id = context.GetArgument<byte>("id");
                return await climbingQualityRatingsService.GetClimbingQualityRatingById(id);
            })
            .Description("Gets a climbing quality rating by its db id");
    }
}
