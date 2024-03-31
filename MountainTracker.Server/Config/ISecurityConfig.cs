using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Identity;

namespace MountainTracker.Server.Config;

public interface ISecurityConfig
{
    public CookieAuthenticationOptions CookieAuthenticationOptions { get; set; }
    public PasswordOptions PasswordOptions { get; set; }
    public LockoutOptions LockoutOptions { get; set; }
    public UserOptions UserOptions { get; set; }
    public SignInOptions SignInOptions { get; set; }
}
