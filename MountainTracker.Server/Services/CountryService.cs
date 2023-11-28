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

    public async Task<IEnumerable<Countries>> GetAllCountries()
    {
        return await Countries.AsNoTracking().ToArrayAsync();
    }

    public async Task<Countries?> GetCountryByCode(string countryCode)
    {
        return await Countries.AsNoTracking().FirstOrDefaultAsync(c => c.CountryCode == countryCode);
    }

    public async Task<Countries?> GetCountryById(byte id)
    {
        return await Countries.AsNoTracking().FirstOrDefaultAsync(c => c.Id == id);
    }
}
