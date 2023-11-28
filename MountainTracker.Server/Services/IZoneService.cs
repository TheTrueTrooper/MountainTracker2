using Microsoft.EntityFrameworkCore;
using MountainTracker.Server.Contexts.MountainTrackerContext;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.Services;

public interface IZoneService
{
    public Task<IEnumerable<DistrictZones>> GetAllZones();

    public Task<DistrictZones?> GetZoneByCode(string ZoneCode);

    public Task<DistrictZones?> GetZoneById(int id);

    public Task<List<DistrictZones>?> GetZonesByRegion(int districtsId);

    public Task<ILookup<int, DistrictZones>> GetZonesByRegions(IEnumerable<int> districtsIds);
}
