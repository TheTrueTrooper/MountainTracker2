﻿using MountainTracker.Shared.Model;

namespace MountainTracker.Server.Services;

public interface IDistrictGeoFenceNodeService
{
    public Task<IEnumerable<DistrictGeoFenceNodes>> GetAllDistrictGeoFenceNodes();

    public Task<DistrictGeoFenceNodes?> GetDistrictGeoFenceNodeById(int id);

    public Task<List<DistrictGeoFenceNodes>?> GetDistrictGeoFenceNodesByDistrict(int districtId);

    public Task<ILookup<int, DistrictGeoFenceNodes>> GetDistrictGeoFenceNodesByDistricts(IEnumerable<int> districtIds);

    public Task<ILookup<int, DistrictGeoFenceNodes>> GetDistrictGeoFenceNodesByIds(IEnumerable<int> ids);
}
