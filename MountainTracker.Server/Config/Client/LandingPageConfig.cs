namespace MountainTracker.Server.Config.Client;

public class LandingPageConfig: ILandingPageConfig
{
    public int AutoRotateDelay { get; set; } = 2000;
    public bool AutoRotate { get; set; } = true;
    public bool AutoLoad { get; set; } = true;
}
