using System;
using System.Collections.Generic;

namespace MountainTracker.Shared.Model;

public partial class Mountains
{
    public int Id { get; set; }

    public string EnglishFullName { get; set; } = null!;

    public string? RouteInfo { get; set; }

    public virtual ICollection<RockClimbingWalls> ClimbingWalls { get; set; } = new List<RockClimbingWalls>();
}
