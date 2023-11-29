using MountainTracker.Shared.Model;

namespace MountainTracker.Server.Services;

public interface IRegionGeoFenceNodeService
{
    public Task<IEnumerable<RegionGeoFenceNodes>> GetAllRegionGeoFenceNodes();

    public Task<RegionGeoFenceNodes?> GetRegionGeoFenceNodeById(int id);

    public Task<List<RegionGeoFenceNodes>?> GetRegionGeoFenceNodesbyRegion(int regionId);

    public Task<ILookup<int, RegionGeoFenceNodes>> GetRegionGeoFenceNodesbyRegions(IEnumerable<int> regionIds);
}
