﻿using MountainTracker.Shared.Model;

namespace MountainTracker.Server.Services.LocalServices.Interfaces;

public interface IRegionGeoFenceNodeService
{
    public Task<IEnumerable<RegionGeoFenceNodes>> GetAllRegionGeoFenceNodes();

    public Task<RegionGeoFenceNodes?> GetRegionGeoFenceNodeById(int id);

    public Task<List<RegionGeoFenceNodes>?> GetRegionGeoFenceNodesByRegion(int regionId);

    public Task<ILookup<int, RegionGeoFenceNodes>> GetRegionGeoFenceNodesByRegions(IEnumerable<int> regionIds);

    public Task<ILookup<int, RegionGeoFenceNodes>> GetRegionGeoFenceNodesByIds(IEnumerable<int> ids);
}