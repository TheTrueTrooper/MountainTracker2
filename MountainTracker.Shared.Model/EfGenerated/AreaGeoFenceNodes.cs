using System;
using System.Collections.Generic;

namespace MountainTracker.Shared.Model;

public partial class AreaGeoFenceNodes
{
    public int AreaId { get; set; }

    public int Id { get; set; }

    public double Latitude { get; set; }

    public double Longitude { get; set; }

    public virtual Areas Area { get; set; } = null!;
}
