using System.Security.Claims;

namespace MountainTracker.Server.Contexts.GraphApiContext;

public class GraphQlUserContext : Dictionary<string, object>
{
    public ClaimsPrincipal User { get; set; }
}
