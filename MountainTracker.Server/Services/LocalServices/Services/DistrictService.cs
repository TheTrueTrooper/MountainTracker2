using Microsoft.EntityFrameworkCore;
using MountainTracker.Server.Contexts.MountainTrackerContext;
using MountainTracker.Server.Services.LocalServices.Interfaces;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.Services.LocalServices.Services;

public class DistrictService : IDistrictService
{
    MountainTrackerDatabase1Context Context;
    DbSet<Districts> Districts;

    public DistrictService(MountainTrackerDatabase1Context context)
    {
        Context = context;
        Districts = Context.Districts;
    }

    public async Task<IEnumerable<Districts>> GetAllDistricts()
    {
        return await Districts.AsNoTracking().ToArrayAsync();
    }

    public async Task<Districts?> GetDistrictByCode(string districtCode)
    {
        string[] codes = districtCode.Split('-');
        if (codes.Length != 4)
        {
            return null;
        }
        return await Districts.AsNoTracking().FirstOrDefaultAsync(c => c.DistrictCode == codes[3] && c.Region.RegionCode == codes[2] && c.Region.ProvinceOrState.RegionCode == codes[1] && c.Region.ProvinceOrState.Country.CountryCode == codes[0]);
    }

    public async Task<Districts?> GetDistrictById(int id)
    {
        return await Districts.AsNoTracking().FirstOrDefaultAsync(c => c.Id == id);
    }

    public async Task<IDictionary<int, Districts>> GetDistrictsByIds(IEnumerable<int> ids)
    {
        return await Districts.AsNoTracking().Where(c => ids.Contains(c.Id)).ToDictionaryAsync(key => key.Id, value => value);
    }

    public async Task<IEnumerable<Districts>?> GetDistrictsByRegion(int regionId)
    {
        return await Districts.AsNoTracking().Where(c => c.RegionId == regionId).ToListAsync();
    }

    public async Task<ILookup<int, Districts>> GetDistrictsByRegions(IEnumerable<int> regionIds)
    {
        var list = await Districts.AsNoTracking().Where(c => regionIds.Contains(c.RegionId)).ToListAsync();
        return list.ToLookup(list => list.RegionId);
    }
}
