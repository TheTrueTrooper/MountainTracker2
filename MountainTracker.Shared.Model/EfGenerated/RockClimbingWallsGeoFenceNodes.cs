using System;
using System.Collections.Generic;

namespace MountainTracker.Shared.Model;

public partial class RockClimbingWallsGeoFenceNodes
{
    public int ClimbingWallsId { get; set; }

    public int Id { get; set; }

    public double? Latitude { get; set; }

    public double? Longitude { get; set; }

    public virtual RockClimbingWalls ClimbingWalls { get; set; } = null!;
}
