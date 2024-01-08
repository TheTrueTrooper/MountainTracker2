using System;
using System.Collections.Generic;

namespace MountainTracker.Shared.Model;

public partial class ApplicationUserLogins
{
    public string LoginProvider { get; set; } = null!;

    public string ProviderKey { get; set; } = null!;

    public int UserId { get; set; }

    public virtual ApplicationUsers User { get; set; } = null!;
}
