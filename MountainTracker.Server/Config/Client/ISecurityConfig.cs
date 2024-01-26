namespace MountainTracker.Server.Config.Client;

public interface ISecurityConfig
{
    public string LoginPath { get; set; }
    public string AccessDeniedPath { get; set; }
    public bool SlidingExpiration { get; set; }
}
