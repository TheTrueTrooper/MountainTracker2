using Microsoft.EntityFrameworkCore;
using MountainTracker.Server.Contexts.MountainTrackerContext;
using MountainTracker.Server.Services.LocalServices.Interfaces;
using MountainTracker.Shared.Model;
using System.Linq;

namespace MountainTracker.Server.Services.LocalServices.Services;

public class ProvinceOrStateService : IProvinceOrStateService
{
    MountainTrackerDatabase1Context Context;
    DbSet<ProvincesOrStates> ProvincesOrStates;

    public ProvinceOrStateService(MountainTrackerDatabase1Context context)
    {
        Context = context;
        ProvincesOrStates = Context.ProvincesOrStates;
    }

    public async Task<IEnumerable<ProvincesOrStates>> GetAllProvincesOrStates()
    {
        return await ProvincesOrStates.AsNoTracking().ToArrayAsync();
    }

    public async Task<ProvincesOrStates?> GetProvinceOrStateByCode(string regionCode)
    {
        return await ProvincesOrStates.AsNoTracking().FirstOrDefaultAsync(c => c.RegionCode == regionCode);
    }

    public async Task<ProvincesOrStates?> GetProvinceOrStateById(short id)
    {
        return await ProvincesOrStates.AsNoTracking().FirstOrDefaultAsync(c => c.Id == id);
    }

    public async Task<IEnumerable<ProvincesOrStates>> GetProvincesOrStatesByCountry(byte countryId)
    {
        return await ProvincesOrStates.AsNoTracking().Where(c => c.CountryId == countryId).ToListAsync();
    }

    public async Task<ILookup<byte, ProvincesOrStates>> GetProvincesOrStatesByCountries(IEnumerable<byte> countryIds)
    {
        var list = await ProvincesOrStates.AsNoTracking().Where(c => countryIds.Contains(c.CountryId)).ToListAsync();
        return list.ToLookup(list => list.CountryId);
    }

    public async Task<IDictionary<short, ProvincesOrStates>> GetProvincesOrStatesByIds(IEnumerable<short> ids)
    {
        return await ProvincesOrStates.AsNoTracking().Where(c => ids.Contains(c.Id)).ToDictionaryAsync(key => key.Id, value => value);
    }
}
