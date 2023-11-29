using GraphQL.Types;
using MountainTracker.Server.GraphQlApi.QlQuery;

namespace MountainTracker.Server.GraphQlApi;

public class MountainTrackerMutation : ObjectGraphType
{
    //placeholder input
    public MountainTrackerMutation(CountryQuery countryMutation)
    {
        Name = "Mutation";

        //placeholder
        Field<CountryQuery>("CountryMutation")
                .Resolve(context => countryMutation)
                .Description("The country related mutations");

    }
}
