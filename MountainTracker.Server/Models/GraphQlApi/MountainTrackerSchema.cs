using GraphQL.Instrumentation;
using GraphQL.Types;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory;

namespace MountainTracker.Server.Models.GraphQlApi;

public class MountainTrackerSchema : Schema
{
    public MountainTrackerSchema(IServiceProvider provider)
    : base(provider)
    {

        Query = new AutoRegisteringObjectGraphType<Query>();
        //Mutation = new AutoRegisteringObjectGraphType<Mutation>();
        //Subscription = new AutoRegisteringObjectGraphType<Subscription>();
    }
}
