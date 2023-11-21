using System;
using System.Collections.Generic;

namespace MountainTracker.Shared.Model;

public partial class RockClimbingRoutesToGearLinks
{
    public int RockClimbingRoutesId { get; set; }

    public byte GearSizeId { get; set; }

    public short NumberRequired { get; set; }

    public virtual GearSizes GearSize { get; set; } = null!;

    public virtual RockClimbingRoutes RockClimbingRoutes { get; set; } = null!;
}
