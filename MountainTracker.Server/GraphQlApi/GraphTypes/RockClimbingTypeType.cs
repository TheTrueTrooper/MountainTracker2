using GraphQL.DataLoader;
using GraphQL.Types;
using MountainTracker.Server.Services.LocalServices.Interfaces;
using MountainTracker.Shared.Model;
using System.Collections;
using static System.Formats.Asn1.AsnWriter;

namespace MountainTracker.Server.GraphQlApi.GraphTypes;

public class RockClimbingTypeType : ObjectGraphType<RockClimbingTypes>, IDisposable
{
    private List<IServiceScope> scopes = new List<IServiceScope>(1);

    public RockClimbingTypeType(IDataLoaderContextAccessor accessor, IServiceProvider serviceProvider)
    {
        Name = "RockClimbingType";
        Description = "Rock Climbing Type Type";

        Field(d => d.Id, nullable: false).Description("Database Id");
        Field(d => d.ShortHand, nullable: false).Description("Code for country");
        Field(d => d.EnglishFullName, nullable: false).Description("Country's english name");

        var rockClimbingWallsScope = CreateScope(serviceProvider);
        Field<ListGraphType<RockClimbingRouteType>, IEnumerable<RockClimbingRoutes>>("rockClimbingWalls")
            .ResolveAsync(async context =>
            {
                var rockClimbingRouteService = rockClimbingWallsScope.ServiceProvider.GetService<IRockClimbingRouteService>()!;
                var loader = accessor.Context!.GetOrAddCollectionBatchLoader<byte, RockClimbingRoutes>("GetAreasByIds", rockClimbingRouteService.GetRockClimbingRoutesByTypes);
                return loader.LoadAsync(context.Source.Id);
            })
            .Description("Rock climbing types's associated walls");
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
