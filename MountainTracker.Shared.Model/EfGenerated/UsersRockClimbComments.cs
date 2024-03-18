using System;
using System.Collections.Generic;

namespace MountainTracker.Shared.Model;

public partial class UsersRockClimbComments
{
    public int RockClimbingRoutesId { get; set; }

    public int UserId { get; set; }

    public int CommentId { get; set; }

    public DateTime Time { get; set; }

    public string Comments { get; set; } = null!;

    public virtual RockClimbingRoutes RockClimbingRoutes { get; set; } = null!;
}
