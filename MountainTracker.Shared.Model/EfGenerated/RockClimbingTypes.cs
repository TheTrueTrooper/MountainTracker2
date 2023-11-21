using System;
using System.Collections.Generic;

namespace MountainTracker.Shared.Model;

public partial class RockClimbingTypes
{
    public byte Id { get; set; }

    public string EnglishFullName { get; set; } = null!;

    public string ShortHand { get; set; } = null!;

    public virtual ICollection<RockClimbingRoutes> RockClimbingRoutes { get; set; } = new List<RockClimbingRoutes>();
}
