using Microsoft.EntityFrameworkCore;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.Contexts.MountainTrackerContext;

public partial class MountainTrackerDatabase1Context : DbContext
{
    public MountainTrackerDatabase1Context(DbContextOptions<MountainTrackerDatabase1Context> options)
        : base(options)
    {
    }

    public virtual DbSet<ApplicationRoles> ApplicationRoles { get; set; }

    public virtual DbSet<ApplicationUserClaims> ApplicationUserClaims { get; set; }

    public virtual DbSet<ApplicationUserLogins> ApplicationUserLogins { get; set; }

    public virtual DbSet<ApplicationUsers> ApplicationUsers { get; set; }

    public virtual DbSet<AreaGeoFenceNodes> AreaGeoFenceNodes { get; set; }

    public virtual DbSet<Areas> Areas { get; set; }

    public virtual DbSet<BoulderingRoutes> BoulderingRoutes { get; set; }

    public virtual DbSet<BusyRatings> BusyRatings { get; set; }

    public virtual DbSet<ClimbingQualityRatings> ClimbingQualityRatings { get; set; }

    public virtual DbSet<ClimbingTypes> ClimbingTypes { get; set; }

    public virtual DbSet<Countries> Countries { get; set; }

    public virtual DbSet<DistrictGeoFenceNodes> DistrictGeoFenceNodes { get; set; }

    public virtual DbSet<Districts> Districts { get; set; }

    public virtual DbSet<Gear> Gear { get; set; }

    public virtual DbSet<GearSizes> GearSizes { get; set; }

    public virtual DbSet<GroupMessagingGroups> GroupMessagingGroups { get; set; }

    public virtual DbSet<GroupMessagingMembers> GroupMessagingMembers { get; set; }

    public virtual DbSet<GroupMessagingMessages> GroupMessagingMessages { get; set; }

    public virtual DbSet<IceClimbingRoutes> IceClimbingRoutes { get; set; }

    public virtual DbSet<Mountains> Mountains { get; set; }

    public virtual DbSet<ProvincesOrStates> ProvincesOrStates { get; set; }

    public virtual DbSet<RegionGeoFenceNodes> RegionGeoFenceNodes { get; set; }

    public virtual DbSet<Regions> Regions { get; set; }

    public virtual DbSet<RockClimbingDifficulties> RockClimbingDifficulties { get; set; }

    public virtual DbSet<RockClimbingRoutes> RockClimbingRoutes { get; set; }

    public virtual DbSet<RockClimbingRoutesToGearLinks> RockClimbingRoutesToGearLinks { get; set; }

    public virtual DbSet<RockClimbingTypes> RockClimbingTypes { get; set; }

    public virtual DbSet<RockClimbingWallGeoFenceNodes> RockClimbingWallGeoFenceNodes { get; set; }

    public virtual DbSet<RockClimbingWalls> RockClimbingWalls { get; set; }

    public virtual DbSet<UserDirectMessages> UserDirectMessages { get; set; }

    public virtual DbSet<UserFriends> UserFriends { get; set; }

    public virtual DbSet<UsersAreaFavorites> UsersAreaFavorites { get; set; }

    public virtual DbSet<UsersRockClimbComments> UsersRockClimbComments { get; set; }

    public virtual DbSet<UsersRockClimbRouteFavorites> UsersRockClimbRouteFavorites { get; set; }

    public virtual DbSet<UsersRockClimbingWallFavorites> UsersRockClimbingWallFavorites { get; set; }

    public virtual DbSet<UsersRockClimbs> UsersRockClimbs { get; set; }

    public virtual DbSet<ZoneGeoFenceNodes> ZoneGeoFenceNodes { get; set; }

    public virtual DbSet<Zones> Zones { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<ApplicationRoles>(entity =>
        {
            entity.HasIndex(e => e.Name, "RoleNameIndex").IsUnique();

            entity.Property(e => e.Name).HasMaxLength(256);
        });

        modelBuilder.Entity<ApplicationUserClaims>(entity =>
        {
            entity.HasIndex(e => e.UserId, "IX_UserId");

            entity.HasOne(d => d.User).WithMany(p => p.ApplicationUserClaims).HasForeignKey(d => d.UserId);
        });

        modelBuilder.Entity<ApplicationUserLogins>(entity =>
        {
            entity.HasKey(e => new { e.LoginProvider, e.ProviderKey, e.UserId }).HasName("PK_dbo.ApplicationUserLogins");

            entity.HasIndex(e => e.UserId, "IX_UserId");

            entity.Property(e => e.LoginProvider).HasMaxLength(128);
            entity.Property(e => e.ProviderKey).HasMaxLength(128);

            entity.HasOne(d => d.User).WithMany(p => p.ApplicationUserLogins)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("FK_dbo.ApplicationUserLogins_dbo.ApplicationUsers_Id");
        });

        modelBuilder.Entity<ApplicationUsers>(entity =>
        {
            entity.HasIndex(e => e.Email, "UQ_ApplicationUsers_Email").IsUnique();

            entity.HasIndex(e => e.UserName, "UQ_ApplicationUsers_UserName").IsUnique();

            entity.Property(e => e.Bio).HasMaxLength(2500);
            entity.Property(e => e.DateCreated).HasColumnType("datetime");
            entity.Property(e => e.DateUpdated).HasColumnType("datetime");
            entity.Property(e => e.Email).HasMaxLength(256);
            entity.Property(e => e.FirstName).HasMaxLength(256);
            entity.Property(e => e.LastLoginDate).HasColumnType("datetime");
            entity.Property(e => e.LastName).HasMaxLength(256);
            entity.Property(e => e.LockoutEndDateUtc).HasColumnType("datetime");
            entity.Property(e => e.MetricOverImperial)
                .IsRequired()
                .HasDefaultValueSql("((1))");
            entity.Property(e => e.PasswordChangeDate).HasColumnType("datetime");
            entity.Property(e => e.PasswordHash).HasMaxLength(512);
            entity.Property(e => e.PhoneNumber).HasMaxLength(128);
            entity.Property(e => e.ProfileUrl)
                .HasMaxLength(100)
                .HasColumnName("ProfileURL");
            entity.Property(e => e.SecurityStamp).HasMaxLength(512);
            entity.Property(e => e.UserName).HasMaxLength(256);

            entity.HasOne(d => d.Country).WithMany(p => p.ApplicationUsers)
                .HasForeignKey(d => d.CountryId)
                .HasConstraintName("FK_ApplicationUsers_Countries");

            entity.HasOne(d => d.Province).WithMany(p => p.ApplicationUsers)
                .HasForeignKey(d => d.ProvinceId)
                .HasConstraintName("FK_ApplicationUsers_ProvincesOrStates");

            entity.HasMany(d => d.Role).WithMany(p => p.User)
                .UsingEntity<Dictionary<string, object>>(
                    "ApplicationUserRoles",
                    r => r.HasOne<ApplicationRoles>().WithMany()
                        .HasForeignKey("RoleId")
                        .HasConstraintName("FK_dbo.ApplicationUserRoles_dbo.ApplicationRoles_RoleId"),
                    l => l.HasOne<ApplicationUsers>().WithMany()
                        .HasForeignKey("UserId")
                        .HasConstraintName("FK_dbo.ApplicationUserRoles_dbo.ApplicationUsers_UserId"),
                    j =>
                    {
                        j.HasKey("UserId", "RoleId").HasName("PK_dbo.ApplicationUserRoles");
                        j.HasIndex(new[] { "RoleId" }, "IX_RoleId");
                        j.HasIndex(new[] { "UserId" }, "IX_UserId");
                    });
        });

        modelBuilder.Entity<AreaGeoFenceNodes>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__tmp_ms_x__3214EC27DDCE7825");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.AreaId).HasColumnName("AreaID");

            entity.HasOne(d => d.Area).WithMany(p => p.AreaGeoFenceNodes)
                .HasForeignKey(d => d.AreaId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_AreaGeoFenceNodes_Areas");
        });

        modelBuilder.Entity<Areas>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Areas__3214EC27E5BB9B61");

            entity.HasIndex(e => new { e.ZoneId, e.AreaCode }, "UQ_Areas_Code").IsUnique();

            entity.HasIndex(e => new { e.ZoneId, e.EnglishFullName }, "UQ_Areas_Name").IsUnique();

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.AreaCode)
                .HasMaxLength(5)
                .IsUnicode(false)
                .IsFixedLength();
            entity.Property(e => e.EnglishFullName)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Info)
                .HasMaxLength(5000)
                .IsUnicode(false);
            entity.Property(e => e.ZoneId).HasColumnName("ZoneID");

            entity.HasOne(d => d.Zone).WithMany(p => p.Areas)
                .HasForeignKey(d => d.ZoneId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Areas_Zones");
        });

        modelBuilder.Entity<BoulderingRoutes>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Boulderi__3214EC27A1742EE1");

            entity.Property(e => e.Id)
                .ValueGeneratedNever()
                .HasColumnName("ID");
            entity.Property(e => e.ClimbingWallId).HasColumnName("ClimbingWallID");

            entity.HasOne(d => d.ClimbingWall).WithMany(p => p.BoulderingRoutes)
                .HasForeignKey(d => d.ClimbingWallId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_BoulderingRoutes_ClimbingWalls");
        });

        modelBuilder.Entity<BusyRatings>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__BusyRati__3214EC2731592CD9");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.EnglishName)
                .HasMaxLength(18)
                .IsUnicode(false);
        });

        modelBuilder.Entity<ClimbingQualityRatings>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Climbing__3214EC27D9E89DDA");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.EnglishName)
                .HasMaxLength(18)
                .IsUnicode(false);
        });

        modelBuilder.Entity<ClimbingTypes>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Climbing__3214EC2755D4E87B");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.EnglishFullName)
                .HasMaxLength(100)
                .IsUnicode(false);

            entity.HasMany(d => d.Gear).WithMany(p => p.ClimbingType)
                .UsingEntity<Dictionary<string, object>>(
                    "GearToGearTypeLinks",
                    r => r.HasOne<Gear>().WithMany()
                        .HasForeignKey("GearId")
                        .OnDelete(DeleteBehavior.ClientSetNull)
                        .HasConstraintName("FK_GearToGearTypeLinks_Gear"),
                    l => l.HasOne<ClimbingTypes>().WithMany()
                        .HasForeignKey("ClimbingTypeId")
                        .OnDelete(DeleteBehavior.ClientSetNull)
                        .HasConstraintName("FK_GearToGearTypeLinks_ClimbingTypes"),
                    j =>
                    {
                        j.HasKey("ClimbingTypeId", "GearId").HasName("PK__GearToGe__9FD373F8BCE5121A");
                        j.IndexerProperty<byte>("ClimbingTypeId").HasColumnName("ClimbingTypeID");
                        j.IndexerProperty<byte>("GearId").HasColumnName("GearID");
                    });
        });

        modelBuilder.Entity<Countries>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Countrie__3214EC2778A79FC4");

            entity.HasIndex(e => e.CountryCode, "UQ_Countries_Code").IsUnique();

            entity.HasIndex(e => e.EnglishFullName, "UQ_Countries_Name").IsUnique();

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.CountryCode)
                .HasMaxLength(2)
                .IsUnicode(false)
                .IsFixedLength();
            entity.Property(e => e.EnglishFullName)
                .HasMaxLength(44)
                .IsUnicode(false);
        });

        modelBuilder.Entity<DistrictGeoFenceNodes>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__District__3214EC27B24DF21A");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.DistrictId).HasColumnName("DistrictID");

            entity.HasOne(d => d.District).WithMany(p => p.DistrictGeoFenceNodes)
                .HasForeignKey(d => d.DistrictId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_DistrictGeoFenceNodes_District");
        });

        modelBuilder.Entity<Districts>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__District__3214EC274A3A1CB4");

            entity.HasIndex(e => new { e.RegionId, e.DistrictCode }, "UQ_Districts_Code").IsUnique();

            entity.HasIndex(e => new { e.RegionId, e.EnglishFullName }, "UQ_Districts_Name").IsUnique();

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.DistrictCode)
                .HasMaxLength(5)
                .IsUnicode(false)
                .IsFixedLength();
            entity.Property(e => e.EnglishFullName)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Info)
                .HasMaxLength(5000)
                .IsUnicode(false);
            entity.Property(e => e.RegionId).HasColumnName("RegionID");

            entity.HasOne(d => d.Region).WithMany(p => p.Districts)
                .HasForeignKey(d => d.RegionId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Districts_Regions");
        });

        modelBuilder.Entity<Gear>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Gear__3214EC2775AF251D");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.EnglishFullName)
                .HasMaxLength(100)
                .IsUnicode(false);
        });

        modelBuilder.Entity<GearSizes>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__GearSize__3214EC2702250B0C");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.EnglishFullName)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.GearId).HasColumnName("GearID");

            entity.HasOne(d => d.Gear).WithMany(p => p.GearSizes)
                .HasForeignKey(d => d.GearId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_GearSizes_RockClimbingGearID");
        });

        modelBuilder.Entity<GroupMessagingGroups>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__GroupMes__3214EC27DAB45892");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.GroupsName).HasMaxLength(50);
            entity.Property(e => e.TimeCreated)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
        });

        modelBuilder.Entity<GroupMessagingMembers>(entity =>
        {
            entity.HasKey(e => new { e.UserId, e.GroupMessagingId }).HasName("PK__GroupMes__3491EC20C2C70508");

            entity.ToTable(tb => tb.HasTrigger("LeavingMessagingGroupTrigger"));

            entity.Property(e => e.UserId).HasColumnName("UserID");
            entity.Property(e => e.GroupMessagingId).HasColumnName("GroupMessagingID");
            entity.Property(e => e.TimeInvited)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.TimeJoined)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.TimeLastSeen)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");

            entity.HasOne(d => d.GroupMessaging).WithMany(p => p.GroupMessagingMembers)
                .HasForeignKey(d => d.GroupMessagingId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_GroupMessagingMembers_GroupMessaging");

            entity.HasOne(d => d.User).WithMany(p => p.GroupMessagingMembers)
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_GroupMessagingMembers_Users");
        });

        modelBuilder.Entity<GroupMessagingMessages>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__GroupMes__3214EC277423D4E3");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.GroupMessagingId).HasColumnName("GroupMessagingID");
            entity.Property(e => e.Message).HasMaxLength(1000);
            entity.Property(e => e.Time)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.UserId).HasColumnName("UserID");

            entity.HasOne(d => d.GroupMessaging).WithMany(p => p.GroupMessagingMessages)
                .HasForeignKey(d => d.GroupMessagingId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_GroupMessagingMessages_GroupMessagingGroups");

            entity.HasOne(d => d.User).WithMany(p => p.GroupMessagingMessages)
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_GroupMessagingMessages_Users");
        });

        modelBuilder.Entity<IceClimbingRoutes>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__IceClimb__3214EC27D52ECE00");

            entity.Property(e => e.Id)
                .ValueGeneratedNever()
                .HasColumnName("ID");
            entity.Property(e => e.ClimbingWallId).HasColumnName("ClimbingWallID");
        });

        modelBuilder.Entity<Mountains>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Mountain__3214EC27975947C7");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.EnglishFullName)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.RouteInfo)
                .HasMaxLength(1000)
                .IsUnicode(false);

            entity.HasMany(d => d.ClimbingWalls).WithMany(p => p.Mountain)
                .UsingEntity<Dictionary<string, object>>(
                    "MountainToRockClimbingWallLinks",
                    r => r.HasOne<RockClimbingWalls>().WithMany()
                        .HasForeignKey("ClimbingWallsId")
                        .OnDelete(DeleteBehavior.ClientSetNull)
                        .HasConstraintName("FK_MountainToRockClimbingWallLinks_ClimbingWalls"),
                    l => l.HasOne<Mountains>().WithMany()
                        .HasForeignKey("MountainId")
                        .OnDelete(DeleteBehavior.ClientSetNull)
                        .HasConstraintName("FK_MountainToRockClimbingWallLinks_Mountains"),
                    j =>
                    {
                        j.HasKey("MountainId", "ClimbingWallsId").HasName("PK__Mountain__CC24E42986BE9C60");
                        j.IndexerProperty<int>("MountainId").HasColumnName("MountainID");
                        j.IndexerProperty<int>("ClimbingWallsId").HasColumnName("ClimbingWallsID");
                    });
        });

        modelBuilder.Entity<ProvincesOrStates>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Province__3214EC27DA9A26BF");

            entity.HasIndex(e => new { e.CountryId, e.RegionCode }, "UQ_ProvincesOrStates_Code").IsUnique();

            entity.HasIndex(e => new { e.CountryId, e.EnglishFullName }, "UQ_ProvincesOrStates_Name").IsUnique();

            entity.Property(e => e.Id)
                .ValueGeneratedNever()
                .HasColumnName("ID");
            entity.Property(e => e.CountryId).HasColumnName("CountryID");
            entity.Property(e => e.EnglishFullName)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.RegionCode)
                .HasMaxLength(2)
                .IsUnicode(false)
                .IsFixedLength();

            entity.HasOne(d => d.Country).WithMany(p => p.ProvincesOrStates)
                .HasForeignKey(d => d.CountryId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_ProvincesOrStates_Countries");
        });

        modelBuilder.Entity<RegionGeoFenceNodes>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__RegionGe__3214EC27C1E7ABCF");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.RegionId).HasColumnName("RegionID");

            entity.HasOne(d => d.Region).WithMany(p => p.RegionGeoFenceNodes)
                .HasForeignKey(d => d.RegionId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_RegionGeoFenceNodes_Regions");
        });

        modelBuilder.Entity<Regions>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Regions__3214EC279286D96F");

            entity.HasIndex(e => new { e.ProvinceOrStateId, e.RegionCode }, "UQ_Region_Code").IsUnique();

            entity.HasIndex(e => new { e.ProvinceOrStateId, e.EnglishFullName }, "UQ_Region_Name").IsUnique();

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.EnglishFullName)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Info)
                .HasMaxLength(5000)
                .IsUnicode(false);
            entity.Property(e => e.ProvinceOrStateId).HasColumnName("ProvinceOrStateID");
            entity.Property(e => e.RegionCode)
                .HasMaxLength(5)
                .IsUnicode(false)
                .IsFixedLength();

            entity.HasOne(d => d.ProvinceOrState).WithMany(p => p.Regions)
                .HasForeignKey(d => d.ProvinceOrStateId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Regions_ProvincesOrStates");
        });

        modelBuilder.Entity<RockClimbingDifficulties>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__RockClim__3214EC277CEB81D5");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.EnglishCode)
                .HasMaxLength(8)
                .IsUnicode(false);
        });

        modelBuilder.Entity<RockClimbingRoutes>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__RockClim__3214EC276BCC0FD0");

            entity.HasIndex(e => new { e.ClimbingWallId, e.RouteCode }, "UQ_RockClimbingRoutes_Code").IsUnique();

            entity.HasIndex(e => new { e.ClimbingWallId, e.EnglishFullName }, "UQ_RockClimbingRoutes_Name").IsUnique();

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.ClimbingWallId).HasColumnName("ClimbingWallID");
            entity.Property(e => e.DifficultyId).HasColumnName("DifficultyID");
            entity.Property(e => e.EnglishFullName)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.FirstAscent)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasDefaultValueSql("('Unknown')");
            entity.Property(e => e.FirstFreeAscent)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasDefaultValueSql("('Unknown')");
            entity.Property(e => e.HeightInFeet).HasComputedColumnSql("((3.28084)*[HeightInMeters])", false);
            entity.Property(e => e.Info)
                .HasMaxLength(5000)
                .IsUnicode(false);
            entity.Property(e => e.RouteCode)
                .HasMaxLength(5)
                .IsUnicode(false)
                .IsFixedLength();
            entity.Property(e => e.SunAm).HasColumnName("SunAM");
            entity.Property(e => e.SunPm).HasColumnName("SunPM");
            entity.Property(e => e.TypeId).HasColumnName("TypeID");

            entity.HasOne(d => d.ClimbingWall).WithMany(p => p.RockClimbingRoutes)
                .HasForeignKey(d => d.ClimbingWallId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_RockClimbingRoutes_RockClimbingWalls");

            entity.HasOne(d => d.Difficulty).WithMany(p => p.RockClimbingRoutes)
                .HasForeignKey(d => d.DifficultyId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_RockClimbingRoutes_RockClimbingDifficulties");

            entity.HasOne(d => d.Type).WithMany(p => p.RockClimbingRoutes)
                .HasForeignKey(d => d.TypeId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_RockClimbingRoutes_RockWallClimbingTypes");
        });

        modelBuilder.Entity<RockClimbingRoutesToGearLinks>(entity =>
        {
            entity.HasKey(e => new { e.RockClimbingRoutesId, e.GearSizeId }).HasName("PK__RockClim__C3324E3A162DD9B1");

            entity.Property(e => e.RockClimbingRoutesId).HasColumnName("RockClimbingRoutesID");
            entity.Property(e => e.GearSizeId).HasColumnName("GearSizeID");
            entity.Property(e => e.NumberRequired).HasDefaultValueSql("((1))");

            entity.HasOne(d => d.GearSize).WithMany(p => p.RockClimbingRoutesToGearLinks)
                .HasForeignKey(d => d.GearSizeId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_RockClimbingRoutesGearLinkingTable_GearSizeID");

            entity.HasOne(d => d.RockClimbingRoutes).WithMany(p => p.RockClimbingRoutesToGearLinks)
                .HasForeignKey(d => d.RockClimbingRoutesId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_RockClimbingRoutesGearLinkingTable_RockClimbingRoutes");
        });

        modelBuilder.Entity<RockClimbingTypes>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__RockClim__3214EC270C61B79F");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.EnglishFullName)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.ShortHand)
                .HasMaxLength(6)
                .IsUnicode(false);
        });

        modelBuilder.Entity<RockClimbingWallGeoFenceNodes>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__RockClim__3214EC27FF46A267");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.ClimbingWallId).HasColumnName("ClimbingWallID");

            entity.HasOne(d => d.ClimbingWall).WithMany(p => p.RockClimbingWallGeoFenceNodes)
                .HasForeignKey(d => d.ClimbingWallId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_RockClimbingWallGeoFenceNodes_RockClimbingWalls");
        });

        modelBuilder.Entity<RockClimbingWalls>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__RockClim__3214EC27DA4C6A92");

            entity.HasIndex(e => new { e.AreaId, e.WallCode }, "UQ_RockClimbingWalls_Code").IsUnique();

            entity.HasIndex(e => new { e.AreaId, e.EnglishFullName }, "UQ_RockClimbingWalls_Name").IsUnique();

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.Approach)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasDefaultValueSql("('Unknown')");
            entity.Property(e => e.AprSeasonalBusyRatingId).HasColumnName("AprSeasonalBusyRatingID");
            entity.Property(e => e.AprSeasonalClimbingQualityRatingId).HasColumnName("AprSeasonalClimbingQualityRatingID");
            entity.Property(e => e.AreaId).HasColumnName("AreaID");
            entity.Property(e => e.AugSeasonalBusyRatingId).HasColumnName("AugSeasonalBusyRatingID");
            entity.Property(e => e.AugSeasonalClimbingQualityRatingId).HasColumnName("AugSeasonalClimbingQualityRatingID");
            entity.Property(e => e.DecSeasonalBusyRatingId).HasColumnName("DecSeasonalBusyRatingID");
            entity.Property(e => e.DecSeasonalClimbingQualityRatingId).HasColumnName("DecSeasonalClimbingQualityRatingID");
            entity.Property(e => e.EnglishFullName)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.FebSeasonalBusyRatingId).HasColumnName("FebSeasonalBusyRatingID");
            entity.Property(e => e.FebSeasonalClimbingQualityRatingId).HasColumnName("FebSeasonalClimbingQualityRatingID");
            entity.Property(e => e.Info)
                .HasMaxLength(5000)
                .IsUnicode(false);
            entity.Property(e => e.JanSeasonalBusyRatingId).HasColumnName("JanSeasonalBusyRatingID");
            entity.Property(e => e.JanSeasonalClimbingQualityRatingId).HasColumnName("JanSeasonalClimbingQualityRatingID");
            entity.Property(e => e.JulSeasonalBusyRatingId).HasColumnName("JulSeasonalBusyRatingID");
            entity.Property(e => e.JulSeasonalClimbingQualityRatingId).HasColumnName("JulSeasonalClimbingQualityRatingID");
            entity.Property(e => e.JunSeasonalBusyRatingId).HasColumnName("JunSeasonalBusyRatingID");
            entity.Property(e => e.JunSeasonalClimbingQualityRatingId).HasColumnName("JunSeasonalClimbingQualityRatingID");
            entity.Property(e => e.MarSeasonalBusyRatingId).HasColumnName("MarSeasonalBusyRatingID");
            entity.Property(e => e.MarSeasonalClimbingQualityRatingId).HasColumnName("MarSeasonalClimbingQualityRatingID");
            entity.Property(e => e.MaySeasonalBusyRatingId).HasColumnName("MaySeasonalBusyRatingID");
            entity.Property(e => e.MaySeasonalClimbingQualityRatingId).HasColumnName("MaySeasonalClimbingQualityRatingID");
            entity.Property(e => e.NovSeasonalBusyRatingId).HasColumnName("NovSeasonalBusyRatingID");
            entity.Property(e => e.NovSeasonalClimbingQualityRatingId).HasColumnName("NovSeasonalClimbingQualityRatingID");
            entity.Property(e => e.OctSeasonalBusyRatingId).HasColumnName("OctSeasonalBusyRatingID");
            entity.Property(e => e.OctSeasonalClimbingQualityRatingId).HasColumnName("OctSeasonalClimbingQualityRatingID");
            entity.Property(e => e.SepSeasonalBusyRatingId).HasColumnName("SepSeasonalBusyRatingID");
            entity.Property(e => e.SepSeasonalClimbingQualityRatingId).HasColumnName("SepSeasonalClimbingQualityRatingID");
            entity.Property(e => e.WallCode)
                .HasMaxLength(5)
                .IsUnicode(false)
                .IsFixedLength();

            entity.HasOne(d => d.AprSeasonalBusyRating).WithMany(p => p.RockClimbingWallsAprSeasonalBusyRating)
                .HasForeignKey(d => d.AprSeasonalBusyRatingId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_RockClimbingWalls_BusyRatings_Apr");

            entity.HasOne(d => d.AprSeasonalClimbingQualityRating).WithMany(p => p.RockClimbingWallsAprSeasonalClimbingQualityRating)
                .HasForeignKey(d => d.AprSeasonalClimbingQualityRatingId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_RockClimbingWalls_ClimbingQualityRatings_Apr");

            entity.HasOne(d => d.Area).WithMany(p => p.RockClimbingWalls)
                .HasForeignKey(d => d.AreaId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_RockClimbingWalls_Areas");

            entity.HasOne(d => d.AugSeasonalBusyRating).WithMany(p => p.RockClimbingWallsAugSeasonalBusyRating)
                .HasForeignKey(d => d.AugSeasonalBusyRatingId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_RockClimbingWalls_BusyRatings_Aug");

            entity.HasOne(d => d.AugSeasonalClimbingQualityRating).WithMany(p => p.RockClimbingWallsAugSeasonalClimbingQualityRating)
                .HasForeignKey(d => d.AugSeasonalClimbingQualityRatingId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_RockClimbingWalls_ClimbingQualityRatings_Aug");

            entity.HasOne(d => d.DecSeasonalBusyRating).WithMany(p => p.RockClimbingWallsDecSeasonalBusyRating)
                .HasForeignKey(d => d.DecSeasonalBusyRatingId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_RockClimbingWalls_BusyRatings_Dec");

            entity.HasOne(d => d.DecSeasonalClimbingQualityRating).WithMany(p => p.RockClimbingWallsDecSeasonalClimbingQualityRating)
                .HasForeignKey(d => d.DecSeasonalClimbingQualityRatingId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_RockClimbingWalls_ClimbingQualityRatings_Dec");

            entity.HasOne(d => d.FebSeasonalBusyRating).WithMany(p => p.RockClimbingWallsFebSeasonalBusyRating)
                .HasForeignKey(d => d.FebSeasonalBusyRatingId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_RockClimbingWalls_BusyRatings_Feb");

            entity.HasOne(d => d.FebSeasonalClimbingQualityRating).WithMany(p => p.RockClimbingWallsFebSeasonalClimbingQualityRating)
                .HasForeignKey(d => d.FebSeasonalClimbingQualityRatingId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_RockClimbingWalls_ClimbingQualityRatings_Feb");

            entity.HasOne(d => d.JanSeasonalBusyRating).WithMany(p => p.RockClimbingWallsJanSeasonalBusyRating)
                .HasForeignKey(d => d.JanSeasonalBusyRatingId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_RockClimbingWalls_BusyRatings_Jan");

            entity.HasOne(d => d.JanSeasonalClimbingQualityRating).WithMany(p => p.RockClimbingWallsJanSeasonalClimbingQualityRating)
                .HasForeignKey(d => d.JanSeasonalClimbingQualityRatingId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_RockClimbingWalls_ClimbingQualityRatings_Jan");

            entity.HasOne(d => d.JulSeasonalBusyRating).WithMany(p => p.RockClimbingWallsJulSeasonalBusyRating)
                .HasForeignKey(d => d.JulSeasonalBusyRatingId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_RockClimbingWalls_BusyRatings_Jul");

            entity.HasOne(d => d.JulSeasonalClimbingQualityRating).WithMany(p => p.RockClimbingWallsJulSeasonalClimbingQualityRating)
                .HasForeignKey(d => d.JulSeasonalClimbingQualityRatingId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_RockClimbingWalls_ClimbingQualityRatings_Jul");

            entity.HasOne(d => d.JunSeasonalBusyRating).WithMany(p => p.RockClimbingWallsJunSeasonalBusyRating)
                .HasForeignKey(d => d.JunSeasonalBusyRatingId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_RockClimbingWalls_BusyRatings_Jun");

            entity.HasOne(d => d.JunSeasonalClimbingQualityRating).WithMany(p => p.RockClimbingWallsJunSeasonalClimbingQualityRating)
                .HasForeignKey(d => d.JunSeasonalClimbingQualityRatingId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_RockClimbingWalls_ClimbingQualityRatings_Jun");

            entity.HasOne(d => d.MarSeasonalBusyRating).WithMany(p => p.RockClimbingWallsMarSeasonalBusyRating)
                .HasForeignKey(d => d.MarSeasonalBusyRatingId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_RockClimbingWalls_BusyRatings_Mar");

            entity.HasOne(d => d.MarSeasonalClimbingQualityRating).WithMany(p => p.RockClimbingWallsMarSeasonalClimbingQualityRating)
                .HasForeignKey(d => d.MarSeasonalClimbingQualityRatingId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_RockClimbingWalls_ClimbingQualityRatings_Mar");

            entity.HasOne(d => d.MaySeasonalBusyRating).WithMany(p => p.RockClimbingWallsMaySeasonalBusyRating)
                .HasForeignKey(d => d.MaySeasonalBusyRatingId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_RockClimbingWalls_BusyRatings_May");

            entity.HasOne(d => d.MaySeasonalClimbingQualityRating).WithMany(p => p.RockClimbingWallsMaySeasonalClimbingQualityRating)
                .HasForeignKey(d => d.MaySeasonalClimbingQualityRatingId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_RockClimbingWalls_ClimbingQualityRatings_May");

            entity.HasOne(d => d.NovSeasonalBusyRating).WithMany(p => p.RockClimbingWallsNovSeasonalBusyRating)
                .HasForeignKey(d => d.NovSeasonalBusyRatingId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_RockClimbingWalls_BusyRatings_Nov");

            entity.HasOne(d => d.NovSeasonalClimbingQualityRating).WithMany(p => p.RockClimbingWallsNovSeasonalClimbingQualityRating)
                .HasForeignKey(d => d.NovSeasonalClimbingQualityRatingId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_RockClimbingWalls_ClimbingQualityRatings_Nov");

            entity.HasOne(d => d.OctSeasonalBusyRating).WithMany(p => p.RockClimbingWallsOctSeasonalBusyRating)
                .HasForeignKey(d => d.OctSeasonalBusyRatingId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_RockClimbingWalls_BusyRatings_Oct");

            entity.HasOne(d => d.OctSeasonalClimbingQualityRating).WithMany(p => p.RockClimbingWallsOctSeasonalClimbingQualityRating)
                .HasForeignKey(d => d.OctSeasonalClimbingQualityRatingId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_RockClimbingWalls_ClimbingQualityRatings_Oct");

            entity.HasOne(d => d.SepSeasonalBusyRating).WithMany(p => p.RockClimbingWallsSepSeasonalBusyRating)
                .HasForeignKey(d => d.SepSeasonalBusyRatingId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_RockClimbingWalls_BusyRatings_Sep");

            entity.HasOne(d => d.SepSeasonalClimbingQualityRating).WithMany(p => p.RockClimbingWallsSepSeasonalClimbingQualityRating)
                .HasForeignKey(d => d.SepSeasonalClimbingQualityRatingId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_RockClimbingWalls_ClimbingQualityRatings_Sep");
        });

        modelBuilder.Entity<UserDirectMessages>(entity =>
        {
            entity.HasKey(e => e.DirectMessageId).HasName("PK__tmp_ms_x__8332D39CB9D02F06");

            entity.Property(e => e.Message)
                .HasMaxLength(2500)
                .IsUnicode(false);
            entity.Property(e => e.Time)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");

            entity.HasOne(d => d.UserFrom).WithMany(p => p.UserDirectMessagesUserFrom)
                .HasForeignKey(d => d.UserFromId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_UserDirectMessages_Users_From");

            entity.HasOne(d => d.UserTo).WithMany(p => p.UserDirectMessagesUserTo)
                .HasForeignKey(d => d.UserToId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_UserDirectMessages_Users_To");
        });

        modelBuilder.Entity<UserFriends>(entity =>
        {
            entity.HasKey(e => new { e.UserFromId, e.UserToId }).HasName("PK__UserFrie__D4302545F0D07AC5");

            entity.Property(e => e.UserFromId).HasColumnName("UserFromID");
            entity.Property(e => e.UserToId).HasColumnName("UserToID");
            entity.Property(e => e.RequestAcceptDate).HasColumnType("datetime");
            entity.Property(e => e.RequestCreationDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");

            entity.HasOne(d => d.UserFrom).WithMany(p => p.UserFriendsUserFrom)
                .HasForeignKey(d => d.UserFromId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_UserFriends_Users_From");

            entity.HasOne(d => d.UserTo).WithMany(p => p.UserFriendsUserTo)
                .HasForeignKey(d => d.UserToId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_UserFriends_Users_To");
        });

        modelBuilder.Entity<UsersAreaFavorites>(entity =>
        {
            entity.HasKey(e => new { e.UserId, e.AreaId }).HasName("PK__UsersAre__80834EAE76DAF971");

            entity.Property(e => e.UserId).HasColumnName("UserID");
            entity.Property(e => e.AreaId).HasColumnName("AreaID");
            entity.Property(e => e.Notes)
                .HasMaxLength(2500)
                .IsUnicode(false);

            entity.HasOne(d => d.Area).WithMany(p => p.UsersAreaFavorites)
                .HasForeignKey(d => d.AreaId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_UsersAreaFavorites_Areas");

            entity.HasOne(d => d.User).WithMany(p => p.UsersAreaFavorites)
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_UsersAreaFavorites_Users");
        });

        modelBuilder.Entity<UsersRockClimbComments>(entity =>
        {
            entity.HasKey(e => e.CommentId).HasName("PK__UsersRoc__C3B4DFAA253AD024");

            entity.Property(e => e.CommentId)
                .ValueGeneratedOnAdd()
                .HasColumnName("CommentID");
            entity.Property(e => e.Comments)
                .HasMaxLength(2500)
                .IsUnicode(false);
            entity.Property(e => e.RockClimbingRoutesId).HasColumnName("RockClimbingRoutesID");
            entity.Property(e => e.Time)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.UserId).HasColumnName("UserID");

            entity.HasOne(d => d.RockClimbingRoutes).WithMany(p => p.UsersRockClimbComments)
                .HasForeignKey(d => d.RockClimbingRoutesId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_UsersRockClimbComments_RockClimbingRoutes");

            entity.HasOne(d => d.User).WithMany(p => p.UsersRockClimbComments)
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_UsersRockClimbComments_Users");
        });

        modelBuilder.Entity<UsersRockClimbRouteFavorites>(entity =>
        {
            entity.HasKey(e => new { e.UserId, e.RockClimbingRoutesId }).HasName("PK__UsersRoc__C5CBB65FA1853CBF");

            entity.Property(e => e.UserId).HasColumnName("UserID");
            entity.Property(e => e.RockClimbingRoutesId).HasColumnName("RockClimbingRoutesID");
            entity.Property(e => e.Notes)
                .HasMaxLength(2500)
                .IsUnicode(false);

            entity.HasOne(d => d.RockClimbingRoutes).WithMany(p => p.UsersRockClimbRouteFavorites)
                .HasForeignKey(d => d.RockClimbingRoutesId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_UsersRockClimbRouteFavorites_RockClimbingRoutes");

            entity.HasOne(d => d.User).WithMany(p => p.UsersRockClimbRouteFavorites)
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_UsersRockClimbRouteFavorites_ApplicationUsers");
        });

        modelBuilder.Entity<UsersRockClimbingWallFavorites>(entity =>
        {
            entity.HasKey(e => new { e.UserId, e.RockClimbingWallId }).HasName("PK__UsersRoc__35FF1B6CC0138FFE");

            entity.Property(e => e.UserId).HasColumnName("UserID");
            entity.Property(e => e.RockClimbingWallId).HasColumnName("RockClimbingWallID");
            entity.Property(e => e.Notes)
                .HasMaxLength(2500)
                .IsUnicode(false);

            entity.HasOne(d => d.RockClimbingWall).WithMany(p => p.UsersRockClimbingWallFavorites)
                .HasForeignKey(d => d.RockClimbingWallId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_UsersWallFavorites_ClimbingWalls");

            entity.HasOne(d => d.User).WithMany(p => p.UsersRockClimbingWallFavorites)
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_UsersWallFavorites_Users");
        });

        modelBuilder.Entity<UsersRockClimbs>(entity =>
        {
            entity.HasKey(e => e.ClimbId).HasName("PK__UsersRoc__2FC3D4C018D82566");

            entity.Property(e => e.ClimbId)
                .ValueGeneratedOnAdd()
                .HasColumnName("ClimbID");
            entity.Property(e => e.Comments)
                .HasMaxLength(2500)
                .IsUnicode(false);
            entity.Property(e => e.RockClimbingRoutesId).HasColumnName("RockClimbingRoutesID");
            entity.Property(e => e.Time)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.UserId).HasColumnName("UserID");

            entity.HasOne(d => d.RockClimbingRoutes).WithMany(p => p.UsersRockClimbs)
                .HasForeignKey(d => d.RockClimbingRoutesId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_UsersRockClimbTracker_RockClimbingRoutes");

            entity.HasOne(d => d.User).WithMany(p => p.UsersRockClimbs)
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_UsersRockClimbTracker_Users");
        });

        modelBuilder.Entity<ZoneGeoFenceNodes>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__ZoneGeoF__3214EC27529D14D4");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.ZoneId).HasColumnName("ZoneID");

            entity.HasOne(d => d.Zone).WithMany(p => p.ZoneGeoFenceNodes)
                .HasForeignKey(d => d.ZoneId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_ZoneGeoFenceNodes_Zones");
        });

        modelBuilder.Entity<Zones>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Zones__3214EC27831E47B8");

            entity.HasIndex(e => new { e.DistrictId, e.ZoneCode }, "UQ_Zones_Code").IsUnique();

            entity.HasIndex(e => new { e.DistrictId, e.EnglishFullName }, "UQ_Zones_Name").IsUnique();

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.DistrictId).HasColumnName("DistrictID");
            entity.Property(e => e.EnglishFullName)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Info)
                .HasMaxLength(5000)
                .IsUnicode(false);
            entity.Property(e => e.ZoneCode)
                .HasMaxLength(5)
                .IsUnicode(false)
                .IsFixedLength();

            entity.HasOne(d => d.District).WithMany(p => p.Zones)
                .HasForeignKey(d => d.DistrictId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Zones_Districts");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
