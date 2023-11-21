using System;
using System.Collections.Generic;

namespace MountainTracker.Shared.Model;

public partial class UsersAreaFavorites
{
    public int AreaId { get; set; }

    public int UserId { get; set; }

    public string? Notes { get; set; }

    public virtual ZoneAreas Area { get; set; } = null!;

    public virtual Users User { get; set; } = null!;
}
