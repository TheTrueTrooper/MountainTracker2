﻿using MountainTracker.Shared.Model;

namespace MountainTracker.Server.Services.LocalServices.Interfaces;

public interface IAreaGeoFenceNodeService
{
    public Task<IEnumerable<AreaGeoFenceNodes>> GetAllAreaGeoFenceNodes();

    public Task<AreaGeoFenceNodes?> GetAreaGeoFenceNodeById(int id);

    public Task<List<AreaGeoFenceNodes>?> GetAreaGeoFenceNodesByArea(int areaId);

    public Task<ILookup<int, AreaGeoFenceNodes>> GetAreaGeoFenceNodesByAreas(IEnumerable<int> areaIds);

    public Task<ILookup<int, AreaGeoFenceNodes>> GetAreaGeoFenceNodesByIds(IEnumerable<int> ids);
}