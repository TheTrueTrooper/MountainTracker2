using MountainTracker.Shared.Model;

namespace MountainTracker.Server.Services.LocalServices.Interfaces;

public interface IDistrictService
{
    public Task<IEnumerable<Districts>> GetAllDistricts();

    public Task<Districts?> GetDistrictByCode(string regionCode);

    public Task<Districts?> GetDistrictById(int id);

    public Task<List<Districts>?> GetDistrictsByRegion(int regionId);

    public Task<ILookup<int, Districts>> GetDistrictsByRegions(IEnumerable<int> regionIds);

    public Task<ILookup<int, Districts>> GetDistrictsByIds(IEnumerable<int> ids);
}
