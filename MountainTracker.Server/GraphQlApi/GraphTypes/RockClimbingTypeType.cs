using GraphQL.DataLoader;
using GraphQL.Types;
using MountainTracker.Server.Services.LocalServices.Interfaces;
using MountainTracker.Shared.Model;
using System.Collections;

namespace MountainTracker.Server.GraphQlApi.GraphTypes;

public class RockClimbingTypeType : ObjectGraphType<RockClimbingTypes>
{
    public RockClimbingTypeType(IDataLoaderContextAccessor accessor, IServiceProvider serviceProvider)
    {
        Field(d => d.Id, nullable: false).Description("Database Id");
        Field(d => d.ShortHand, nullable: false).Description("Code for country");
        Field(d => d.EnglishFullName, nullable: false).Description("Country's english name");

        var rockClimbingWallsScope = serviceProvider.CreateScope();
        Field<ListGraphType<RockClimbingRouteType>, IEnumerable<RockClimbingRoutes>>("rockClimbingWalls")
            .ResolveAsync(async context =>
            {
                var rockClimbingRouteService = rockClimbingWallsScope.ServiceProvider.GetService<IRockClimbingRouteService>()!;
                var loader = accessor.Context!.GetOrAddCollectionBatchLoader<byte, RockClimbingRoutes>("GetAreasByIds", rockClimbingRouteService.GetRockClimbingRoutesByTypes);
                return loader.LoadAsync(context.Source.Id);
            })
            .Description("Rock climbing types's associated walls");
    }
}
