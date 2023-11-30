using MountainTracker.Shared.Model;

namespace MountainTracker.Server.Services.LocalServices.Interfaces;

public interface IZoneGeoFenceNodeService
{
    public Task<IEnumerable<ZoneGeoFenceNodes>> GetAllZoneGeoFenceNodes();

    public Task<ZoneGeoFenceNodes?> GetZoneGeoFenceNodeById(int id);

    public Task<IEnumerable<ZoneGeoFenceNodes>?> GetZoneGeoFenceNodesByZone(int zoneId);

    public Task<ILookup<int, ZoneGeoFenceNodes>> GetZoneGeoFenceNodesByZones(IEnumerable<int> zoneIds);

    public Task<IDictionary<int, ZoneGeoFenceNodes>> GetZoneGeoFenceNodesByIds(IEnumerable<int> ids);
}
