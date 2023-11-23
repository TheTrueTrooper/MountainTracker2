using GraphQL.Types;
using MountainTracker.Server.GraphQlApi.QlQuery;

namespace MountainTracker.Server.GraphQlApi;

public class MountainTrackerQuery: ObjectGraphType
{
    public MountainTrackerQuery(CountryQuery countryQuery)
    {
        Name = "Query";

        Field<CountryQuery>("CountryQuery")
            .Resolve(context=>countryQuery);
    }
}
