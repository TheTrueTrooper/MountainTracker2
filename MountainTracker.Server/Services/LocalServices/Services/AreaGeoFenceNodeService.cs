using Microsoft.EntityFrameworkCore;
using MountainTracker.Server.Contexts.MountainTrackerContext;
using MountainTracker.Server.Services.LocalServices.Interfaces;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.Services.LocalServices.Services;

public class AreaGeoFenceNodeService : IAreaGeoFenceNodeService
{
    MountainTrackerDatabase1Context Context;
    DbSet<AreaGeoFenceNodes> AreaGeoFenceNodes;

    public AreaGeoFenceNodeService(MountainTrackerDatabase1Context context)
    {
        Context = context;
        AreaGeoFenceNodes = Context.AreaGeoFenceNodes;
    }

    public async Task<IEnumerable<AreaGeoFenceNodes>> GetAllAreaGeoFenceNodes()
    {
        return await AreaGeoFenceNodes.AsNoTracking().ToArrayAsync();
    }

    public async Task<AreaGeoFenceNodes?> GetAreaGeoFenceNodeById(int id)
    {
        return await AreaGeoFenceNodes.AsNoTracking().FirstOrDefaultAsync(c => c.Id == id);
    }

    public async Task<IEnumerable<AreaGeoFenceNodes>?> GetAreaGeoFenceNodesByArea(int areaId)
    {
        return await AreaGeoFenceNodes.AsNoTracking().Where(c => c.AreaId == areaId).ToListAsync();
    }

    public async Task<ILookup<int, AreaGeoFenceNodes>> GetAreaGeoFenceNodesByAreas(IEnumerable<int> areaIds)
    {
        var list = await AreaGeoFenceNodes.AsNoTracking().Where(c => areaIds.Contains(c.AreaId)).ToListAsync();
        return list.ToLookup(list => list.AreaId);
    }

    public async Task<IDictionary<int, AreaGeoFenceNodes>> GetAreaGeoFenceNodesByIds(IEnumerable<int> ids)
    {
        return await AreaGeoFenceNodes.AsNoTracking().Where(c => ids.Contains(c.Id)).ToDictionaryAsync(key=>key.Id, value=>value);
    }
}
