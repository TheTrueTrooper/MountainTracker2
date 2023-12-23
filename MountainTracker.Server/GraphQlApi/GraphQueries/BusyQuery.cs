using GraphQL;
using GraphQL.Types;
using MountainTracker.Server.GraphQlApi.GraphTypes;
using MountainTracker.Server.Services.LocalServices.Interfaces;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.GraphQlApi.GraphQueries;

public static class BusyRatingQuery
{
    public static void AddBusyRatingQuery(this ObjectGraphType This, IBusyRatingService busyRatingService)
    {
        This.Field<ListGraphType<BusyRatingType>, IEnumerable<BusyRatings>>("allBusyRatings")
            .ResolveAsync(async context => await busyRatingService.GetAllBusyRatings())
            .Description("Gets a list of all of the climbing quality ratings");

        This.Field<BusyRatingType, BusyRatings>("busyRatingById")
            .Argument<byte>("id")
            .ResolveAsync(async context =>
            {
                byte id = context.GetArgument<byte>("id");
                return await busyRatingService.GetBusyRatingById(id);
            })
            .Description("Gets a climbing quality rating by its db id");
    }
}
