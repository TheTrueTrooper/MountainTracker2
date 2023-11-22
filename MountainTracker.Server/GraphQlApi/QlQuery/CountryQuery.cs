using GraphQL;
using MountainTracker.Server.Services;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.GraphQlApi.QlQuery;

public class CountryQuery
{
    public IEnumerable<Countries> Countries([FromServices] ICountryService chatService) => chatService.GetAllCountries();
}
