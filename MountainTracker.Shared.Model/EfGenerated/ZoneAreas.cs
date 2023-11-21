using System;
using System.Collections.Generic;

namespace MountainTracker.Shared.Model;

public partial class ZoneAreas
{
    public int DistrictZoneId { get; set; }

    public int Id { get; set; }

    public string EnglishFullName { get; set; } = null!;

    public string AreaCode { get; set; } = null!;

    public double? LatitudeStartOrCenter { get; set; }

    public double? LongitudeStartOrCenter { get; set; }

    public byte[]? ThumbPictureBytes { get; set; }

    public string? Info { get; set; }

    public virtual DistrictZones DistrictZone { get; set; } = null!;

    public virtual ICollection<RockClimbingWalls> RockClimbingWalls { get; set; } = new List<RockClimbingWalls>();

    public virtual ICollection<UsersAreaFavorites> UsersAreaFavorites { get; set; } = new List<UsersAreaFavorites>();

    public virtual ICollection<ZoneAreasGeoFenceNodes> ZoneAreasGeoFenceNodes { get; set; } = new List<ZoneAreasGeoFenceNodes>();
}
