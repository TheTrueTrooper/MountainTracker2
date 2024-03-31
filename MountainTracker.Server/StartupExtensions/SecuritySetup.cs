using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using MountainTracker.Server.Config;
using MountainTracker.Server.Contexts.Identity.EfGenerated;

namespace MountainTracker.Server.StartupExtensions;

public static class SecuritySetup
{
    const string connectionKey = GlobalConfigKeys.IdentityDataContextConnection;
    const string securityKey = GlobalConfigKeys.SecurityKey;

    public static IServiceCollection AddAuthenticationAndAuthorization(this IServiceCollection services, ConfigurationManager configurationManager)
    {
        SecurityConfig config = configurationManager.GetSection(securityKey).Get<SecurityConfig>()!;
        
        services.AddDbContext<IdentityDataContext>(options => options.UseSqlServer(configurationManager.GetConnectionString(connectionKey)));

        services.AddIdentityApiEndpoints<IdentityUser>()
            .AddEntityFrameworkStores<IdentityDataContext>();

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

    public static IEndpointRouteBuilder UseAuthenticationAndAuthorization(this IEndpointRouteBuilder webApp, IConfiguration configuration)
    {
        SecurityConfig config = configuration.GetSection(securityKey).Get<SecurityConfig>()!;
        string[] urlSeg = config.securityEndpoint.Split('/').Where(str=>str!="").ToArray();
        var mapper = webApp.MapGroup(urlSeg[0]);
        for (int i = 1; i < urlSeg.Length; i++)
        {
            mapper.MapGroup(urlSeg[i])
               .MapIdentityApi<IdentityUser>();
        }
        return webApp;
    }
}
