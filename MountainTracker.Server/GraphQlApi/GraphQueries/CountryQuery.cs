using GraphQL;
using GraphQL.Types;
using MountainTracker.Server.GraphQlApi.GraphTypes;
using MountainTracker.Server.Services.LocalServices.Interfaces;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.GraphQlApi.GraphQueries;

public static class CountryQuery
{
    public static void AddCountryQuerys(this ObjectGraphType This, ICountryService countryService)
    {
        This.Field<ListGraphType<CountryType>, IEnumerable<Countries>>("allCountries")
            .ResolveAsync(async context => await countryService.GetAllCountries())
            .Description("Gets a list of all of the countries");

        This.Field<CountryType, Countries>("countryById")
            .Argument<ByteGraphType>("id")
            .ResolveAsync(async context =>
            {
                byte id = context.GetArgument<byte>("id");
                return await countryService.GetCountryById(id);
            })
            .Description("Gets a country by its db id");

        This.Field<CountryType, Countries>("countryByCode")
            .Argument<StringGraphType>("countryCode")
            .ResolveAsync(async context =>
            {
                string countryCode = context.GetArgument<string>("countryCode");
                return await countryService.GetCountryByCode(countryCode);
            })
            .Description("Gets a country by its iso country code");
    }
}
