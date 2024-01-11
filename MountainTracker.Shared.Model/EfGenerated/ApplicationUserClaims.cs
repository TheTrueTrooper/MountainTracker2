using System;
using System.Collections.Generic;

namespace MountainTracker.Shared.Model;

public partial class ApplicationUserClaims
{
    public int Id { get; set; }

    public int UserId { get; set; }

    public string? ClaimType { get; set; }

    public string? ClaimValue { get; set; }

    public virtual ApplicationUsers User { get; set; } = null!;
}
