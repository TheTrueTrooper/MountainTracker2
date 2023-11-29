using MountainTracker.Shared.Model;

namespace MountainTracker.Server.Services;

public interface IDistrictGeoFenceNodeService
{
    public Task<IEnumerable<DistrictGeoFenceNodes>> GetAllDistrictGeoFenceNodes();

    public Task<DistrictGeoFenceNodes?> GetDistrictGeoFenceNodeById(int id);

    public Task<List<DistrictGeoFenceNodes>?> GetDistrictGeoFenceNodesbyDistrict(int districtId);

    public Task<ILookup<int, DistrictGeoFenceNodes>> GetDistrictGeoFenceNodesbyDistricts(IEnumerable<int> districtIds);
}
