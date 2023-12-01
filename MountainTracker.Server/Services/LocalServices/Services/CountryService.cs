using Microsoft.EntityFrameworkCore;
using MountainTracker.Server.Contexts.MountainTrackerContext;
using MountainTracker.Server.Services.LocalServices.Interfaces;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.Services.LocalServices.Services;

public class CountryService : ICountryService
{
    MountainTrackerDatabase1Context Context;
    DbSet<Countries> Countries;

    public CountryService(MountainTrackerDatabase1Context context)
    {
        Context = context;
        Countries = Context.Countries;
    }

    public async Task<IEnumerable<Countries>> GetAllCountries()
    {
        return await Countries.AsNoTracking().ToArrayAsync();
    }

    public async Task<Countries?> GetCountryByCode(string countryCode)
    {
        string[] codes = countryCode.Split('-');
        if (codes.Length < 1)
        {
            return null;
        }
        return await Countries.AsNoTracking().FirstOrDefaultAsync(c => c.CountryCode == codes[0]);
    }

    public async Task<Countries?> GetCountryById(byte id)
    {
        return await Countries.AsNoTracking().FirstOrDefaultAsync(c => c.Id == id);
    }

    public async Task<IDictionary<byte, Countries>> GetCountriesByIds(IEnumerable<byte> ids)
    {
        return await Countries.AsNoTracking().Where(c => ids.Contains(c.Id)).ToDictionaryAsync(key=>key.Id, value=>value);
    }
}
