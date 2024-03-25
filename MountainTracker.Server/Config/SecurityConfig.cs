using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Identity;

namespace MountainTracker.Server.Config;

public class SecurityConfig : ISecurityConfig
{
    public CookieAuthenticationOptions CookieAuthenticationOptions { get; set; } = new CookieAuthenticationOptions();
    public PasswordOptions PasswordOptions { get; set; } = new PasswordOptions();
    public LockoutOptions LockoutOptions { get; set; } = new LockoutOptions();
    public UserOptions UserOptions { get; set; } = new UserOptions();
    public SignInOptions SignInOptions { get; set; } = new SignInOptions();
}
