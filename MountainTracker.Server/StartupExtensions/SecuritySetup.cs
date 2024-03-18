using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using MountainTracker.Server.Config.Client;
using MountainTracker.Server.Contexts.Identity.EfGenerated;
using MountainTracker.Server.Contexts.MountainTrackerContext;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.StartupExtensions;

public static class SecuritySetup
{
    const string connectionKey = GlobalConfigKeys.IdentityDataContextConnection;
    const string securityKey = GlobalConfigKeys.SecurityKey;

    public static IServiceCollection AddAuthenticationAndAuthorization(this IServiceCollection services, ConfigurationManager configurationManager)
    {
        SecurityConfig config = configurationManager.GetSection(securityKey).Get<SecurityConfig>()!;
        
        services.AddDbContext<IdentityDataContext>(options => options.UseSqlServer(configurationManager.GetConnectionString(connectionKey)));

        services.AddDbContext<IdentityDataContext>(options => options.UseSqlServer(configurationManager.GetConnectionString(connectionKey)));

        services.AddDefaultIdentity<IdentityUser>(options => options.SignIn.RequireConfirmedAccount = true).AddEntityFrameworkStores<IdentityDataContext>();
        
        services.AddAuthentication()
            .AddCookie(options =>
            {
                options.LoginPath = config.LoginPath;
                options.AccessDeniedPath = config.AccessDeniedPath;
                options.SlidingExpiration = config.SlidingExpiration;
            });

        services.AddAuthorization(options => { });

        return services;
    }

    public static IApplicationBuilder UseAuthenticationAndAuthorization(this IApplicationBuilder webApp, IConfiguration configuration)
    {
        SecurityConfig config = configuration.GetSection(securityKey).Get<SecurityConfig>()!;

        //webApp.CreatePerOwinContext();
        return webApp;
    }
}
