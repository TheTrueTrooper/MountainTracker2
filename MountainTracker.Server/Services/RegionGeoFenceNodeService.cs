﻿using Microsoft.EntityFrameworkCore;
using MountainTracker.Server.Contexts.MountainTrackerContext;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.Services;

public class RegionGeoFenceNodeService : IRegionGeoFenceNodeService
{
    MountainTrackerDatabase1Context Context;
    DbSet<RegionGeoFenceNodes> RegionGeoFenceNodes;

    public RegionGeoFenceNodeService(MountainTrackerDatabase1Context context)
    {
        this.Context = context;
        this.RegionGeoFenceNodes = Context.RegionGeoFenceNodes;
    }

    public async Task<IEnumerable<RegionGeoFenceNodes>> GetAllRegionGeoFenceNodes()
    {
        return await RegionGeoFenceNodes.AsNoTracking().ToArrayAsync();
    }

    public async Task<RegionGeoFenceNodes?> GetRegionGeoFenceNodeById(int id)
    {
        return await RegionGeoFenceNodes.AsNoTracking().FirstOrDefaultAsync(c => c.Id == id);
    }

    public async Task<List<RegionGeoFenceNodes>?> GetRegionGeoFenceNodesbyRegion(int regionId)
    {
        return await RegionGeoFenceNodes.AsNoTracking().Where(c => c.RegionId == regionId).ToListAsync();
    }

    public async Task<ILookup<int, RegionGeoFenceNodes>> GetRegionGeoFenceNodesbyRegions(IEnumerable<int> regionIds)
    {
        var list = await RegionGeoFenceNodes.AsNoTracking().Where(c => regionIds.Contains(c.RegionId)).ToListAsync();
        return list.ToLookup(list => list.RegionId);
    }
}
