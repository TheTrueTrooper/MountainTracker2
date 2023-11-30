using GraphQL.DataLoader;
using GraphQL.Types;
using MountainTracker.Server.Services;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.GraphQlApi.GraphTypes;

public class RockClimbingRouteType : ObjectGraphType<RockClimbingRoutes>
{
    public RockClimbingRouteType(IDataLoaderContextAccessor accessor, IRockClimbingWallService rockClimbingWallService, IRockClimbingTypeService rockClimbingTypeService)
    {
        Name = "RockClimbingRoute";
        Description = "Rock Climbing Route Type";

        Field(d => d.Id, nullable: false).Description("Database Id");
        Field(d => d.RouteCode, nullable: false).Description("Code for route");
        Field(d => d.EnglishFullName, nullable: false).Description("Route's english name");
        Field(d => d.ClimbingWallId, nullable: false).Description("Route's wall id");
        Field(d => d.Info, nullable: true).Description("Route's english info");
        Field(d => d.ThumbPictureBytes, nullable: true).Description("Route's thumb picture in bytes");

        Field(d => d.Rating, nullable: false).Description("Route's climbers ratings (user ratings)");

        Field(d => d.HeightInMeters, nullable: false).Description("The routes total estimated height in meters");
        Field(d => d.HeightInFeet, nullable: false).Description("The routes total estimated height in feet");

        Field(d => d.NumberOfPitchs, nullable: false).Description("The number of pitches you can find on the route");

        Field(d => d.FirstAscent, nullable: false).Description("Routes's first documented successful climber");
        Field(d => d.FirstFreeAscent, nullable: false).Description("Routes's first documented successful climber with out equipment");

        Field(d => d.SunAm, nullable: false).Description("Indicates if the route receives light in the AM");
        Field(d => d.SunPm, nullable: false).Description("Indicates if the route receives light in the PM");
        Field(d => d.FilteredSun, nullable: false).Description("Indicates if the route receives light filtered by shade");
        Field(d => d.Sunny, nullable: false).Description("Indicates if the route receives lots of sun light");
        Field(d => d.Shady, nullable: false).Description("Indicates if the route receives little sun due to shade");
        Field(d => d.DriesFast, nullable: false).Description("Indicates if the route drys fast after a rain");
        Field(d => d.DryInRain, nullable: false).Description("Indicates if the route stays dry in the rain");
        Field(d => d.Windy, nullable: false).Description("Indicates if the route gets a good amount of wind");
        Field(d => d.ClimbAnglesHaveSlabs, nullable: false).Description("Indicates if the route has at least one slab to climb");
        Field(d => d.ClimbAnglesHaveVerticals, nullable: false).Description("Indicates if the route has at least one vertical to climb");
        Field(d => d.ClimbAnglesHaveOverHangs, nullable: false).Description("Indicates if the route has at least one overhang to climb");
        Field(d => d.ClimbAnglesHaveRoofs, nullable: false).Description("Indicates if the route has at least one roof to climb");
        Field(d => d.RockFalls, nullable: false).Description("Indicates if the route is prone to rockfalls");
        Field(d => d.Seepage, nullable: false).Description("Indicates if the route has some water seepage");
        Field(d => d.Reachy, nullable: false).Description("Indicates if the route has or requires a reach technique");
        Field(d => d.Dyno, nullable: false).Description("Indicates if the route has or requires a dynamic technique");
        Field(d => d.Pumpy, nullable: false).Description("Indicates if the route has or requires a pumpy technique");
        Field(d => d.Techy, nullable: false).Description("Indicates if the route has or requires a technical technique");
        Field(d => d.Power, nullable: false).Description("Indicates if the route has or requires a power pulls technique");
        Field(d => d.Crimpy, nullable: false).Description("Indicates if the route has or requires a crimpy hold technique");
        Field(d => d.Slopey, nullable: false).Description("Indicates if the route has or requires a slopey hold technique");
        Field(d => d.PockSlashHole, nullable: false).Description("Indicates if the route has or requires a pocket hold technique");
        Field(d => d.SeatStart, nullable: false).Description("Indicates if the route has or requires a seated position to start");
        Field(d => d.Runout, nullable: false).Description("Indicates if the route has or requires a runout to start");
        Field(d => d.StickClip, nullable: false).Description("Indicates if the route has or requires a stick clip to start");

        Field(d => d.TypeId, nullable: false).Description("Wall's type id");
        Field(d => d.DifficultyId, nullable: false).Description("Wall's difficulty id");

#pragma warning disable CS1998 // The lib handels but does not suppress when method Then is called (but requires async)
        Field<RockClimbingWallType, RockClimbingWalls>("climbingWall")
            .ResolveAsync(async context =>
            {
                var loader = accessor.Context!.GetOrAddCollectionBatchLoader<int, RockClimbingWalls>("GetRockClimbingWallsByIds", rockClimbingWallService.GetRockClimbingWallsByIds);
                return loader.LoadAsync(context.Source.ClimbingWallId).Then(x => x.First());
            })
            .Description("Route's associated wall");


        Field<RockClimbingTypeType, RockClimbingTypes>("climbingType")
            .ResolveAsync(async context =>
            {
                var loader = accessor.Context!.GetOrAddCollectionBatchLoader<byte, RockClimbingTypes>("GetRockClimbingTypesByIds", rockClimbingTypeService.GetRockClimbingTypesByIds);
                return loader.LoadAsync(context.Source.TypeId).Then(x=>x.First());
            })
            .Description("Route's associated type");
#pragma warning restore CS1998 // Async method lacks 'await' operators and will run synchronously
    }
}

