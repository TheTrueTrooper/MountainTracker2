using System;
using System.Collections.Generic;

namespace MountainTracker.Shared.Model;

public partial class Districts
{
    public int RegionId { get; set; }

    public int Id { get; set; }

    public string EnglishFullName { get; set; } = null!;

    public string DistrictCode { get; set; } = null!;

    public double? LatitudeStartOrCenter { get; set; }

    public double? LongitudeStartOrCenter { get; set; }

    public byte[]? ThumbPictureBytes { get; set; }

    public string? Info { get; set; }

    public virtual ICollection<DistrictsGeoFenceNodes> DistrictsGeoFenceNodes { get; set; } = new List<DistrictsGeoFenceNodes>();

    public virtual Regions Region { get; set; } = null!;

    public virtual ICollection<Zones> Zones { get; set; } = new List<Zones>();
}
