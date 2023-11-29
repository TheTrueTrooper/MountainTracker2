using System;
using System.Collections.Generic;

namespace MountainTracker.Shared.Model;

public partial class AreasGeoFenceNodes
{
    public int AreasId { get; set; }

    public int Id { get; set; }

    public double? Latitude { get; set; }

    public double? Longitude { get; set; }

    public virtual Areas Areas { get; set; } = null!;
}
