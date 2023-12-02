using Microsoft.EntityFrameworkCore;
using MountainTracker.Server.Contexts.MountainTrackerContext;
using MountainTracker.Server.Services.LocalServices.Interfaces;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.Services.LocalServices.Services;

public class RegionService : IRegionService
{
    MountainTrackerDatabase1Context Context;
    DbSet<Regions> Regions;

    public RegionService(MountainTrackerDatabase1Context context)
    {
        Context = context;
        Regions = Context.Regions;
    }

    public async Task<IEnumerable<Regions>> GetAllRegions()
    {
        
        return await Regions.AsNoTracking().ToArrayAsync();
    }

    public async Task<Regions?> GetRegionByCode(string regionCode)
    {
        string[] codes = regionCode.Split('-');
        if (codes.Length < 3)
        {
            return null;
        }
        return await Regions.AsNoTracking().FirstOrDefaultAsync(c => c.RegionCode == codes[2] && c.ProvinceOrState.RegionCode == codes[1] && c.ProvinceOrState.Country.CountryCode == codes[0]);
    }

    public async Task<Regions?> GetRegionById(int id)
    {
        return await Regions.AsNoTracking().FirstOrDefaultAsync(c => c.Id == id);
    }

    public async Task<IDictionary<int, Regions>> GetRegionsByIds(IEnumerable<int> ids)
    {
        return await Regions.AsNoTracking().Where(c => ids.Contains(c.Id)).ToDictionaryAsync(key=>key.Id, value=>value);
    }

    public async Task<IEnumerable<Regions>?> GetRegionsByProvinceOrState(int provinceOrStateId)
    {
        return await Regions.AsNoTracking().Where(c => c.ProvinceOrStateId == provinceOrStateId).ToListAsync();
    }

    public async Task<ILookup<short, Regions>> GetRegionsByProvincesOrStates(IEnumerable<short> provinceOrStateIds)
    {
        var list = await Regions.AsNoTracking().Where(c => provinceOrStateIds.Contains(c.ProvinceOrStateId)).ToListAsync();
        return list.ToLookup(list => list.ProvinceOrStateId);
    }
}
