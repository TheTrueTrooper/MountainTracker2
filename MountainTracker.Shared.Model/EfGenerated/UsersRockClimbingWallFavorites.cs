using System;
using System.Collections.Generic;

namespace MountainTracker.Shared.Model;

public partial class UsersRockClimbingWallFavorites
{
    public int RockClimbingWallId { get; set; }

    public int UserId { get; set; }

    public string? Notes { get; set; }

    public virtual RockClimbingWalls RockClimbingWall { get; set; } = null!;
}
