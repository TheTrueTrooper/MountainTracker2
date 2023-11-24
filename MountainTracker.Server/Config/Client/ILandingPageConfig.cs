namespace MountainTracker.Server.Config.Client;

public interface ILandingPageConfig
{
    public int AutoRotateDelay { get; set; }
    public bool AutoRotate { get; set; }
    public bool AutoLoad { get; set; }
}