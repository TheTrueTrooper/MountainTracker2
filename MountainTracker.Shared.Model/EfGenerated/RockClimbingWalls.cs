using System;
using System.Collections.Generic;

namespace MountainTracker.Shared.Model;

public partial class RockClimbingWalls
{
    public int AreaId { get; set; }

    public int Id { get; set; }

    public string EnglishFullName { get; set; } = null!;

    public string WallCode { get; set; } = null!;

    public string Approach { get; set; } = null!;

    public double? LatitudeStartOrCenter { get; set; }

    public double? LongitudeStartOrCenter { get; set; }

    public double? LatitudeParking { get; set; }

    public double? LongitudeParking { get; set; }

    public byte[]? ThumbPictureBytes { get; set; }

    public string? Info { get; set; }

    public byte JanSeasonalClimbingQualityRatingId { get; set; }

    public byte FebSeasonalClimbingQualityRatingId { get; set; }

    public byte MarSeasonalClimbingQualityRatingId { get; set; }

    public byte AprSeasonalClimbingQualityRatingId { get; set; }

    public byte MaySeasonalClimbingQualityRatingId { get; set; }

    public byte JunSeasonalClimbingQualityRatingId { get; set; }

    public byte JulSeasonalClimbingQualityRatingId { get; set; }

    public byte AugSeasonalClimbingQualityRatingId { get; set; }

    public byte SepSeasonalClimbingQualityRatingId { get; set; }

    public byte OctSeasonalClimbingQualityRatingId { get; set; }

    public byte NovSeasonalClimbingQualityRatingId { get; set; }

    public byte DecSeasonalClimbingQualityRatingId { get; set; }

    public byte JanSeasonalBusyRatingId { get; set; }

    public byte FebSeasonalBusyRatingId { get; set; }

    public byte MarSeasonalBusyRatingId { get; set; }

    public byte AprSeasonalBusyRatingId { get; set; }

    public byte MaySeasonalBusyRatingId { get; set; }

    public byte JunSeasonalBusyRatingId { get; set; }

    public byte JulSeasonalBusyRatingId { get; set; }

    public byte AugSeasonalBusyRatingId { get; set; }

    public byte SepSeasonalBusyRatingId { get; set; }

    public byte OctSeasonalBusyRatingId { get; set; }

    public byte NovSeasonalBusyRatingId { get; set; }

    public byte DecSeasonalBusyRatingId { get; set; }

    public virtual BusyRatings AprSeasonalBusyRating { get; set; } = null!;

    public virtual ClimbingQualityRatings AprSeasonalClimbingQualityRating { get; set; } = null!;

    public virtual Areas Area { get; set; } = null!;

    public virtual BusyRatings AugSeasonalBusyRating { get; set; } = null!;

    public virtual ClimbingQualityRatings AugSeasonalClimbingQualityRating { get; set; } = null!;

    public virtual ICollection<BoulderingRoutes> BoulderingRoutes { get; set; } = new List<BoulderingRoutes>();

    public virtual BusyRatings DecSeasonalBusyRating { get; set; } = null!;

    public virtual ClimbingQualityRatings DecSeasonalClimbingQualityRating { get; set; } = null!;

    public virtual BusyRatings FebSeasonalBusyRating { get; set; } = null!;

    public virtual ClimbingQualityRatings FebSeasonalClimbingQualityRating { get; set; } = null!;

    public virtual BusyRatings JanSeasonalBusyRating { get; set; } = null!;

    public virtual ClimbingQualityRatings JanSeasonalClimbingQualityRating { get; set; } = null!;

    public virtual BusyRatings JulSeasonalBusyRating { get; set; } = null!;

    public virtual ClimbingQualityRatings JulSeasonalClimbingQualityRating { get; set; } = null!;

    public virtual BusyRatings JunSeasonalBusyRating { get; set; } = null!;

    public virtual ClimbingQualityRatings JunSeasonalClimbingQualityRating { get; set; } = null!;

    public virtual BusyRatings MarSeasonalBusyRating { get; set; } = null!;

    public virtual ClimbingQualityRatings MarSeasonalClimbingQualityRating { get; set; } = null!;

    public virtual BusyRatings MaySeasonalBusyRating { get; set; } = null!;

    public virtual ClimbingQualityRatings MaySeasonalClimbingQualityRating { get; set; } = null!;

    public virtual BusyRatings NovSeasonalBusyRating { get; set; } = null!;

    public virtual ClimbingQualityRatings NovSeasonalClimbingQualityRating { get; set; } = null!;

    public virtual BusyRatings OctSeasonalBusyRating { get; set; } = null!;

    public virtual ClimbingQualityRatings OctSeasonalClimbingQualityRating { get; set; } = null!;

    public virtual ICollection<RockClimbingRoutes> RockClimbingRoutes { get; set; } = new List<RockClimbingRoutes>();

    public virtual ICollection<RockClimbingWallsGeoFenceNodes> RockClimbingWallsGeoFenceNodes { get; set; } = new List<RockClimbingWallsGeoFenceNodes>();

    public virtual BusyRatings SepSeasonalBusyRating { get; set; } = null!;

    public virtual ClimbingQualityRatings SepSeasonalClimbingQualityRating { get; set; } = null!;

    public virtual ICollection<UsersRockClimbingWallFavorites> UsersRockClimbingWallFavorites { get; set; } = new List<UsersRockClimbingWallFavorites>();

    public virtual ICollection<Mountains> Mountain { get; set; } = new List<Mountains>();
}
