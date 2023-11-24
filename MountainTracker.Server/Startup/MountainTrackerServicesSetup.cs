using Microsoft.EntityFrameworkCore;
using MountainTracker.Server.Contexts.MountainTrackerContext;
using MountainTracker.Server.Services;

namespace MountainTracker.Server.Startup;

public static class MountainTrackerServicesSetup
{
    const string connectionKey = GlobalConfigKeys.ConnectionKey;
    public static IServiceCollection AddMountainTrackerServices(this IServiceCollection services, ConfigurationManager configurationManager)
    {
        services.AddDbContext<MountainTrackerDatabase1Context>(options => options.UseSqlServer(configurationManager.GetConnectionString(connectionKey)));
        services.AddScoped<ICountryService, CountryService>();
        return services;
    }
}
