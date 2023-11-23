using GraphQL;
using GraphQL.Types;
using MountainTracker.Server.GraphQlApi.GraphTypes;
using MountainTracker.Server.Services;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.GraphQlApi.QlQuery;

public class CountryQuery: ObjectGraphType
{
    public CountryQuery(ICountryService countryService)
    {
        Name = "CountryQuery";
        Description = "Queries for country";

        Field<ListGraphType<CountryType>>("allCountries")
            .ResolveAsync(async context=>await countryService.GetAllCountries());
    }
}
