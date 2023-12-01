using GraphQL;
using GraphQL.Types;
using MountainTracker.Server.GraphQlApi.GraphTypes;
using MountainTracker.Server.Services.LocalServices.Interfaces;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.GraphQlApi.QlQuery;

public class BusyRatingQuery : ObjectGraphType
{
    public BusyRatingQuery(IBusyRatingService busyRatingService)
    {
        Name = "BusyRatingQuery";
        Description = "Queries for busy rating query type";

        Field<ListGraphType<BusyRatingType>, IEnumerable<BusyRatings>>("allBusyRatings")
            .ResolveAsync(async context => await busyRatingService.GetAllBusyRatings())
            .Description("Gets a list of all of the climbing quality ratings");

        Field<BusyRatingType, BusyRatings>("busyRatingById")
            .Argument<byte>("id")
            .ResolveAsync(async context =>
            {
                byte id = context.GetArgument<byte>("id");
                return await busyRatingService.GetBusyRatingById(id);
            })
            .Description("Gets a climbing quality rating by its db id");
    }
}
