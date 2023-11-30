using GraphQL.DataLoader;
using GraphQL.Types;
using MountainTracker.Server.Services.LocalServices.Interfaces;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.GraphQlApi.GraphTypes;

public class RockClimbingTypeType : ObjectGraphType<RockClimbingTypes>
{
    public RockClimbingTypeType(IDataLoaderContextAccessor accessor, IRockClimbingRouteService rockClimbingRouteService)
    {
        Field(d => d.Id, nullable: false).Description("Database Id");
        Field(d => d.ShortHand, nullable: false).Description("Code for country");
        Field(d => d.EnglishFullName, nullable: false).Description("Country's english name");

#pragma warning disable CS1998 // The lib handels but does not suppress when method Then is called (but requires async)
        Field<RockClimbingRouteType, RockClimbingRoutes>("rockClimbingWalls")
            .ResolveAsync(async context =>
            {
                var loader = accessor.Context!.GetOrAddCollectionBatchLoader<byte, RockClimbingRoutes>("GetAreasByIds", rockClimbingRouteService.GetRockClimbingRoutesByTypes);
                return loader.LoadAsync(context.Source.Id).Then(x => x.First());
            })
            .Description("Rock climbing types's associated walls");
#pragma warning restore CS1998 // Async method lacks 'await' operators and will run synchronously
    }
}
