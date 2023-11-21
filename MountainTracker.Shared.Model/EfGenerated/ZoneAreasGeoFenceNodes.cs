using System;
using System.Collections.Generic;

namespace MountainTracker.Shared.Model;

public partial class ZoneAreasGeoFenceNodes
{
    public int ZoneAreasId { get; set; }

    public int Id { get; set; }

    public double? Latitude { get; set; }

    public double? Longitude { get; set; }

    public virtual ZoneAreas ZoneAreas { get; set; } = null!;
}
