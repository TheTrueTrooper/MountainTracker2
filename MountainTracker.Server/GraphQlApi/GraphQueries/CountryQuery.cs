using GraphQL;
using GraphQL.Types;
using MountainTracker.Server.GraphQlApi.GraphTypes;
using MountainTracker.Server.Services.LocalServices.Interfaces;

namespace MountainTracker.Server.GraphQlApi.QlQuery;

public class CountryQuery : ObjectGraphType
{
    public CountryQuery(ICountryService countryService)
    {
        Name = "CountryQuery";
        Description = "Queries for country";

        Field<ListGraphType<CountryType>>("allCountries")
            .ResolveAsync(async context => await countryService.GetAllCountries())
            .Description("Gets a list of all of the countries");
        Field<CountryType>("countryById")
            .Argument<ByteGraphType>("id")
            .ResolveAsync(async context =>
            {
                byte id = context.GetArgument<byte>("id");
                return await countryService.GetCountryById(id);
            })
            .Description("Gets a country by its db id");
        Field<CountryType>("countryByCode")
            .Argument<StringGraphType>("countryCode")
            .ResolveAsync(async context =>
            {
                string countryCode = context.GetArgument<string>("countryCode");
                return await countryService.GetCountryByCode(countryCode);
            })
            .Description("Gets a country by its iso country code");
    }
}
