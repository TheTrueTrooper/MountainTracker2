namespace MountainTracker.Shared.Model;

public partial class BoulderingRoutes
{
    public int ClimbingWallId { get; set; }

    public int Id { get; set; }

    public virtual RockClimbingWalls ClimbingWall { get; set; } = null!;
}
