namespace MountainTracker.Shared.Model;

public partial class UsersRockClimbRouteFavorites
{
    public int RockClimbingRoutesId { get; set; }

    public int UserId { get; set; }

    public string? Notes { get; set; }

    public virtual RockClimbingRoutes RockClimbingRoutes { get; set; } = null!;

    public virtual Users User { get; set; } = null!;
}
