using MountainTracker.Shared.Model;

namespace MountainTracker.Server.Services
{
    public interface ICountryService
    {
        Task<IEnumerable<Countries>> GetAllCountries();
    }
}
