using MountainTracker.Shared.Model;

namespace MountainTracker.Server.Services;

public interface IDistrictService
{
    public Task<IEnumerable<Districts>> GetAllDistricts();

    public Task<Districts?> GetDistrictByCode(string regionCode);

    public Task<Districts?> GetDistrictById(int id);

    public Task<List<Districts>?> GetDistrictsByRegion(int regionId);

    public Task<ILookup<int, Districts>> GetDistrictsByRegions(IEnumerable<int> regionIds);
}
