using Microsoft.EntityFrameworkCore;
using MountainTracker.Server.Contexts.MountainTrackerContext;
using MountainTracker.Server.Services.LocalServices.Interfaces;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.Services.LocalServices.Services;

public class RegionGeoFenceNodeService : IRegionGeoFenceNodeService
{
    MountainTrackerDatabase1Context Context;
    DbSet<RegionGeoFenceNodes> RegionGeoFenceNodes;

    public RegionGeoFenceNodeService(MountainTrackerDatabase1Context context)
    {
        Context = context;
        RegionGeoFenceNodes = Context.RegionGeoFenceNodes;
    }

    public async Task<IEnumerable<RegionGeoFenceNodes>> GetAllRegionGeoFenceNodes()
    {
        return await RegionGeoFenceNodes.AsNoTracking().ToArrayAsync();
    }

    public async Task<RegionGeoFenceNodes?> GetRegionGeoFenceNodeById(int id)
    {
        return await RegionGeoFenceNodes.AsNoTracking().FirstOrDefaultAsync(c => c.Id == id);
    }

    public async Task<ILookup<int, RegionGeoFenceNodes>> GetRegionGeoFenceNodesByIds(IEnumerable<int> ids)
    {
        var list = await RegionGeoFenceNodes.AsNoTracking().Where(c => ids.Contains(c.Id)).ToListAsync();
        return list.ToLookup(list => list.Id);
    }

    public async Task<List<RegionGeoFenceNodes>?> GetRegionGeoFenceNodesByRegion(int regionId)
    {
        return await RegionGeoFenceNodes.AsNoTracking().Where(c => c.RegionId == regionId).ToListAsync();
    }

    public async Task<ILookup<int, RegionGeoFenceNodes>> GetRegionGeoFenceNodesByRegions(IEnumerable<int> regionIds)
    {
        var list = await RegionGeoFenceNodes.AsNoTracking().Where(c => regionIds.Contains(c.RegionId)).ToListAsync();
        return list.ToLookup(list => list.RegionId);
    }
}
