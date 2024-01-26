using Microsoft.AspNet.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using MountainTracker.Server.Config.Client;
using MountainTracker.Server.Contexts.MountainTrackerContext;
using MountainTracker.Server.Services.IdentityServices.Store;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.StartupExtensions;

public static class SecuritySetup
{
    const string connectionKey = GlobalConfigKeys.ConnectionKey;
    const string securityKey = GlobalConfigKeys.SecurityKey;

    public static IServiceCollection AddAuthenticationAndAuthorization(this IServiceCollection services, ConfigurationManager configurationManager)
    {
        if (!services.Any(x => x.ServiceType == typeof(MountainTrackerDatabase1Context)))
        {
            services.AddDbContext<MountainTrackerDatabase1Context>(options => options.UseSqlServer(configurationManager.GetConnectionString(connectionKey)));
        }

        SecurityConfig config = configurationManager.GetSection(securityKey).Get<SecurityConfig>()!;

        services.AddIdentity<ApplicationUsersIdentity, ApplicationRolesIdentity>()
            .AddDefaultTokenProviders();

        services.AddTransient<UserStore>();
        services.AddTransient<IUserStore<ApplicationUsersIdentity, int>, UserStore>();
        services.AddTransient<IRoleStore<ApplicationRolesIdentity, int>, RoleStore>();
        services.AddAuthentication()
            .AddCookie(options =>
            {
                options.LoginPath = config.LoginPath;
                options.AccessDeniedPath = config.AccessDeniedPath;
                options.SlidingExpiration = config.SlidingExpiration;
            });
        services.AddAuthorization(options =>{});


        return services;
    }

    public static IApplicationBuilder UseAuthenticationAndAuthorization(this IApplicationBuilder webApp, IConfiguration configuration)
    {
        SecurityConfig config = configuration.GetSection(securityKey).Get<SecurityConfig>()!;

        //webApp.CreatePerOwinContext();
        return webApp;
    }
}
