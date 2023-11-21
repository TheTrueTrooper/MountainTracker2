using System;
using System.Collections.Generic;

namespace MountainTracker.Shared.Model;

public partial class UserAccessTokens
{
    public int UserId { get; set; }

    public int Id { get; set; }

    public string? UserToken { get; set; }

    public DateTime? UserTokenIssueDate { get; set; }

    public DateTime? UserTokenValidTill { get; set; }

    public int? DaysValid { get; set; }

    public virtual Users User { get; set; } = null!;
}
