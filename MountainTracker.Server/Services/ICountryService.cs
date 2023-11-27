using MountainTracker.Shared.Model;

namespace MountainTracker.Server.Services
{
    public interface ICountryService
    {
        Task<IEnumerable<Countries>> GetAllCountries();
        Task<Countries?> GetCountryById(int id);
        Task<Countries?> GetCountryByCode(string countryCode);
    }
}
