using Microsoft.EntityFrameworkCore;
using MountainTracker.Server.Contexts.MountainTrackerContext;
using MountainTracker.Server.Services.LocalServices.Interfaces;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.Services.LocalServices.Services;

public class AreaService : IAreaService
{
    MountainTrackerDatabase1Context Context;
    DbSet<Areas> Areas;

    public AreaService(MountainTrackerDatabase1Context context)
    {
        Context = context;
        Areas = Context.Areas;
    }

    public async Task<IEnumerable<Areas>> GetAllAreas()
    {
        return await Areas.AsNoTracking().ToArrayAsync();
    }

    public async Task<Areas?> GetAreaByCode(string areaCode)
    {
        return await Areas.AsNoTracking().FirstOrDefaultAsync(c => c.AreaCode == areaCode);
    }

    public async Task<Areas?> GetAreaById(int id)
    {
        return await Areas.AsNoTracking().FirstOrDefaultAsync(c => c.Id == id);
    }

    public async Task<IEnumerable<Areas>?> GetAreaByZone(int zoneId)
    {
        return await Areas.AsNoTracking().Where(c => c.ZoneId == zoneId).ToListAsync();
    }

    public async Task<IDictionary<int, Areas>> GetAreasByIds(IEnumerable<int> ids)
    {
        return await Areas.AsNoTracking().Where(c => ids.Contains(c.Id)).ToDictionaryAsync(key=>key.Id, value=>value);
    }

    public async Task<ILookup<int, Areas>> GetAreasByZones(IEnumerable<int> zoneIds)
    {
        var list = await Areas.AsNoTracking().Where(c => zoneIds.Contains(c.ZoneId)).ToListAsync();
        return list.ToLookup(list => list.ZoneId);
    }
}
