using MountainTracker.Server.GraphQlApi.QlQuery;

namespace MountainTracker.Server.GraphQlApi;

public class Query
{
    public static CountryQuery CountryQuery() => new CountryQuery();
}
