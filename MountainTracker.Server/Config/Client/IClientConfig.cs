namespace MountainTracker.Server.Config.Client;

public interface IClientConfig
{
    public string BaseEndpoint { get; set; }
    public string GraphQlApiEndpoint { get; set; }
    public ILandingPageConfig LandingPage { get; set; }
}