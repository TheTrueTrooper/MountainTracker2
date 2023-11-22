using GraphQL.Instrumentation;
using GraphQL.Types;

namespace MountainTracker.Server.Models.GraphQlApi;

public class MountainTrackerSchema : Schema
{
    public MountainTrackerSchema(IServiceProvider provider)
        : base(provider)
    {

        Query = (QueryGraphType)provider.GetService(typeof(QueryGraphType)) ?? throw new InvalidOperationException();
        //Mutation = (StarWarsMutation)provider.GetService(typeof(StarWarsMutation)) ?? throw new InvalidOperationException();

        FieldMiddleware.Use(new InstrumentFieldsMiddleware());
    }
}
