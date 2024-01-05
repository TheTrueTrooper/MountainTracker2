namespace MountainTracker.Shared.Model;

public partial class BusyRatings
{
    public byte Id { get; set; }

    public string? EnglishName { get; set; }

    public virtual ICollection<RockClimbingWalls> RockClimbingWallsAprSeasonalBusyRating { get; set; } = new List<RockClimbingWalls>();

    public virtual ICollection<RockClimbingWalls> RockClimbingWallsAugSeasonalBusyRating { get; set; } = new List<RockClimbingWalls>();

    public virtual ICollection<RockClimbingWalls> RockClimbingWallsDecSeasonalBusyRating { get; set; } = new List<RockClimbingWalls>();

    public virtual ICollection<RockClimbingWalls> RockClimbingWallsFebSeasonalBusyRating { get; set; } = new List<RockClimbingWalls>();

    public virtual ICollection<RockClimbingWalls> RockClimbingWallsJanSeasonalBusyRating { get; set; } = new List<RockClimbingWalls>();

    public virtual ICollection<RockClimbingWalls> RockClimbingWallsJulSeasonalBusyRating { get; set; } = new List<RockClimbingWalls>();

    public virtual ICollection<RockClimbingWalls> RockClimbingWallsJunSeasonalBusyRating { get; set; } = new List<RockClimbingWalls>();

    public virtual ICollection<RockClimbingWalls> RockClimbingWallsMarSeasonalBusyRating { get; set; } = new List<RockClimbingWalls>();

    public virtual ICollection<RockClimbingWalls> RockClimbingWallsMaySeasonalBusyRating { get; set; } = new List<RockClimbingWalls>();

    public virtual ICollection<RockClimbingWalls> RockClimbingWallsNovSeasonalBusyRating { get; set; } = new List<RockClimbingWalls>();

    public virtual ICollection<RockClimbingWalls> RockClimbingWallsOctSeasonalBusyRating { get; set; } = new List<RockClimbingWalls>();

    public virtual ICollection<RockClimbingWalls> RockClimbingWallsSepSeasonalBusyRating { get; set; } = new List<RockClimbingWalls>();
}
