using MountainTracker.Shared.Model;

namespace MountainTracker.Server.Services
{
    public interface ICountryService
    {
        IEnumerable<Countries> GetAllCountries();
    }
}
