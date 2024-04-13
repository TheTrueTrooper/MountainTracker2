using System;
using System.Collections.Generic;

namespace MountainTracker.Shared.Model;

public partial class UsersRockClimbingWallFavorites
{
    public int RockClimbingWallId { get; set; }

    public string UserId { get; set; } = null!;

    public string? Notes { get; set; }

    public virtual RockClimbingWalls RockClimbingWall { get; set; } = null!;

    public virtual UsersProfiles User { get; set; } = null!;
}
