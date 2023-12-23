using GraphQL.Types;
using MountainTracker.Server.GraphQlApi.GraphQueries;
using MountainTracker.Server.Services.LocalServices.Interfaces;

namespace MountainTracker.Server.GraphQlApi;

public class MountainTrackerQuery : ObjectGraphType
{
    public MountainTrackerQuery(ICountryService countryService, IProvinceOrStateService provinceOrStateService, 
        IRegionService regionService, IDistrictService districtService, IZoneService zoneService, IAreaService areaService, 
        IRockClimbingWallService rockClimbingWallService, IRockClimbingRouteService rockClimbingRouteService, 
        IRockClimbingTypeService rockClimbingTypeService, IBusyRatingService busyRatingService,
        IClimbingQualityRatingService climbingQualityRatingService, IRockClimbingDifficultyService rockClimbingDifficultyService)
    {
        Name = "Query";
        Description = "A place to collect all queries";

        this.AddRockClimbingDifficultyQuery(rockClimbingDifficultyService);
        this.AddRockClimbingTypeQuery(rockClimbingTypeService);
        this.AddClimbingQualityRatingQuery(climbingQualityRatingService);
        this.AddBusyRatingQuery(busyRatingService);
        this.AddCountryQuerys(countryService);
        this.AddProvinceOrStateQuery(provinceOrStateService);
        this.AddRegionQuery(regionService);
        this.AddDistrictQuery(districtService);
        this.AddZoneQuery(zoneService);
        this.AddAreaQuery(areaService);
        this.AddRockClimbingWallQuery(rockClimbingWallService);
        this.AddRockClimbingRouteQuery(rockClimbingRouteService);
    }
}
