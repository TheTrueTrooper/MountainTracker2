using MountainTracker.Shared.Model;

namespace MountainTracker.Server.Services.LocalServices.Interfaces
{
    public interface ICountryService
    {
        Task<IEnumerable<Countries>> GetAllCountries();

        Task<Countries?> GetCountryById(byte countryId);

        Task<Countries?> GetCountryByCode(string countryCode);

        public Task<IDictionary<byte, Countries>> GetCountriesByIds(IEnumerable<byte> ids);
    }
}
