using GraphQL;
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

    public async Task<ProvincesOrStates?> GetProvincesOrStatesByCode(string regionCode)
    {
        return await ProvincesOrStates.AsNoTracking().FirstOrDefaultAsync(c => c.RegionCode == regionCode);
    }

    public async Task<ProvincesOrStates?> GetProvincesOrStatesById(int id)
    {
        return await ProvincesOrStates.AsNoTracking().FirstOrDefaultAsync(c => c.Id == id);
    }

    public async Task<ProvincesOrStates?> GetProvincesOrStatesByCountry(int id)
    {
        return await ProvincesOrStates.AsNoTracking().FirstOrDefaultAsync(c => c.CountryId == id);
    }

    public async Task<ILookup<int,ProvincesOrStates>> GetProvincesOrStatesByCountries(IEnumerable<int> countryIds)
    {
        var list = await ProvincesOrStates.AsNoTracking().Where(c => countryIds.Contains(c.CountryId)).ToListAsync();
        return list.ToLookup(list=>(int)list.CountryId);
    }
}
