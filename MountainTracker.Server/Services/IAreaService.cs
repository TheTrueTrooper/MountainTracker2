using MountainTracker.Shared.Model;

namespace MountainTracker.Server.Services;

public interface IAreaService
{
    public Task<IEnumerable<Areas>> GetAllAreas();

    public Task<Areas?> GetAreaByCode(string areaCode);

    public Task<Areas?> GetAreaById(int id);

    public Task<List<Areas>?> GetAreaByZone(int districtZoneId);

    public Task<ILookup<int, Areas>> GetAreasByZones(IEnumerable<int> zoneIds);

    public Task<ILookup<int, Areas>> GetAreasByIds(IEnumerable<int> ids);
}
