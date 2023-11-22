using Microsoft.EntityFrameworkCore;
using MountainTracker.Server.Contexts.MountainTrackerContext;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.Services;

public class CountryService: ICountryService
{
    MountainTrackerDatabase1Context Context;
    DbSet<Countries> Countries;

    public CountryService(MountainTrackerDatabase1Context context)
    {
        this.Context = context;
        this.Countries = Context.Countries;
    }

    public IEnumerable<Countries> GetAllCountries()
    {
        return Countries.ToArray();
    }
}
