using System;
using System.Collections.Generic;

namespace MountainTracker.Shared.Model;

public partial class UsersAreaFavorites
{
    public int AreaId { get; set; }

    public int UserId { get; set; }

    public string? Notes { get; set; }

    public virtual Areas Area { get; set; } = null!;
}
