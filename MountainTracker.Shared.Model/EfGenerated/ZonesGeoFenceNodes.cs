using System;
using System.Collections.Generic;

namespace MountainTracker.Shared.Model;

public partial class ZonesGeoFenceNodes
{
    public int ZonesId { get; set; }

    public int Id { get; set; }

    public double? Latitude { get; set; }

    public double? Longitude { get; set; }

    public virtual Zones Zones { get; set; } = null!;
}
