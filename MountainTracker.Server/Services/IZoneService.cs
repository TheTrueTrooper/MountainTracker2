using MountainTracker.Shared.Model;

namespace MountainTracker.Server.Services;

public interface IZoneService
{
    public Task<IEnumerable<Zones>> GetAllZones();

    public Task<Zones?> GetZoneByCode(string zoneCode);

    public Task<Zones?> GetZoneById(int id);

    public Task<List<Zones>?> GetZonesByRegion(int districtsId);

    public Task<ILookup<int, Zones>> GetZonesByRegions(IEnumerable<int> districtsIds);
}
