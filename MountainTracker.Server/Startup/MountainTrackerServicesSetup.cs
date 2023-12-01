using Microsoft.EntityFrameworkCore;
using MountainTracker.Server.Contexts.MountainTrackerContext;
using MountainTracker.Server.Services.LocalServices.Interfaces;
using MountainTracker.Server.Services.LocalServices.Services;

namespace MountainTracker.Server.Startup;

public static class MountainTrackerServicesSetup
{
    const string connectionKey = GlobalConfigKeys.ConnectionKey;
    public static IServiceCollection AddMountainTrackerServices(this IServiceCollection services, ConfigurationManager configurationManager)
    {
        services.AddDbContext<MountainTrackerDatabase1Context>(options => options.UseSqlServer(configurationManager.GetConnectionString(connectionKey)));
        services.AddScoped<IRockClimbingTypeService, RockClimbingTypeService>();
        services.AddScoped<IBusyRatingsService, BusyRatingsService>();
        services.AddScoped<IClimbingQualityRatingsService, ClimbingQualityRatingsService>();
        services.AddScoped<ICountryService, CountryService>();
        services.AddScoped<IProvinceOrStateService, ProvinceOrStateService>();
        services.AddScoped<IRegionService, RegionService>();
        services.AddScoped<IDistrictService, DistrictService>();
        services.AddScoped<IZoneService, ZoneService>();
        services.AddScoped<IAreaService, AreaService>();
        services.AddScoped<IRockClimbingWallService, RockClimbingWallService>();
        services.AddScoped<IRockClimbingRouteService, RockClimbingRouteService>();
        services.AddScoped<IRegionGeoFenceNodeService, RegionGeoFenceNodeService>();
        services.AddScoped<IDistrictGeoFenceNodeService, DistrictGeoFenceNodeService>();
        services.AddScoped<IZoneGeoFenceNodeService, ZoneGeoFenceNodeService>();
        services.AddScoped<IAreaGeoFenceNodeService, AreaGeoFenceNodeService>();
        services.AddScoped<IRockClimbingWallGeoFenceNodeService, RockClimbingWallGeoFenceNodeService>();
        return services;
    }
}
