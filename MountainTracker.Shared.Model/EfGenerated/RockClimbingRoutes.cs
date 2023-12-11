using System;
using System.Collections.Generic;

namespace MountainTracker.Shared.Model;

public partial class RockClimbingRoutes
{
    public int ClimbingWallId { get; set; }

    public byte TypeId { get; set; }

    public byte DifficultyId { get; set; }

    public int Id { get; set; }

    public string EnglishFullName { get; set; } = null!;

    public string RouteCode { get; set; } = null!;

    public byte Rating { get; set; }

    public double HeightInMeters { get; set; }

    public double HeightInFeet { get; set; }

    public byte NumberOfPitchs { get; set; }

    public string FirstAscent { get; set; } = null!;

    public string FirstFreeAscent { get; set; } = null!;

    public bool SunAm { get; set; }

    public bool SunPm { get; set; }

    public bool FilteredSun { get; set; }

    public bool Sunny { get; set; }

    public bool Shady { get; set; }

    public bool DriesFast { get; set; }

    public bool DryInRain { get; set; }

    public bool Windy { get; set; }

    public bool ClimbAnglesHaveSlabs { get; set; }

    public bool ClimbAnglesHaveVerticals { get; set; }

    public bool ClimbAnglesHaveOverHangs { get; set; }

    public bool ClimbAnglesHaveRoofs { get; set; }

    public bool RockFalls { get; set; }

    public bool Seepage { get; set; }

    public bool StickClip { get; set; }

    public bool Runout { get; set; }

    public bool Reachy { get; set; }

    public bool Dyno { get; set; }

    public bool Pumpy { get; set; }

    public bool Techy { get; set; }

    public bool Power { get; set; }

    public bool PockSlashHole { get; set; }

    public bool Crimpy { get; set; }

    public bool Slopey { get; set; }

    public bool SeatStart { get; set; }

    public string? Info { get; set; }

    public byte[]? ThumbPictureBytes { get; set; }

    public virtual RockClimbingWalls ClimbingWall { get; set; } = null!;

    public virtual RockClimbingDifficulties Difficulty { get; set; } = null!;

    public virtual ICollection<RockClimbingRoutesToGearLinks> RockClimbingRoutesToGearLinks { get; set; } = new List<RockClimbingRoutesToGearLinks>();

    public virtual RockClimbingTypes Type { get; set; } = null!;

    public virtual ICollection<UsersRockClimbComments> UsersRockClimbComments { get; set; } = new List<UsersRockClimbComments>();

    public virtual ICollection<UsersRockClimbRouteFavorites> UsersRockClimbRouteFavorites { get; set; } = new List<UsersRockClimbRouteFavorites>();

    public virtual ICollection<UsersRockClimbs> UsersRockClimbs { get; set; } = new List<UsersRockClimbs>();
}
