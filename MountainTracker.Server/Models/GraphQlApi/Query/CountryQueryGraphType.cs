using GraphQL;
using GraphQL.Types;
using Microsoft.EntityFrameworkCore;
using MountainTracker.Server.Contexts.MountainTrackerContext;
using MountainTracker.Server.Helpers;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.Models.GraphQlApi.Query;

public class CountryQueryGraphType : CountryGraphType
{
    public CountryQueryGraphType() : base()
    {
        this.Name = GraphHelpers.SetQlName<CountryQueryGraphType>();
    }
}
