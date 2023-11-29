using System;
using System.Collections.Generic;

namespace MountainTracker.Shared.Model;

public partial class Zones
{
    public int DistrictId { get; set; }

    public int Id { get; set; }

    public string EnglishFullName { get; set; } = null!;

    public string ZoneCode { get; set; } = null!;

    public double? LatitudeStartOrCenter { get; set; }

    public double? LongitudeStartOrCenter { get; set; }

    public byte[]? ThumbPictureBytes { get; set; }

    public string? Info { get; set; }

    public virtual ICollection<Areas> Areas { get; set; } = new List<Areas>();

    public virtual Districts District { get; set; } = null!;

    public virtual ICollection<ZonesGeoFenceNodes> ZonesGeoFenceNodes { get; set; } = new List<ZonesGeoFenceNodes>();
}
