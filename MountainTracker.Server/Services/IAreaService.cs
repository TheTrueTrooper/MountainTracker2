using Microsoft.EntityFrameworkCore;
using MountainTracker.Server.Contexts.MountainTrackerContext;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.Services;

public interface IAreaService
{
    public Task<IEnumerable<ZoneAreas>> GetAllAreas();

    public Task<ZoneAreas?> GetAreaByCode(string AreaCode);

    public Task<ZoneAreas?> GetAreaById(int id);

    public Task<List<ZoneAreas>?> GetAreaByZone(int districtZoneId);

    public Task<ILookup<int, ZoneAreas>> GetAreasByZones(IEnumerable<int> zoneIds);
}
