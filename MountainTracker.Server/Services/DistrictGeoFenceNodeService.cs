using Microsoft.EntityFrameworkCore;
using MountainTracker.Server.Contexts.MountainTrackerContext;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.Services;

public class DistrictGeoFenceNodeService : IDistrictGeoFenceNodeService
{
    MountainTrackerDatabase1Context Context;
    DbSet<DistrictGeoFenceNodes> DistrictGeoFenceNodes;

    public DistrictGeoFenceNodeService(MountainTrackerDatabase1Context context)
    {
        this.Context = context;
        this.DistrictGeoFenceNodes = Context.DistrictGeoFenceNodes;
    }

    public async Task<IEnumerable<DistrictGeoFenceNodes>> GetAllDistrictGeoFenceNodes()
    {
        return await DistrictGeoFenceNodes.AsNoTracking().ToArrayAsync();
    }

    public async Task<DistrictGeoFenceNodes?> GetDistrictGeoFenceNodeById(int id)
    {
        return await DistrictGeoFenceNodes.AsNoTracking().FirstOrDefaultAsync(c => c.Id == id);
    }

    public async Task<List<DistrictGeoFenceNodes>?> GetDistrictGeoFenceNodesbyDistrict(int districtId)
    {
        return await DistrictGeoFenceNodes.AsNoTracking().Where(c => c.DistrictId == districtId).ToListAsync();
    }

    public async Task<ILookup<int, DistrictGeoFenceNodes>> GetDistrictGeoFenceNodesbyDistricts(IEnumerable<int> districtIds)
    {
        var list = await DistrictGeoFenceNodes.AsNoTracking().Where(c => districtIds.Contains(c.DistrictId)).ToListAsync();
        return list.ToLookup(list=>list.DistrictId);
    }
}
