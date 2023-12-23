using GraphQL.Types;
using MountainTracker.Server.GraphQlApi.GraphMutations;
using MountainTracker.Server.Services.LocalServices.Interfaces;

namespace MountainTracker.Server.GraphQlApi;

public class MountainTrackerMutation : ObjectGraphType
{
    public MountainTrackerMutation(IRegionService regionService)
    {
        Name = "Mutation";
        Description = "A place to collect all mutations";

        this.AddRegionMutation(regionService);
    }
}
