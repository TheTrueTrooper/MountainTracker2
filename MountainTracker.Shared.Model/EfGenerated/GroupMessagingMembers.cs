using System;
using System.Collections.Generic;

namespace MountainTracker.Shared.Model;

public partial class GroupMessagingMembers
{
    public int UserId { get; set; }

    public int GroupMessagingId { get; set; }

    public DateTime TimeInvited { get; set; }

    public DateTime? TimeJoined { get; set; }

    public bool AcceptedInvite { get; set; }

    public DateTime TimeLastSeen { get; set; }

    public virtual GroupMessagingGroups GroupMessaging { get; set; } = null!;

    public virtual ApplicationUsers User { get; set; } = null!;
}
