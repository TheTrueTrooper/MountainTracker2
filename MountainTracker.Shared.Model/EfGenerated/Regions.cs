using System;
using System.Collections.Generic;

namespace MountainTracker.Shared.Model;

public partial class Regions
{
    public short ProvinceOrStateId { get; set; }

    public int Id { get; set; }

    public string EnglishFullName { get; set; } = null!;

    public string RegionCode { get; set; } = null!;

    public double? LatitudeStartOrCenter { get; set; }

    public double? LongitudeStartOrCenter { get; set; }

    public byte[]? ThumbPictureBytes { get; set; }

    public string? Info { get; set; }

    public virtual ICollection<Districts> Districts { get; set; } = new List<Districts>();

    public virtual ProvincesOrStates ProvinceOrState { get; set; } = null!;

    public virtual ICollection<RegionsGeoFenceNodes> RegionsGeoFenceNodes { get; set; } = new List<RegionsGeoFenceNodes>();
}
