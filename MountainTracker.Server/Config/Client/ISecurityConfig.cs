namespace MountainTracker.Server.Config.Client;

public class SecurityConfig : IClientConfig
{
    public string LoginPath { get; set; } = "";
    public string AccessDeniedPath { get; set; } = "";
    public string SlidingExpiration { get; set; } = "";
}
