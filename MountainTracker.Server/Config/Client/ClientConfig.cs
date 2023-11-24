namespace MountainTracker.Server.Config.Client;

public class ClientConfig: IClientConfig
{
    public string BaseEndpoint { get; set; } = "";
    public string GraphQlApiEndpoint { get; set; }
    public ILandingPageConfig LandingPage { get; set; } = new LandingPageConfig();
}
