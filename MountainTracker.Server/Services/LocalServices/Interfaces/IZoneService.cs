using MountainTracker.Shared.Model;

namespace MountainTracker.Server.Services.LocalServices.Interfaces;

public interface IZoneService
{
    public Task<IEnumerable<Zones>> GetAllZones();

    public Task<Zones?> GetZoneByCode(string zoneCode);

    public Task<Zones?> GetZoneById(int id);

    public Task<IEnumerable<Zones>?> GetZonesByRegion(int districtsId);

    public Task<ILookup<int, Zones>> GetZonesByRegions(IEnumerable<int> districtsIds);

    public Task<IDictionary<int, Zones>> GetZonesByIds(IEnumerable<int> ids);
}
