﻿using Microsoft.EntityFrameworkCore;
using MountainTracker.Server.Contexts.MountainTrackerContext;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.Services;

public class DistrictService : IDistrictService
{
    MountainTrackerDatabase1Context Context;
    DbSet<Districts> Districts;

    public DistrictService(MountainTrackerDatabase1Context context)
    {
        this.Context = context;
        this.Districts = Context.Districts;
    }

    public async Task<IEnumerable<Districts>> GetAllDistricts()
    {
        return await Districts.AsNoTracking().ToArrayAsync();
    }

    public async Task<Districts?> GetDistrictByCode(string regionCode)
    {
        return await Districts.AsNoTracking().FirstOrDefaultAsync(c => c.DistrictCode == regionCode);
    }

    public async Task<Districts?> GetDistrictById(int id)
    {
        return await Districts.AsNoTracking().FirstOrDefaultAsync(c => c.Id == id);
    }

    public async Task<List<Districts>?> GetDistrictsByRegion(int regionId)
    {
        return await Districts.AsNoTracking().Where(c => c.RegionId == regionId).ToListAsync();
    }

    public async Task<ILookup<int, Districts>> GetDistrictsByRegions(IEnumerable<int> RegionIds)
    {
        var list = await Districts.AsNoTracking().Where(c => RegionIds.Contains(c.RegionId)).ToListAsync();
        return list.ToLookup(list=>list.RegionId);
    }
}
