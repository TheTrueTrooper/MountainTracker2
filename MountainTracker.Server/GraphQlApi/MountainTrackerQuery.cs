using GraphQL.Types;
using MountainTracker.Server.GraphQlApi.QlQuery;

namespace MountainTracker.Server.GraphQlApi;

public class MountainTrackerQuery : ObjectGraphType
{
    public MountainTrackerQuery(CountryQuery countryQuery, ProvinceOrStateQuery provinceOrStateQuery, DistrictQuery districtQuery, ZoneQuery zoneQuery, 
        AreaQuery areaQuery, RockClimbingWallQuery rockClimbingWallQuery)
    {
        Name = "Query";
        Description = "A place to collect all queries";

        Field<CountryQuery>("countryQuery")
            .Resolve(context => countryQuery)
            .Description("The country related queries");
        Field<ProvinceOrStateQuery>("provinceOrStateQuery")
            .Resolve(context => provinceOrStateQuery)
            .Description("The province or state related queries");
        Field<RegionQuery>("regionQuery")
            .Resolve(context => provinceOrStateQuery)
            .Description("The province or state related queries");
        Field<DistrictQuery>("districtQuery")
            .Resolve(context => districtQuery)
            .Description("The province or state related queries");
        Field<ZoneQuery>("zoneQuery")
            .Resolve(context => zoneQuery)
            .Description("The province or state related queries");
        Field<AreaQuery>("areaQuery")
            .Resolve(context => areaQuery)
            .Description("The province or state related queries");
        Field<RockClimbingWallQuery>("rockClimbingWallQuery")
            .Resolve(context => rockClimbingWallQuery)
            .Description("The province or state related queries");
    }
}
