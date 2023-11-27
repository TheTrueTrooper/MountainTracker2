using MountainTracker.Shared.Model;

namespace MountainTracker.Server.Services;

public interface IProvinceOrStateService
{
    public Task<IEnumerable<ProvincesOrStates>> GetAllProvincesOrStates();

    public Task<ProvincesOrStates?> GetProvincesOrStatesByCode(string regionCode);

    public Task<ProvincesOrStates?> GetProvincesOrStatesById(int id);

    public Task<ProvincesOrStates?> GetProvincesOrStatesByCountry(int id);

    public Task<ILookup<int, ProvincesOrStates>> GetProvincesOrStatesByCountries(IEnumerable<int> countryIds);
}
