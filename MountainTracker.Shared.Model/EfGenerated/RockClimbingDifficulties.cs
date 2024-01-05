namespace MountainTracker.Shared.Model;

public partial class RockClimbingDifficulties
{
    public byte Id { get; set; }

    public string EnglishCode { get; set; } = null!;

    public virtual ICollection<RockClimbingRoutes> RockClimbingRoutes { get; set; } = new List<RockClimbingRoutes>();
}
