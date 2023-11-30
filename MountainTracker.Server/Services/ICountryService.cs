using MountainTracker.Shared.Model;

namespace MountainTracker.Server.Services
{
    public interface ICountryService
    {
        Task<IEnumerable<Countries>> GetAllCountries();

        Task<Countries?> GetCountryById(byte countryId);

        Task<Countries?> GetCountryByCode(string countryCode);

        public Task<ILookup<byte, Countries>> GetCountriesByIds(IEnumerable<byte> ids);
    }
}
