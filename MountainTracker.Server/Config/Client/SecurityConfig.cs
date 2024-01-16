namespace MountainTracker.Server.Config.Client;

public class SecurityConfig : ISecurityConfig
{
    public string LoginPath { get; set; } = "";
    public string AccessDeniedPath { get; set; } = "";
    public bool SlidingExpiration { get; set; } = true;
}
