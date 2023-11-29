using Microsoft.EntityFrameworkCore;
using MountainTracker.Server.Contexts.MountainTrackerContext;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.Services;

public class ZoneGeoFenceNodeService : IZoneGeoFenceNodeService
{
    MountainTrackerDatabase1Context Context;
    DbSet<ZoneGeoFenceNodes> ZoneGeoFenceNodes;

    public ZoneGeoFenceNodeService(MountainTrackerDatabase1Context context)
    {
        this.Context = context;
        this.ZoneGeoFenceNodes = Context.ZoneGeoFenceNodes;
    }

    public async Task<IEnumerable<ZoneGeoFenceNodes>> GetAllZoneGeoFenceNodes()
    {
        return await ZoneGeoFenceNodes.AsNoTracking().ToArrayAsync();
    }

    public async Task<ZoneGeoFenceNodes?> GetZoneGeoFenceNodeById(int id)
    {
        return await ZoneGeoFenceNodes.AsNoTracking().FirstOrDefaultAsync(c => c.Id == id);
    }

    public async Task<List<ZoneGeoFenceNodes>?> GetZoneGeoFenceNodesbyZone(int zoneId)
    {
        return await ZoneGeoFenceNodes.AsNoTracking().Where(c => c.ZoneId == zoneId).ToListAsync();
    }

    public async Task<ILookup<int, ZoneGeoFenceNodes>> GetZoneGeoFenceNodesbyZones(IEnumerable<int> zoneIds)
    {
        var list = await ZoneGeoFenceNodes.AsNoTracking().Where(c => zoneIds.Contains(c.ZoneId)).ToListAsync();
        return list.ToLookup(list=>list.ZoneId);
    }
}
