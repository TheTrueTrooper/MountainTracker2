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
        string[] codes = areaCode.Split('-');
        if (codes.Length < 6)
        {
            return null;
        }
        return await Areas.AsNoTracking().FirstOrDefaultAsync(c => c.AreaCode == codes[5] && c.Zone.ZoneCode == codes[4] && c.Zone.District.DistrictCode == codes[3] && c.Zone.District.Region.RegionCode == codes[2] && c.Zone.District.Region.ProvinceOrState.RegionCode == codes[1] && c.Zone.District.Region.ProvinceOrState.Country.CountryCode == codes[0]);
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
        return await Areas.AsNoTracking().Where(c => ids.Contains(c.Id)).ToDictionaryAsync(key => key.Id, value => value);
    }

    public async Task<ILookup<int, Areas>> GetAreasByZones(IEnumerable<int> zoneIds)
    {
        var list = await Areas.AsNoTracking().Where(c => zoneIds.Contains(c.ZoneId)).ToListAsync();
        return list.ToLookup(list => list.ZoneId);
    }
}
