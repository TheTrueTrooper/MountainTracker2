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
        return await Countries.AsNoTracking().FirstOrDefaultAsync(c => c.CountryCode == countryCode);
    }

    public async Task<Countries?> GetCountryById(byte id)
    {
        return await Countries.AsNoTracking().FirstOrDefaultAsync(c => c.Id == id);
    }

    public async Task<ILookup<byte, Countries>> GetCountriesByIds(IEnumerable<byte> ids)
    {
        var list = await Countries.AsNoTracking().Where(c => ids.Contains(c.Id)).ToListAsync();
        return list.ToLookup(list => list.Id);
    }
}
