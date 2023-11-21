using System;
using System.Collections.Generic;

namespace MountainTracker.Shared.Model;

public partial class RegionsGeoFenceNodes
{
    public int RegionsId { get; set; }

    public int Id { get; set; }

    public double? Latitude { get; set; }

    public double? Longitude { get; set; }

    public virtual Regions Regions { get; set; } = null!;
}
