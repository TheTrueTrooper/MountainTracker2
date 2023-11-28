namespace MountainTracker.Server.Config
{
    public class GraphQlConfig
    {
        public string GraphQlApiEndpoint { get; set; }
        public string UiEndpoint { get; set; }
        public bool ShowUi { get; set; }
        public string VisualNodesEndpoint { get; set; }
        public bool ShowVisualNodes { get; set; }
    }
}
