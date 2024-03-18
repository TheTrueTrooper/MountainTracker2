using GraphQL.DataLoader;
using GraphQL.Types;
using MountainTracker.Server.Services.LocalServices.Interfaces;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.GraphQlApi.GraphTypes;

public class RockClimbingTypeType : ObjectGraphType<RockClimbingTypes>, IDisposable
{
    private List<IServiceScope> scopes = new List<IServiceScope>(1);

    public RockClimbingTypeType(IDataLoaderContextAccessor accessor, IServiceProvider serviceProvider)
    {
        Name = "RockClimbingType";
        Description = "Rock Climbing Type Type";

        Field(d => d.Id, nullable: false).Description("Database Id");
        Field(d => d.ShortHand, nullable: false).Description("Short hand for the type");
        Field(d => d.EnglishFullName, nullable: false).Description("Types's english name");

        var rockClimbingRouteScope = CreateScope(serviceProvider);
#pragma warning disable CS1998 // Async method lacks 'await' operators and will run synchronously
        Field<ListGraphType<RockClimbingRouteType>, IEnumerable<RockClimbingRoutes>>("rockClimbingRoutes")
            .ResolveAsync(async context =>
            {
                var rockClimbingRouteService = rockClimbingRouteScope.ServiceProvider.GetService<IRockClimbingRouteService>()!;
                var loader = accessor.Context!.GetOrAddCollectionBatchLoader<byte, RockClimbingRoutes>("GetAreasByIds", rockClimbingRouteService.GetRockClimbingRoutesByTypes);
                return loader.LoadAsync(context.Source.Id);
            })
            .Description("Rock climbing types's associated routes");
#pragma warning restore CS1998 // Async method lacks 'await' operators and will run synchronously
    }

    private IServiceScope CreateScope(IServiceProvider serviceProvider)
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
