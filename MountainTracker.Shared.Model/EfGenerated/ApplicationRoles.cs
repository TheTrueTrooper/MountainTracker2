using System;
using System.Collections.Generic;

namespace MountainTracker.Shared.Model;

public partial class ApplicationRoles
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public virtual ICollection<ApplicationUsers> User { get; set; } = new List<ApplicationUsers>();
}
