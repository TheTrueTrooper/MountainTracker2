using GraphQL.Types;

namespace MountainTracker.Server.GraphQlApi;

public class MountainTrackerSchema : Schema
{
    public MountainTrackerSchema(IServiceProvider provider)
    : base(provider)
    {
        Query = provider.GetRequiredService<MountainTrackerQuery>();
        Mutation = provider.GetRequiredService<MountainTrackerMutation>();
        //Subscription = provider.GetRequiredService<MoutainTrackerSubscription>();
    }
}
