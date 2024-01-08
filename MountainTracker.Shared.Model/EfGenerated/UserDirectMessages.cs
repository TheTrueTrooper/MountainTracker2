using System;
using System.Collections.Generic;

namespace MountainTracker.Shared.Model;

public partial class UserDirectMessages
{
    public int UserFromId { get; set; }

    public int UserToId { get; set; }

    public int DirectMessageId { get; set; }

    public DateTime Time { get; set; }

    public bool Seen { get; set; }

    public string Message { get; set; } = null!;

    public virtual ApplicationUsers UserFrom { get; set; } = null!;

    public virtual ApplicationUsers UserTo { get; set; } = null!;
}
