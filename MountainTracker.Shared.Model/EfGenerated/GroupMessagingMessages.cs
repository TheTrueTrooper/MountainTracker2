﻿using System;
using System.Collections.Generic;

namespace MountainTracker.Shared.Model;

public partial class GroupMessagingMessages
{
    public string UserId { get; set; } = null!;

    public int GroupMessagingId { get; set; }

    public int Id { get; set; }

    public string Message { get; set; } = null!;

    public DateTime Time { get; set; }

    public virtual GroupMessagingGroups GroupMessaging { get; set; } = null!;

    public virtual UsersProfiles User { get; set; } = null!;
}
