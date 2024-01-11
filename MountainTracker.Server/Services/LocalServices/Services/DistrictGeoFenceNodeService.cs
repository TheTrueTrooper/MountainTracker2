using Microsoft.EntityFrameworkCore;
using MountainTracker.Server.Contexts.MountainTrackerContext;
using MountainTracker.Server.Services.LocalServices.Interfaces;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.Services.LocalServices.Services;

public class DistrictGeoFenceNodeService : IDistrictGeoFenceNodeService
{
    MountainTrackerDatabase1Context Context;
    DbSet<DistrictGeoFenceNodes> DistrictGeoFenceNodes;

    public DistrictGeoFenceNodeService(MountainTrackerDatabase1Context context)
    {
        Context = context;
        DistrictGeoFenceNodes = Context.DistrictGeoFenceNodes;
    }

    public async Task<IEnumerable<DistrictGeoFenceNodes>> GetAllDistrictGeoFenceNodes()
    {
        return await DistrictGeoFenceNodes.AsNoTracking().ToArrayAsync();
    }

    public async Task<DistrictGeoFenceNodes?> GetDistrictGeoFenceNodeById(int id)
    {
        return await DistrictGeoFenceNodes.AsNoTracking().FirstOrDefaultAsync(c => c.Id == id);
    }

    public async Task<IEnumerable<DistrictGeoFenceNodes>?> GetDistrictGeoFenceNodesByDistrict(int districtId)
    {
        return await DistrictGeoFenceNodes.AsNoTracking().Where(c => c.DistrictId == districtId).ToListAsync();
    }

    public async Task<ILookup<int, DistrictGeoFenceNodes>> GetDistrictGeoFenceNodesByDistricts(IEnumerable<int> districtIds)
    {
        var list = await DistrictGeoFenceNodes.AsNoTracking().Where(c => districtIds.Contains(c.DistrictId)).ToListAsync();
        return list.ToLookup(list => list.DistrictId);
    }

    public async Task<IDictionary<int, DistrictGeoFenceNodes>> GetDistrictGeoFenceNodesByIds(IEnumerable<int> ids)
    {
        return await DistrictGeoFenceNodes.AsNoTracking().Where(c => ids.Contains(c.Id)).ToDictionaryAsync(key => key.Id, value => value);
    }
}
