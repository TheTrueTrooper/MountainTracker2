using Microsoft.EntityFrameworkCore;
using MountainTracker.Server.Contexts.MountainTrackerContext;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.Services;

public class AreaGeoFenceNodeService : IAreaGeoFenceNodeService
{
    MountainTrackerDatabase1Context Context;
    DbSet<AreaGeoFenceNodes> AreaGeoFenceNodes;

    public AreaGeoFenceNodeService(MountainTrackerDatabase1Context context)
    {
        this.Context = context;
        this.AreaGeoFenceNodes = Context.AreaGeoFenceNodes;
    }

    public async Task<IEnumerable<AreaGeoFenceNodes>> GetAllAreaGeoFenceNodes()
    {
        return await AreaGeoFenceNodes.AsNoTracking().ToArrayAsync();
    }

    public async Task<AreaGeoFenceNodes?> GetAreaGeoFenceNodeById(int id)
    {
        return await AreaGeoFenceNodes.AsNoTracking().FirstOrDefaultAsync(c => c.Id == id);
    }

    public async Task<List<AreaGeoFenceNodes>?> GetAreaGeoFenceNodesbyArea(int areaId)
    {
        return await AreaGeoFenceNodes.AsNoTracking().Where(c => c.AreaId == areaId).ToListAsync();
    }

    public async Task<ILookup<int, AreaGeoFenceNodes>> GetAreaGeoFenceNodesbyAreas(IEnumerable<int> areaIds)
    {
        var list = await AreaGeoFenceNodes.AsNoTracking().Where(c => areaIds.Contains(c.AreaId)).ToListAsync();
        return list.ToLookup(list=>list.AreaId);
    }
}
