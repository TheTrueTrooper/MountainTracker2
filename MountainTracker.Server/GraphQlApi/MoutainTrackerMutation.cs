using GraphQL.Types;
using MountainTracker.Server.GraphQlApi.QlQuery;

namespace MountainTracker.Server.GraphQlApi;

public class MoutainTrackerMutation: ObjectGraphType
{
    public MoutainTrackerMutation(CountryMutation countryMutation)
    {
        Name = "mutation";

        Field<CountryQuery>("CountryMutation")
                .Resolve(context => countryMutation);

    }
}
