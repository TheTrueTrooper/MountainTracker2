using System;
using System.Collections.Generic;

namespace MountainTracker.Shared.Model;

public partial class RegionGeoFenceNodes
{
    public int RegionId { get; set; }

    public int Id { get; set; }

    public double Latitude { get; set; }

    public double Longitude { get; set; }

    public virtual Regions Region { get; set; } = null!;
}
