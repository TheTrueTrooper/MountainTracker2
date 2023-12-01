using MountainTracker.Shared.Model;

namespace MountainTracker.Server.Services.LocalServices.Interfaces;

public interface IDistrictGeoFenceNodeService
{
    public Task<IEnumerable<DistrictGeoFenceNodes>> GetAllDistrictGeoFenceNodes();

    public Task<DistrictGeoFenceNodes?> GetDistrictGeoFenceNodeById(int id);

    public Task<IEnumerable<DistrictGeoFenceNodes>?> GetDistrictGeoFenceNodesByDistrict(int districtId);

    public Task<ILookup<int, DistrictGeoFenceNodes>> GetDistrictGeoFenceNodesByDistricts(IEnumerable<int> districtIds);

    public Task<IDictionary<int, DistrictGeoFenceNodes>> GetDistrictGeoFenceNodesByIds(IEnumerable<int> ids);
}
