using System;
using System.Collections.Generic;

namespace MountainTracker.Shared.Model;

public partial class DistrictZones
{
    public int DistrictId { get; set; }

    public int Id { get; set; }

    public string EnglishFullName { get; set; } = null!;

    public string ZoneCode { get; set; } = null!;

    public double? LatitudeStartOrCenter { get; set; }

    public double? LongitudeStartOrCenter { get; set; }

    public byte[]? ThumbPictureBytes { get; set; }

    public string? Info { get; set; }

    public virtual Districts District { get; set; } = null!;

    public virtual ICollection<ZoneAreas> ZoneAreas { get; set; } = new List<ZoneAreas>();
}
