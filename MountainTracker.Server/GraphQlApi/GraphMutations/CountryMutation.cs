using GraphQL;
using GraphQL.Types;
using MountainTracker.Server.GraphQlApi.GraphTypes;
using MountainTracker.Server.Services;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.GraphQlApi.QlQuery;

public class CountryMutation: ObjectGraphType
{
    public CountryMutation(ICountryService countryService)
    {
        Name = "CountryMutation";
        Description = "Mutations for country";

        Field<ListGraphType<CountryType>>("allCountries")
            .ResolveAsync(async context=>await countryService.GetAllCountries());
    }
}
