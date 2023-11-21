using System;
using System.Collections.Generic;

namespace MountainTracker.Shared.Model;

public partial class DistrictZonesGeoFenceNodes
{
    public int DistrictZonesId { get; set; }

    public int Id { get; set; }

    public double? Latitude { get; set; }

    public double? Longitude { get; set; }

    public virtual Districts DistrictZones { get; set; } = null!;
}
