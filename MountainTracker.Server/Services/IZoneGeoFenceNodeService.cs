using MountainTracker.Shared.Model;

namespace MountainTracker.Server.Services;

public interface IZoneGeoFenceNodeService
{
    public Task<IEnumerable<ZoneGeoFenceNodes>> GetAllZoneGeoFenceNodes();

    public Task<ZoneGeoFenceNodes?> GetZoneGeoFenceNodeById(int id);

    public Task<List<ZoneGeoFenceNodes>?> GetZoneGeoFenceNodesByZone(int zoneId);

    public Task<ILookup<int, ZoneGeoFenceNodes>> GetZoneGeoFenceNodesByZones(IEnumerable<int> zoneIds);

    public Task<ILookup<int, ZoneGeoFenceNodes>> GetZoneGeoFenceNodesByIds(IEnumerable<int> ids);
}
