using GraphQL.Types;

namespace MountainTracker.Server.GraphQlApi;

public class MountainTrackerSchema : Schema
{
    public MountainTrackerSchema(IServiceProvider provider)
    : base(provider)
    {

        Query = provider.GetRequiredService<MoutainTrackerQuery>();
        Mutation = provider.GetRequiredService<MoutainTrackerMutation>();
        //Subscription = new AutoRegisteringObjectGraphType<Subscription>();
    }
}
