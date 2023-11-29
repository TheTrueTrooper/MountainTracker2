using Microsoft.EntityFrameworkCore;
using MountainTracker.Server.Contexts.MountainTrackerContext;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.Services;

public class ZoneService : IZoneService
{
    MountainTrackerDatabase1Context Context;
    DbSet<Zones> Zones;

    public ZoneService(MountainTrackerDatabase1Context context)
    {
        this.Context = context;
        this.Zones = Context.Zones;
    }

    public async Task<IEnumerable<Zones>> GetAllZones()
    {
        return await Zones.AsNoTracking().ToArrayAsync();
    }

    public async Task<Zones?> GetZoneByCode(string zoneCode)
    {
        return await Zones.AsNoTracking().FirstOrDefaultAsync(c => c.ZoneCode == zoneCode);
    }

    public async Task<Zones?> GetZoneById(int id)
    {
        return await Zones.AsNoTracking().FirstOrDefaultAsync(c => c.Id == id);
    }

    public async Task<ILookup<int, Zones>> GetZonesByIds(IEnumerable<int> ids)
    {
        var list = await Zones.AsNoTracking().Where(c => ids.Contains(c.Id)).ToListAsync();
        return list.ToLookup(list => list.Id);
    }

    public async Task<List<Zones>?> GetZonesByRegion(int districtId)
    {
        return await Zones.AsNoTracking().Where(c => c.DistrictId == districtId).ToListAsync();
    }

    public async Task<ILookup<int, Zones>> GetZonesByRegions(IEnumerable<int> districtsIds)
    {
        var list = await Zones.AsNoTracking().Where(c => districtsIds.Contains(c.DistrictId)).ToListAsync();
        return list.ToLookup(list=>list.DistrictId);
    }
}
