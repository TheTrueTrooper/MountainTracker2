using System;
using System.Collections.Generic;

namespace MountainTracker.Shared.Model;

public partial class Areas
{
    public int ZoneId { get; set; }

    public int Id { get; set; }

    public string EnglishFullName { get; set; } = null!;

    public string AreaCode { get; set; } = null!;

    public double? LatitudeStartOrCenter { get; set; }

    public double? LongitudeStartOrCenter { get; set; }

    public byte[]? ThumbPictureBytes { get; set; }

    public string? Info { get; set; }

    public virtual ICollection<AreasGeoFenceNodes> AreasGeoFenceNodes { get; set; } = new List<AreasGeoFenceNodes>();

    public virtual ICollection<RockClimbingWalls> RockClimbingWalls { get; set; } = new List<RockClimbingWalls>();

    public virtual ICollection<UsersAreaFavorites> UsersAreaFavorites { get; set; } = new List<UsersAreaFavorites>();

    public virtual Zones Zone { get; set; } = null!;
}
