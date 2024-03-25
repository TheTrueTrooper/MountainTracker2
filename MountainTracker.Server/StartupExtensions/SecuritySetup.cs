using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using MountainTracker.Server.Config;
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

        services.AddDefaultIdentity<IdentityUser>(options => {
            options.SignIn.RequireConfirmedAccount = config.SignInOptions.RequireConfirmedAccount;
        }).AddEntityFrameworkStores<IdentityDataContext>();

        services.Configure<IdentityOptions>(options =>
        {
            // Password settings.
            options.Password.RequireDigit = config.PasswordOptions.RequireDigit;
            options.Password.RequireLowercase = config.PasswordOptions.RequireLowercase;
            options.Password.RequireNonAlphanumeric = config.PasswordOptions.RequireNonAlphanumeric;
            options.Password.RequireUppercase = config.PasswordOptions.RequireUppercase;
            options.Password.RequiredLength = config.PasswordOptions.RequiredUniqueChars;
            options.Password.RequiredUniqueChars = config.PasswordOptions.RequiredUniqueChars;

            // Lockout settings.
            options.Lockout.DefaultLockoutTimeSpan = config.LockoutOptions.DefaultLockoutTimeSpan;
            options.Lockout.MaxFailedAccessAttempts = config.LockoutOptions.MaxFailedAccessAttempts;
            options.Lockout.AllowedForNewUsers = config.LockoutOptions.AllowedForNewUsers;

            // User settings.
            options.User.AllowedUserNameCharacters = config.UserOptions.AllowedUserNameCharacters;
            options.User.RequireUniqueEmail = config.UserOptions.RequireUniqueEmail;
        });

        services.AddAuthentication()
            .AddCookie(options =>
            {
                options.LoginPath = config.CookieAuthenticationOptions.LoginPath;
                options.AccessDeniedPath = config.CookieAuthenticationOptions.AccessDeniedPath;
                options.SlidingExpiration = config.CookieAuthenticationOptions.SlidingExpiration;
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
