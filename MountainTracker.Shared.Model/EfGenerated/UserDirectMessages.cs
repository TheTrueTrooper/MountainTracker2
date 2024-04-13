using System;
using System.Collections.Generic;

namespace MountainTracker.Shared.Model;

public partial class UserDirectMessages
{
    public string UserFromId { get; set; } = null!;

    public string UserToId { get; set; } = null!;

    public int DirectMessageId { get; set; }

    public DateTime Time { get; set; }

    public bool Seen { get; set; }

    public string Message { get; set; } = null!;

    public virtual UsersProfiles UserFrom { get; set; } = null!;

    public virtual UsersProfiles UserTo { get; set; } = null!;
}
