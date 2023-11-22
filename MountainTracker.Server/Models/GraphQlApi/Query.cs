using MountainTracker.Server.Models.GraphQlApi.QlQuery;

namespace MountainTracker.Server.Models.GraphQlApi;

public class Query
{
    public static CountryQuery CountryQuery ()=>new CountryQuery ();
}
