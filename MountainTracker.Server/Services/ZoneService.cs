using Microsoft.EntityFrameworkCore;
using MountainTracker.Server.Contexts.MountainTrackerContext;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.Services;

public class ZoneService : IZoneService
{
    MountainTrackerDatabase1Context Context;
    DbSet<DistrictZones> DistrictZones;

    public ZoneService(MountainTrackerDatabase1Context context)
    {
        this.Context = context;
        this.DistrictZones = Context.DistrictZones;
    }

    public async Task<IEnumerable<DistrictZones>> GetAllZones()
    {
        return await DistrictZones.AsNoTracking().ToArrayAsync();
    }

    public async Task<DistrictZones?> GetZoneByCode(string zoneCode)
    {
        return await DistrictZones.AsNoTracking().FirstOrDefaultAsync(c => c.ZoneCode == zoneCode);
    }

    public async Task<DistrictZones?> GetZoneById(int id)
    {
        return await DistrictZones.AsNoTracking().FirstOrDefaultAsync(c => c.Id == id);
    }

    public async Task<List<DistrictZones>?> GetZonesByRegion(int districtId)
    {
        return await DistrictZones.AsNoTracking().Where(c => c.DistrictId == districtId).ToListAsync();
    }

    public async Task<ILookup<int, DistrictZones>> GetZonesByRegions(IEnumerable<int> districtsIds)
    {
        var list = await DistrictZones.AsNoTracking().Where(c => districtsIds.Contains(c.DistrictId)).ToListAsync();
        return list.ToLookup(list=>list.DistrictId);
    }
}
