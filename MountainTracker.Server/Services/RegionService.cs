using Microsoft.EntityFrameworkCore;
using MountainTracker.Server.Contexts.MountainTrackerContext;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.Services;

public class RegionService : IRegionService
{
    MountainTrackerDatabase1Context Context;
    DbSet<Regions> Regions;

    public RegionService(MountainTrackerDatabase1Context context)
    {
        this.Context = context;
        this.Regions = Context.Regions;
    }

    public async Task<IEnumerable<Regions>> GetAllRegions()
    {
        return await Regions.AsNoTracking().ToArrayAsync();
    }

    public async Task<Regions?> GetRegionByCode(string regionCode)
    {
        return await Regions.AsNoTracking().FirstOrDefaultAsync(c => c.RegionCode == regionCode);
    }

    public async Task<Regions?> GetRegionById(int id)
    {
        return await Regions.AsNoTracking().FirstOrDefaultAsync(c => c.Id == id);
    }

    public async Task<List<Regions>?> GetRegionsByProvinceOrState(int provinceOrStateId)
    {
        return await Regions.AsNoTracking().Where(c => c.ProvinceOrStateId == provinceOrStateId).ToListAsync();
    }

    public async Task<ILookup<short, Regions>> GetRegionsByProvincesOrStates(IEnumerable<short> provinceOrStateIds)
    {
        var list = await Regions.AsNoTracking().Where(c => provinceOrStateIds.Contains(c.ProvinceOrStateId)).ToListAsync();
        return list.ToLookup(list=>list.ProvinceOrStateId);
    }
}
