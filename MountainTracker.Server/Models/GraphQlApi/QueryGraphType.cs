using GraphQL.Types;
using Microsoft.EntityFrameworkCore;
using MountainTracker.Server.Contexts.MountainTrackerContext;
using MountainTracker.Server.Helpers;
using MountainTracker.Server.Models.GraphQlApi.Query;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.Models.GraphQlApi;

public class QueryGraphType : ObjectGraphType<object>
{
    public QueryGraphType(MountainTrackerDatabase1Context mountainTrackerDataBase) : base()
    {
        this.FieldAsync<ListGraphType<CountryQueryGraphType>>(
            GraphHelpers.SetQlName<CountryQueryGraphType>(),
            arguments: new QueryArguments(
                new QueryArgument<NonNullGraphType<StringGraphType>> { Name = "id", Description = "id of the human" }
            ),
            resolve: async context => await mountainTrackerDataBase.Countries.ToListAsync()
        );
    }
}