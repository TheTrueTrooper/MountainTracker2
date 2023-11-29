using GraphQL.DataLoader;
using GraphQL.Types;
using MountainTracker.Server.Services;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.GraphQlApi.GraphTypes;

public class RockClimbingWallType : ObjectGraphType<RockClimbingWalls>
{
    public RockClimbingWallType(IDataLoaderContextAccessor accessor, IRockClimbingRouteService rockClimbingRouteService)
    {
        Name = "RockClimbingWall";
        Description = "Rock Climbing Wall Type";

        Field(d => d.Id, nullable: false).Description("Database Id");
        Field(d => d.WallCode, nullable: false).Description("Code for wall");
        Field(d => d.EnglishFullName, nullable: false).Description("Wall's english name");
        Field(d => d.AreaId, nullable: false).Description("Wall's area id");
        Field(d => d.Approach, nullable: false).Description("Wall's approach info");
        Field(d => d.Info, nullable: true).Description("Wall's english info");
        Field(d => d.ThumbPictureBytes, nullable: true).Description("Wall's thumb picture in bytes");

        Field(d => d.LatitudeStartOrCenter, nullable: true).Description("Wall's latitude location by center or start");
        Field(d => d.LongitudeStartOrCenter, nullable: true).Description("Wall's latitude location by center or start");
        Field(d => d.LatitudeParking, nullable: true).Description("Wall's parking latitude location");
        Field(d => d.LongitudeParking, nullable: true).Description("Wall's parking longitude location");

        Field(d => d.JanSeasonalClimbingQualityRatingId, nullable: false).Description("Wall's seasonal climbing quality rating in January");
        Field(d => d.FebSeasonalClimbingQualityRatingId, nullable: false).Description("Wall's seasonal climbing quality rating in Febuary");
        Field(d => d.MarSeasonalClimbingQualityRatingId, nullable: false).Description("Wall's seasonal climbing quality rating in March");
        Field(d => d.AprSeasonalClimbingQualityRatingId, nullable: false).Description("Wall's seasonal climbing quality rating in April");
        Field(d => d.MaySeasonalClimbingQualityRatingId, nullable: false).Description("Wall's seasonal climbing quality rating in May");
        Field(d => d.JunSeasonalClimbingQualityRatingId, nullable: false).Description("Wall's seasonal climbing quality rating in June");
        Field(d => d.JulSeasonalClimbingQualityRatingId, nullable: false).Description("Wall's seasonal climbing quality rating in July");
        Field(d => d.AugSeasonalClimbingQualityRatingId, nullable: false).Description("Wall's seasonal climbing quality rating in August");
        Field(d => d.SepSeasonalClimbingQualityRatingId, nullable: false).Description("Wall's seasonal climbing quality rating in September");
        Field(d => d.OctSeasonalClimbingQualityRatingId, nullable: false).Description("Wall's seasonal climbing quality rating in October");
        Field(d => d.NovSeasonalClimbingQualityRatingId, nullable: false).Description("Wall's seasonal climbing quality rating in November");
        Field(d => d.DecSeasonalClimbingQualityRatingId, nullable: false).Description("Wall's seasonal climbing quality rating in December");

        Field(d => d.JanSeasonalBusyRatingId, nullable: false).Description("Wall's busy rating in January");
        Field(d => d.FebSeasonalBusyRatingId, nullable: false).Description("Wall's busy climbing rating in Febuary");
        Field(d => d.MarSeasonalBusyRatingId, nullable: false).Description("Wall's busy climbing rating in March");
        Field(d => d.AprSeasonalBusyRatingId, nullable: false).Description("Wall's busy climbing rating in April");
        Field(d => d.MaySeasonalBusyRatingId, nullable: false).Description("Wall's busy climbing rating in May");
        Field(d => d.JunSeasonalBusyRatingId, nullable: false).Description("Wall's busy climbing rating in June");
        Field(d => d.JulSeasonalBusyRatingId, nullable: false).Description("Wall's busy climbing rating in July");
        Field(d => d.AugSeasonalBusyRatingId, nullable: false).Description("Wall's busy climbing rating in August");
        Field(d => d.SepSeasonalBusyRatingId, nullable: false).Description("Wall's busy climbing rating in September");
        Field(d => d.OctSeasonalBusyRatingId, nullable: false).Description("Wall's busy climbing rating in October");
        Field(d => d.NovSeasonalBusyRatingId, nullable: false).Description("Wall's busy climbing rating in November");
        Field(d => d.DecSeasonalBusyRatingId, nullable: false).Description("Wall's busy climbing rating in December");


        Field<ListGraphType<RockClimbingRouteType>, IEnumerable<RockClimbingRoutes>>("routes")
            .ResolveAsync(context =>
            {
                var loader = accessor.Context!.GetOrAddCollectionBatchLoader<int, RockClimbingRoutes>("GetRockClimbingRoutesByRockClimbingWalls", rockClimbingRouteService.GetRockClimbingRoutesByRockClimbingWalls);
                return loader.LoadAsync(context.Source.Id);
            })
            .Description("Wall's associated routes");
    }
}
