using GraphQL.Types;
using MountainTracker.Server.GraphQlApi.GraphMutations;

namespace MountainTracker.Server.GraphQlApi;

public class MountainTrackerMutation : ObjectGraphType
{
    public MountainTrackerMutation(RegionMutation regionMutation)
    {
        Name = "Mutation";
        Description = "A place to collect all mutations";

        Field<RegionMutation>("regionMutation")
                .Resolve(context => regionMutation)
                .Description("The region related mutations");

    }
}
