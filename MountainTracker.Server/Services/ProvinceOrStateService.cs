using Microsoft.EntityFrameworkCore;
using MountainTracker.Server.Contexts.MountainTrackerContext;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.Services;

public class ProvinceOrStateService : IProvinceOrStateService
{
    MountainTrackerDatabase1Context Context;
    DbSet<ProvincesOrStates> ProvincesOrStates;

    public ProvinceOrStateService(MountainTrackerDatabase1Context context)
    {
        this.Context = context;
        this.ProvincesOrStates = Context.ProvincesOrStates;
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

    public async Task<List<ProvincesOrStates>> GetProvincesOrStatesByCountry(byte countryId)
    {
        return await ProvincesOrStates.AsNoTracking().Where(c => c.CountryId == countryId).ToListAsync();
    }

    public async Task<ILookup<byte,ProvincesOrStates>> GetProvincesOrStatesByCountries(IEnumerable<byte> countryIds)
    {
        var list = await ProvincesOrStates.AsNoTracking().Where(c => countryIds.Contains(c.CountryId)).ToListAsync();
        return list.ToLookup(list=>list.CountryId);
    }
}
