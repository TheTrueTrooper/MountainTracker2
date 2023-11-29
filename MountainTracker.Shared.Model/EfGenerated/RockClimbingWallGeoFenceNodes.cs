using System;
using System.Collections.Generic;

namespace MountainTracker.Shared.Model;

public partial class RockClimbingWallGeoFenceNodes
{
    public int ClimbingWallId { get; set; }

    public int Id { get; set; }

    public double Latitude { get; set; }

    public double Longitude { get; set; }

    public virtual RockClimbingWalls ClimbingWall { get; set; } = null!;
}
