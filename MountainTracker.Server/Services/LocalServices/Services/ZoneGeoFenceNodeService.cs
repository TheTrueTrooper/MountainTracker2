using Microsoft.EntityFrameworkCore;
using MountainTracker.Server.Contexts.MountainTrackerContext;
using MountainTracker.Server.Services.LocalServices.Interfaces;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.Services.LocalServices.Services;

public class ZoneGeoFenceNodeService : IZoneGeoFenceNodeService
{
    MountainTrackerDatabase1Context Context;
    DbSet<ZoneGeoFenceNodes> ZoneGeoFenceNodes;

    public ZoneGeoFenceNodeService(MountainTrackerDatabase1Context context)
    {
        Context = context;
        ZoneGeoFenceNodes = Context.ZoneGeoFenceNodes;
    }

    public async Task<IEnumerable<ZoneGeoFenceNodes>> GetAllZoneGeoFenceNodes()
    {
        return await ZoneGeoFenceNodes.AsNoTracking().ToArrayAsync();
    }

    public async Task<ZoneGeoFenceNodes?> GetZoneGeoFenceNodeById(int id)
    {
        return await ZoneGeoFenceNodes.AsNoTracking().FirstOrDefaultAsync(c => c.Id == id);
    }

    public async Task<IDictionary<int, ZoneGeoFenceNodes>> GetZoneGeoFenceNodesByIds(IEnumerable<int> ids)
    {
        return await ZoneGeoFenceNodes.AsNoTracking().Where(c => ids.Contains(c.Id)).ToDictionaryAsync(key => key.Id, value => value);
    }

    public async Task<IEnumerable<ZoneGeoFenceNodes>?> GetZoneGeoFenceNodesByZone(int zoneId)
    {
        return await ZoneGeoFenceNodes.AsNoTracking().Where(c => c.ZoneId == zoneId).ToListAsync();
    }

    public async Task<ILookup<int, ZoneGeoFenceNodes>> GetZoneGeoFenceNodesByZones(IEnumerable<int> zoneIds)
    {
        var list = await ZoneGeoFenceNodes.AsNoTracking().Where(c => zoneIds.Contains(c.ZoneId)).ToListAsync();
        return list.ToLookup(list => list.ZoneId);
    }
}
