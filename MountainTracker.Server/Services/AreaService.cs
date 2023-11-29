using Microsoft.EntityFrameworkCore;
using MountainTracker.Server.Contexts.MountainTrackerContext;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.Services;

public class AreaService : IAreaService
{
    MountainTrackerDatabase1Context Context;
    DbSet<ZoneAreas> ZoneAreas;

    public AreaService(MountainTrackerDatabase1Context context)
    {
        this.Context = context;
        this.ZoneAreas = Context.ZoneAreas;
    }

    public async Task<IEnumerable<ZoneAreas>> GetAllAreas()
    {
        return await ZoneAreas.AsNoTracking().ToArrayAsync();
    }

    public async Task<ZoneAreas?> GetAreaByCode(string areaCode)
    {
        return await ZoneAreas.AsNoTracking().FirstOrDefaultAsync(c => c.AreaCode == areaCode);
    }

    public async Task<ZoneAreas?> GetAreaById(int id)
    {
        return await ZoneAreas.AsNoTracking().FirstOrDefaultAsync(c => c.Id == id);
    }

    public async Task<List<ZoneAreas>?> GetAreaByZone(int districtZoneId)
    {
        return await ZoneAreas.AsNoTracking().Where(c => c.DistrictZoneId == districtZoneId).ToListAsync();
    }

    public async Task<ILookup<int, ZoneAreas>> GetAreasByZones(IEnumerable<int> zoneIds)
    {
        var list = await ZoneAreas.AsNoTracking().Where(c => zoneIds.Contains(c.DistrictZoneId)).ToListAsync();
        return list.ToLookup(list=>list.DistrictZoneId);
    }
}
