﻿using MountainTracker.Shared.Model;

namespace MountainTracker.Server.Services;

public interface IZoneGeoFenceNodeService
{
    public Task<IEnumerable<ZoneGeoFenceNodes>> GetAllZoneGeoFenceNodes();

    public Task<ZoneGeoFenceNodes?> GetZoneGeoFenceNodeById(int id);

    public Task<List<ZoneGeoFenceNodes>?> GetZoneGeoFenceNodesbyZone(int zoneId);

    public Task<ILookup<int, ZoneGeoFenceNodes>> GetZoneGeoFenceNodesbyZones(IEnumerable<int> zoneIds);
}
