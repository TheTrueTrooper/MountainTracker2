using System;
using System.Collections.Generic;

namespace MountainTracker.Shared.Model;

public partial class RockClimbingDifficulties
{
    public byte Id { get; set; }

    public string EnglishCode { get; set; } = null!;
}
