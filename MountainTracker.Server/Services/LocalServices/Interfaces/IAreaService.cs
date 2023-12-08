using MountainTracker.Shared.Model;

namespace MountainTracker.Server.Services.LocalServices.Interfaces;

public interface IAreaService
{
    public Task<IEnumerable<Areas>> GetAllAreas();

    public Task<Areas?> GetAreaByCode(string areaCode);

    public Task<Areas?> GetAreaById(int id);

    public Task<IEnumerable<Areas>?> GetAreaByZone(int zoneId);

    public Task<ILookup<int, Areas>> GetAreasByZones(IEnumerable<int> zoneIds);

    public Task<IDictionary<int, Areas>> GetAreasByIds(IEnumerable<int> ids);
}
