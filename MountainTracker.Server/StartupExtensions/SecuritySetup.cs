using MountainTracker.Server.Config.Client;
using MountainTracker.Server.Services.IdentityServices.Store;

namespace MountainTracker.Server.StartupExtensions;

public static class SecuritySetup
{
    const string connectionKey = GlobalConfigKeys.SecurityKey;

    public static IServiceCollection AddIdentityAuthenticationAndAuthorization(this IServiceCollection services, ConfigurationManager configurationManager)
    {
        SecurityConfig config = configurationManager.GetSection(connectionKey).Get<SecurityConfig>()!;

        services.AddSingleton<UserStore>();
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
}
