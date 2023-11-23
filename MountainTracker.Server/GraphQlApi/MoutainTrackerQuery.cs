using GraphQL.Types;
using MountainTracker.Server.GraphQlApi.QlQuery;

namespace MountainTracker.Server.GraphQlApi;

public class MoutainTrackerQuery: ObjectGraphType
{
    public MoutainTrackerQuery(CountryQuery countryQuery)
    {
        Name = "query";

        Field<CountryQuery>("CountryQuery")
            .Resolve(context=>countryQuery);
    }
}
