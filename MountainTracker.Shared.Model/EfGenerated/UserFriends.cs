using System;
using System.Collections.Generic;

namespace MountainTracker.Shared.Model;

public partial class UserFriends
{
    public int UserFromId { get; set; }

    public int UserToId { get; set; }

    public DateTime RequestCreationDate { get; set; }

    public DateTime? RequestAcceptDate { get; set; }

    public bool Accepted { get; set; }

    public virtual ApplicationUsers UserFrom { get; set; } = null!;

    public virtual ApplicationUsers UserTo { get; set; } = null!;
}
