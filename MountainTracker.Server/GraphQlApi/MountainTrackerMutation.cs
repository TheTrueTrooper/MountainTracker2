using GraphQL.Types;
using MountainTracker.Server.GraphQlApi.GraphMutations;
using MountainTracker.Server.Services.LocalServices.Interfaces;

namespace MountainTracker.Server.GraphQlApi;

public class MountainTrackerMutation : ObjectGraphType
{
    private List<IServiceScope> scopes = new List<IServiceScope>(1);

    public MountainTrackerMutation(IServiceProvider serviceProvider)
    {
        Name = "Mutation";
        Description = "A place to collect all mutations";

        this.AddRegionMutation(serviceProvider);
    }

    internal IServiceScope CreateScope(IServiceProvider serviceProvider)
    {
        var scope = serviceProvider.CreateScope();
        scopes.Add(scope);
        return scope;
    }

    public void Dispose()
    {
        foreach (var scope in scopes)
        {
            scope.Dispose();
        }
    }
}
