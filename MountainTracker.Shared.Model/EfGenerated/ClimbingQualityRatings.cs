namespace MountainTracker.Shared.Model;

public partial class ClimbingQualityRatings
{
    public byte Id { get; set; }

    public string? EnglishName { get; set; }

    public virtual ICollection<RockClimbingWalls> RockClimbingWallsAprSeasonalClimbingQualityRating { get; set; } = new List<RockClimbingWalls>();

    public virtual ICollection<RockClimbingWalls> RockClimbingWallsAugSeasonalClimbingQualityRating { get; set; } = new List<RockClimbingWalls>();

    public virtual ICollection<RockClimbingWalls> RockClimbingWallsDecSeasonalClimbingQualityRating { get; set; } = new List<RockClimbingWalls>();

    public virtual ICollection<RockClimbingWalls> RockClimbingWallsFebSeasonalClimbingQualityRating { get; set; } = new List<RockClimbingWalls>();

    public virtual ICollection<RockClimbingWalls> RockClimbingWallsJanSeasonalClimbingQualityRating { get; set; } = new List<RockClimbingWalls>();

    public virtual ICollection<RockClimbingWalls> RockClimbingWallsJulSeasonalClimbingQualityRating { get; set; } = new List<RockClimbingWalls>();

    public virtual ICollection<RockClimbingWalls> RockClimbingWallsJunSeasonalClimbingQualityRating { get; set; } = new List<RockClimbingWalls>();

    public virtual ICollection<RockClimbingWalls> RockClimbingWallsMarSeasonalClimbingQualityRating { get; set; } = new List<RockClimbingWalls>();

    public virtual ICollection<RockClimbingWalls> RockClimbingWallsMaySeasonalClimbingQualityRating { get; set; } = new List<RockClimbingWalls>();

    public virtual ICollection<RockClimbingWalls> RockClimbingWallsNovSeasonalClimbingQualityRating { get; set; } = new List<RockClimbingWalls>();

    public virtual ICollection<RockClimbingWalls> RockClimbingWallsOctSeasonalClimbingQualityRating { get; set; } = new List<RockClimbingWalls>();

    public virtual ICollection<RockClimbingWalls> RockClimbingWallsSepSeasonalClimbingQualityRating { get; set; } = new List<RockClimbingWalls>();
}
