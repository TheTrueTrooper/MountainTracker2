using MountainTracker.Shared.Model;

namespace MountainTracker.Server.Services.LocalServices.Interfaces;

public interface IProvinceOrStateService
{
    public Task<IEnumerable<ProvincesOrStates>> GetAllProvincesOrStates();

    public Task<ProvincesOrStates?> GetProvinceOrStateByCode(string regionCode);

    public Task<ProvincesOrStates?> GetProvinceOrStateById(short id);

    public Task<IEnumerable<ProvincesOrStates>> GetProvincesOrStatesByCountry(byte countryId);

    public Task<ILookup<byte, ProvincesOrStates>> GetProvincesOrStatesByCountries(IEnumerable<byte> countryIds);

    public Task<IDictionary<short, ProvincesOrStates>> GetProvincesOrStatesByIds(IEnumerable<short> ids);
}
