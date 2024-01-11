using Microsoft.EntityFrameworkCore;
using MountainTracker.Server.Contexts.MountainTrackerContext;
using MountainTracker.Server.Services.LocalServices.Interfaces;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.Services.LocalServices.Services;

public class ZoneService : IZoneService
{
    MountainTrackerDatabase1Context Context;
    DbSet<Zones> Zones;

    public ZoneService(MountainTrackerDatabase1Context context)
    {
        Context = context;
        Zones = Context.Zones;
    }

    public async Task<IEnumerable<Zones>> GetAllZones()
    {
        return await Zones.AsNoTracking().ToArrayAsync();
    }

    public async Task<Zones?> GetZoneByCode(string zoneCode)
    {
        string[] codes = zoneCode.Split('-');
        if (codes.Length != 5)
        {
            return null;
        }
        return await Zones.AsNoTracking().FirstOrDefaultAsync(c => c.ZoneCode == codes[4] && c.District.DistrictCode == codes[3] && c.District.Region.RegionCode == codes[2] && c.District.Region.ProvinceOrState.RegionCode == codes[1] && c.District.Region.ProvinceOrState.Country.CountryCode == codes[0]);
    }

    public async Task<Zones?> GetZoneById(int id)
    {
        return await Zones.AsNoTracking().FirstOrDefaultAsync(c => c.Id == id);
    }

    public async Task<IDictionary<int, Zones>> GetZonesByIds(IEnumerable<int> ids)
    {
        return await Zones.AsNoTracking().Where(c => ids.Contains(c.Id)).ToDictionaryAsync(key => key.Id, value => value);
    }

    public async Task<IEnumerable<Zones>?> GetZonesByDistrict(int districtId)
    {
        return await Zones.AsNoTracking().Where(c => c.DistrictId == districtId).ToListAsync();
    }

    public async Task<ILookup<int, Zones>> GetZonesByDistricts(IEnumerable<int> districtsIds)
    {
        var list = await Zones.AsNoTracking().Where(c => districtsIds.Contains(c.DistrictId)).ToListAsync();
        return list.ToLookup(list => list.DistrictId);
    }
}
