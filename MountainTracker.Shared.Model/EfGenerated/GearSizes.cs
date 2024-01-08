using System;
using System.Collections.Generic;

namespace MountainTracker.Shared.Model;

public partial class GearSizes
{
    public byte GearId { get; set; }

    public byte Id { get; set; }

    public string EnglishFullName { get; set; } = null!;

    public virtual Gear Gear { get; set; } = null!;

    public virtual ICollection<RockClimbingRoutesToGearLinks> RockClimbingRoutesToGearLinks { get; set; } = new List<RockClimbingRoutesToGearLinks>();
}
