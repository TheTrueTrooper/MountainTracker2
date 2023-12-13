using GraphQL.Types;
using MountainTracker.Server.GraphQlApi.GraphQueries;

namespace MountainTracker.Server.GraphQlApi;

public class MountainTrackerQuery : ObjectGraphType
{
    public MountainTrackerQuery(CountryQuery countryQuery, ProvinceOrStateQuery provinceOrStateQuery, RegionQuery regionQuery, 
        DistrictQuery districtQuery, ZoneQuery zoneQuery, AreaQuery areaQuery, RockClimbingWallQuery rockClimbingWallQuery, 
        RockClimbingRouteQuery rockClimbingRouteQuery, RockClimbingTypeQuery rockClimbingTypeQuery, BusyRatingQuery busyRatingQuery,
        ClimbingQualityRatingQuery climbingQualityRatingQuery, RockClimbingDifficultyQuery rockClimbingDifficultyQuery)
    {
        Name = "Query";
        Description = "A place to collect all queries";

        Field<RockClimbingDifficultyQuery, RockClimbingDifficultyQuery>("rockClimbingDifficultyQuery")
            .Resolve(context => rockClimbingDifficultyQuery)
            .Description("The rock climbing difficulty related queries");
        Field<RockClimbingTypeQuery, RockClimbingTypeQuery>("rockClimbingTypeQuery")
            .Resolve(context => rockClimbingTypeQuery)
            .Description("The rock rock climbing type related queries");
        Field<ClimbingQualityRatingQuery, ClimbingQualityRatingQuery>("climbingQualityRatingQuery")
            .Resolve(context => climbingQualityRatingQuery)
            .Description("The climbing quality rating related queries");
        Field<BusyRatingQuery, BusyRatingQuery>("busyRatingQuery")
            .Resolve(context => busyRatingQuery)
            .Description("The rock busy rating related queries");
        Field<CountryQuery, CountryQuery>("countryQuery")
            .Resolve(context => countryQuery)
            .Description("The country related queries");
        Field<ProvinceOrStateQuery, ProvinceOrStateQuery>("provinceOrStateQuery")
            .Resolve(context => provinceOrStateQuery)
            .Description("The province or state related queries");
        Field<RegionQuery, RegionQuery>("regionQuery")
            .Resolve(context => regionQuery)
            .Description("The region related queries");
        Field<DistrictQuery, DistrictQuery>("districtQuery")
            .Resolve(context => districtQuery)
            .Description("The district related queries");
        Field<ZoneQuery, ZoneQuery>("zoneQuery")
            .Resolve(context => zoneQuery)
            .Description("The zone related queries");
        Field<AreaQuery, AreaQuery>("areaQuery")
            .Resolve(context => areaQuery)
            .Description("The area related queries");
        Field<RockClimbingWallQuery, RockClimbingWallQuery>("rockClimbingWallQuery")
            .Resolve(context => rockClimbingWallQuery)
            .Description("The rock climbing wall related queries");
        Field<RockClimbingRouteQuery, RockClimbingRouteQuery>("rockClimbingRouteQuery")
            .Resolve(context => rockClimbingRouteQuery)
            .Description("The rock climbing route related queries");
    }
}
