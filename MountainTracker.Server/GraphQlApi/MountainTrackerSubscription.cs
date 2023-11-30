using GraphQL.Types;
using MountainTracker.Server.GraphQlApi.QlQuery;

namespace MountainTracker.Server.GraphQlApi;

public class MoutainTrackerSubscription : ObjectGraphType
{
    //placeholder input
    public MoutainTrackerSubscription(CountryQuery countryQuery)
    {
        Name = "Subscription";
        //placeholder
        Field<CountryQuery>("CountryQuery")
            .Resolve(context => countryQuery);
    }
}
