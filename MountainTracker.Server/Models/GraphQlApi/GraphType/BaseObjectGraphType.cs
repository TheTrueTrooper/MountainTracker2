using GraphQL.Types;
using MountainTracker.Server.Helpers;

namespace MountainTracker.Server.Models.GraphQlApi.GraphType;

public class BaseObjectGraphType<T>: ObjectGraphType<T>
{
    public BaseObjectGraphType()
    {
        Name = GraphHelpers.SetQlName<T>();
    }
}
