using System;
using System.Collections.Generic;

namespace MountainTracker.Shared.Model;

public partial class UserFriends
{
    public string UserFromId { get; set; } = null!;

    public string UserToId { get; set; } = null!;

    public DateTime RequestCreationDate { get; set; }

    public DateTime? RequestAcceptDate { get; set; }

    public bool Accepted { get; set; }

    public virtual UsersProfiles UserFrom { get; set; } = null!;

    public virtual UsersProfiles UserTo { get; set; } = null!;
}
