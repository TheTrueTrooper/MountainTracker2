using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace MountainTracker.Server.StartupExtensions;

public static class SecuritySetup
{

    public static IServiceCollection AddIdentityAuthenticationAndAuthorization(this IServiceCollection services, ConfigurationManager configurationManager)
    {
        services.AddAuthentication().AddCookie().AddOAuth("test", op=>op.);


        return services;
    }
}
