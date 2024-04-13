using System;
using System.Collections.Generic;

namespace MountainTracker.Shared.Model;

public partial class UsersAreaFavorites
{
    public int AreaId { get; set; }

    public string UserId { get; set; } = null!;

    public string? Notes { get; set; }

    public virtual Areas Area { get; set; } = null!;

    public virtual UsersProfiles User { get; set; } = null!;
}
