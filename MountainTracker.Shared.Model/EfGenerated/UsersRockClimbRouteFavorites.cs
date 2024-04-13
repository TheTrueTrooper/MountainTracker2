using System;
using System.Collections.Generic;

namespace MountainTracker.Shared.Model;

public partial class UsersRockClimbRouteFavorites
{
    public int RockClimbingRoutesId { get; set; }

    public string UserId { get; set; } = null!;

    public string? Notes { get; set; }

    public virtual RockClimbingRoutes RockClimbingRoutes { get; set; } = null!;

    public virtual UsersProfiles User { get; set; } = null!;
}
