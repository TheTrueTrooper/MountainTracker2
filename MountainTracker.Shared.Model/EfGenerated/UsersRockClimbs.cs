﻿using System;
using System.Collections.Generic;

namespace MountainTracker.Shared.Model;

public partial class UsersRockClimbs
{
    public int RockClimbingRoutesId { get; set; }

    public int UserId { get; set; }

    public int ClimbId { get; set; }

    public DateTime Time { get; set; }

    public string? Comments { get; set; }

    public virtual RockClimbingRoutes RockClimbingRoutes { get; set; } = null!;
}
