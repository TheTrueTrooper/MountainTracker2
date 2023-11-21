using System;
using System.Collections.Generic;

namespace MountainTracker.Shared.Model;

public partial class DistrictsGeoFenceNodes
{
    public int DistrictsId { get; set; }

    public int Id { get; set; }

    public double? Latitude { get; set; }

    public double? Longitude { get; set; }

    public virtual Districts Districts { get; set; } = null!;
}
