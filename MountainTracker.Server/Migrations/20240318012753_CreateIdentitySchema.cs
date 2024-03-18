using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MountainTracker.Server.Migrations
{
    /// <inheritdoc />
    public partial class CreateIdentitySchema : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ApplicationRoles",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: false),
                    Discriminator = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ApplicationRoles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "BusyRatings",
                columns: table => new
                {
                    ID = table.Column<byte>(type: "tinyint", nullable: false),
                    EnglishName = table.Column<string>(type: "varchar(18)", unicode: false, maxLength: 18, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__BusyRati__3214EC2731592CD9", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "ClimbingQualityRatings",
                columns: table => new
                {
                    ID = table.Column<byte>(type: "tinyint", nullable: false),
                    EnglishName = table.Column<string>(type: "varchar(18)", unicode: false, maxLength: 18, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__Climbing__3214EC27D9E89DDA", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "ClimbingTypes",
                columns: table => new
                {
                    ID = table.Column<byte>(type: "tinyint", nullable: false),
                    EnglishFullName = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__Climbing__3214EC2755D4E87B", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Countries",
                columns: table => new
                {
                    ID = table.Column<byte>(type: "tinyint", nullable: false),
                    EnglishFullName = table.Column<string>(type: "varchar(44)", unicode: false, maxLength: 44, nullable: false),
                    CountryCode = table.Column<string>(type: "char(2)", unicode: false, fixedLength: true, maxLength: 2, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__Countrie__3214EC2778A79FC4", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Gear",
                columns: table => new
                {
                    ID = table.Column<byte>(type: "tinyint", nullable: false),
                    EnglishFullName = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__Gear__3214EC2775AF251D", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "GroupMessagingGroups",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    GroupsName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    TimeCreated = table.Column<DateTime>(type: "datetime", nullable: false, defaultValueSql: "(getdate())")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__GroupMes__3214EC27DAB45892", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "IceClimbingRoutes",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false),
                    ClimbingWallID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__IceClimb__3214EC27D52ECE00", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Mountains",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    EnglishFullName = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: false),
                    RouteInfo = table.Column<string>(type: "varchar(1000)", unicode: false, maxLength: 1000, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__Mountain__3214EC27975947C7", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "RockClimbingDifficulties",
                columns: table => new
                {
                    ID = table.Column<byte>(type: "tinyint", nullable: false),
                    EnglishCode = table.Column<string>(type: "varchar(8)", unicode: false, maxLength: 8, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__RockClim__3214EC277CEB81D5", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "RockClimbingTypes",
                columns: table => new
                {
                    ID = table.Column<byte>(type: "tinyint", nullable: false),
                    EnglishFullName = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: false),
                    ShortHand = table.Column<string>(type: "varchar(6)", unicode: false, maxLength: 6, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__RockClim__3214EC270C61B79F", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "ProvincesOrStates",
                columns: table => new
                {
                    ID = table.Column<short>(type: "smallint", nullable: false),
                    CountryID = table.Column<byte>(type: "tinyint", nullable: false),
                    EnglishFullName = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: false),
                    RegionCode = table.Column<string>(type: "char(2)", unicode: false, fixedLength: true, maxLength: 2, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__Province__3214EC27DA9A26BF", x => x.ID);
                    table.ForeignKey(
                        name: "FK_ProvincesOrStates_Countries",
                        column: x => x.CountryID,
                        principalTable: "Countries",
                        principalColumn: "ID");
                });

            migrationBuilder.CreateTable(
                name: "GearSizes",
                columns: table => new
                {
                    ID = table.Column<byte>(type: "tinyint", nullable: false),
                    GearID = table.Column<byte>(type: "tinyint", nullable: false),
                    EnglishFullName = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__GearSize__3214EC2702250B0C", x => x.ID);
                    table.ForeignKey(
                        name: "FK_GearSizes_RockClimbingGearID",
                        column: x => x.GearID,
                        principalTable: "Gear",
                        principalColumn: "ID");
                });

            migrationBuilder.CreateTable(
                name: "GearToGearTypeLinks",
                columns: table => new
                {
                    ClimbingTypeID = table.Column<byte>(type: "tinyint", nullable: false),
                    GearID = table.Column<byte>(type: "tinyint", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__GearToGe__9FD373F8BCE5121A", x => new { x.ClimbingTypeID, x.GearID });
                    table.ForeignKey(
                        name: "FK_GearToGearTypeLinks_ClimbingTypes",
                        column: x => x.ClimbingTypeID,
                        principalTable: "ClimbingTypes",
                        principalColumn: "ID");
                    table.ForeignKey(
                        name: "FK_GearToGearTypeLinks_Gear",
                        column: x => x.GearID,
                        principalTable: "Gear",
                        principalColumn: "ID");
                });

            migrationBuilder.CreateTable(
                name: "ApplicationUsers",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Email = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    EmailConfirmed = table.Column<bool>(type: "bit", nullable: false),
                    PasswordHash = table.Column<string>(type: "nvarchar(512)", maxLength: 512, nullable: true),
                    SecurityStamp = table.Column<string>(type: "nvarchar(512)", maxLength: 512, nullable: true),
                    PhoneNumber = table.Column<string>(type: "nvarchar(128)", maxLength: 128, nullable: true),
                    PhoneNumberConfirmed = table.Column<bool>(type: "bit", nullable: false),
                    TwoFactorEnabled = table.Column<bool>(type: "bit", nullable: false),
                    LockoutEndDateUtc = table.Column<DateTime>(type: "datetime", nullable: true),
                    LockoutEnabled = table.Column<bool>(type: "bit", nullable: false),
                    AccessFailedCount = table.Column<int>(type: "int", nullable: false),
                    UserName = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: false),
                    FirstName = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    LastName = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    DateCreated = table.Column<DateTime>(type: "datetime", nullable: false),
                    DateUpdated = table.Column<DateTime>(type: "datetime", nullable: false),
                    LastLoginDate = table.Column<DateTime>(type: "datetime", nullable: true),
                    PasswordChangeDate = table.Column<DateTime>(type: "datetime", nullable: true),
                    KeepPrivate = table.Column<bool>(type: "bit", nullable: false),
                    MetricOverImperial = table.Column<bool>(type: "bit", nullable: false, defaultValueSql: "((1))"),
                    CountryId = table.Column<byte>(type: "tinyint", nullable: true),
                    ProvinceId = table.Column<short>(type: "smallint", nullable: true),
                    ProfilePictureBytes = table.Column<byte[]>(type: "varbinary(max)", nullable: true),
                    BannerPictureBytes = table.Column<byte[]>(type: "varbinary(max)", nullable: true),
                    Bio = table.Column<string>(type: "nvarchar(2500)", maxLength: 2500, nullable: true),
                    ProfileURL = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ApplicationUsers", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ApplicationUsers_Countries",
                        column: x => x.CountryId,
                        principalTable: "Countries",
                        principalColumn: "ID");
                    table.ForeignKey(
                        name: "FK_ApplicationUsers_ProvincesOrStates",
                        column: x => x.ProvinceId,
                        principalTable: "ProvincesOrStates",
                        principalColumn: "ID");
                });

            migrationBuilder.CreateTable(
                name: "Regions",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ProvinceOrStateID = table.Column<short>(type: "smallint", nullable: false),
                    EnglishFullName = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: false),
                    RegionCode = table.Column<string>(type: "char(5)", unicode: false, fixedLength: true, maxLength: 5, nullable: false),
                    LatitudeStartOrCenter = table.Column<double>(type: "float", nullable: true),
                    LongitudeStartOrCenter = table.Column<double>(type: "float", nullable: true),
                    ThumbPictureBytes = table.Column<byte[]>(type: "varbinary(max)", nullable: true),
                    Info = table.Column<string>(type: "varchar(5000)", unicode: false, maxLength: 5000, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__Regions__3214EC279286D96F", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Regions_ProvincesOrStates",
                        column: x => x.ProvinceOrStateID,
                        principalTable: "ProvincesOrStates",
                        principalColumn: "ID");
                });

            migrationBuilder.CreateTable(
                name: "ApplicationUserClaims",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<int>(type: "int", nullable: false),
                    ClaimType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClaimValue = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ApplicationUserClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ApplicationUserClaims_ApplicationUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "ApplicationUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ApplicationUserLogins",
                columns: table => new
                {
                    LoginProvider = table.Column<string>(type: "nvarchar(128)", maxLength: 128, nullable: false),
                    ProviderKey = table.Column<string>(type: "nvarchar(128)", maxLength: 128, nullable: false),
                    UserId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_dbo.ApplicationUserLogins", x => new { x.LoginProvider, x.ProviderKey, x.UserId });
                    table.ForeignKey(
                        name: "FK_dbo.ApplicationUserLogins_dbo.ApplicationUsers_Id",
                        column: x => x.UserId,
                        principalTable: "ApplicationUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ApplicationUserRoles",
                columns: table => new
                {
                    UserId = table.Column<int>(type: "int", nullable: false),
                    RoleId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_dbo.ApplicationUserRoles", x => new { x.UserId, x.RoleId });
                    table.ForeignKey(
                        name: "FK_dbo.ApplicationUserRoles_dbo.ApplicationRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "ApplicationRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_dbo.ApplicationUserRoles_dbo.ApplicationUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "ApplicationUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "GroupMessagingMembers",
                columns: table => new
                {
                    UserID = table.Column<int>(type: "int", nullable: false),
                    GroupMessagingID = table.Column<int>(type: "int", nullable: false),
                    TimeInvited = table.Column<DateTime>(type: "datetime", nullable: false, defaultValueSql: "(getdate())"),
                    TimeJoined = table.Column<DateTime>(type: "datetime", nullable: true, defaultValueSql: "(getdate())"),
                    AcceptedInvite = table.Column<bool>(type: "bit", nullable: false),
                    TimeLastSeen = table.Column<DateTime>(type: "datetime", nullable: false, defaultValueSql: "(getdate())")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__GroupMes__3491EC20C2C70508", x => new { x.UserID, x.GroupMessagingID });
                    table.ForeignKey(
                        name: "FK_GroupMessagingMembers_GroupMessaging",
                        column: x => x.GroupMessagingID,
                        principalTable: "GroupMessagingGroups",
                        principalColumn: "ID");
                    table.ForeignKey(
                        name: "FK_GroupMessagingMembers_Users",
                        column: x => x.UserID,
                        principalTable: "ApplicationUsers",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "GroupMessagingMessages",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserID = table.Column<int>(type: "int", nullable: false),
                    GroupMessagingID = table.Column<int>(type: "int", nullable: false),
                    Message = table.Column<string>(type: "nvarchar(1000)", maxLength: 1000, nullable: false),
                    Time = table.Column<DateTime>(type: "datetime", nullable: false, defaultValueSql: "(getdate())")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__GroupMes__3214EC277423D4E3", x => x.ID);
                    table.ForeignKey(
                        name: "FK_GroupMessagingMessages_GroupMessagingGroups",
                        column: x => x.GroupMessagingID,
                        principalTable: "GroupMessagingGroups",
                        principalColumn: "ID");
                    table.ForeignKey(
                        name: "FK_GroupMessagingMessages_Users",
                        column: x => x.UserID,
                        principalTable: "ApplicationUsers",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "UserDirectMessages",
                columns: table => new
                {
                    DirectMessageId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserFromId = table.Column<int>(type: "int", nullable: false),
                    UserToId = table.Column<int>(type: "int", nullable: false),
                    Time = table.Column<DateTime>(type: "datetime", nullable: false, defaultValueSql: "(getdate())"),
                    Seen = table.Column<bool>(type: "bit", nullable: false),
                    Message = table.Column<string>(type: "varchar(2500)", unicode: false, maxLength: 2500, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__tmp_ms_x__8332D39CB9D02F06", x => x.DirectMessageId);
                    table.ForeignKey(
                        name: "FK_UserDirectMessages_Users_From",
                        column: x => x.UserFromId,
                        principalTable: "ApplicationUsers",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_UserDirectMessages_Users_To",
                        column: x => x.UserToId,
                        principalTable: "ApplicationUsers",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "UserFriends",
                columns: table => new
                {
                    UserFromID = table.Column<int>(type: "int", nullable: false),
                    UserToID = table.Column<int>(type: "int", nullable: false),
                    RequestCreationDate = table.Column<DateTime>(type: "datetime", nullable: false, defaultValueSql: "(getdate())"),
                    RequestAcceptDate = table.Column<DateTime>(type: "datetime", nullable: true),
                    Accepted = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__UserFrie__D4302545F0D07AC5", x => new { x.UserFromID, x.UserToID });
                    table.ForeignKey(
                        name: "FK_UserFriends_Users_From",
                        column: x => x.UserFromID,
                        principalTable: "ApplicationUsers",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_UserFriends_Users_To",
                        column: x => x.UserToID,
                        principalTable: "ApplicationUsers",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "Districts",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RegionID = table.Column<int>(type: "int", nullable: false),
                    EnglishFullName = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: false),
                    DistrictCode = table.Column<string>(type: "char(5)", unicode: false, fixedLength: true, maxLength: 5, nullable: false),
                    LatitudeStartOrCenter = table.Column<double>(type: "float", nullable: true),
                    LongitudeStartOrCenter = table.Column<double>(type: "float", nullable: true),
                    ThumbPictureBytes = table.Column<byte[]>(type: "varbinary(max)", nullable: true),
                    Info = table.Column<string>(type: "varchar(5000)", unicode: false, maxLength: 5000, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__District__3214EC274A3A1CB4", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Districts_Regions",
                        column: x => x.RegionID,
                        principalTable: "Regions",
                        principalColumn: "ID");
                });

            migrationBuilder.CreateTable(
                name: "RegionGeoFenceNodes",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RegionID = table.Column<int>(type: "int", nullable: false),
                    Latitude = table.Column<double>(type: "float", nullable: false),
                    Longitude = table.Column<double>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__RegionGe__3214EC27C1E7ABCF", x => x.ID);
                    table.ForeignKey(
                        name: "FK_RegionGeoFenceNodes_Regions",
                        column: x => x.RegionID,
                        principalTable: "Regions",
                        principalColumn: "ID");
                });

            migrationBuilder.CreateTable(
                name: "DistrictGeoFenceNodes",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DistrictID = table.Column<int>(type: "int", nullable: false),
                    Latitude = table.Column<double>(type: "float", nullable: false),
                    Longitude = table.Column<double>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__District__3214EC27B24DF21A", x => x.ID);
                    table.ForeignKey(
                        name: "FK_DistrictGeoFenceNodes_District",
                        column: x => x.DistrictID,
                        principalTable: "Districts",
                        principalColumn: "ID");
                });

            migrationBuilder.CreateTable(
                name: "Zones",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DistrictID = table.Column<int>(type: "int", nullable: false),
                    EnglishFullName = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: false),
                    ZoneCode = table.Column<string>(type: "char(5)", unicode: false, fixedLength: true, maxLength: 5, nullable: false),
                    LatitudeStartOrCenter = table.Column<double>(type: "float", nullable: true),
                    LongitudeStartOrCenter = table.Column<double>(type: "float", nullable: true),
                    ThumbPictureBytes = table.Column<byte[]>(type: "varbinary(max)", nullable: true),
                    Info = table.Column<string>(type: "varchar(5000)", unicode: false, maxLength: 5000, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__Zones__3214EC27831E47B8", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Zones_Districts",
                        column: x => x.DistrictID,
                        principalTable: "Districts",
                        principalColumn: "ID");
                });

            migrationBuilder.CreateTable(
                name: "Areas",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ZoneID = table.Column<int>(type: "int", nullable: false),
                    EnglishFullName = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: false),
                    AreaCode = table.Column<string>(type: "char(5)", unicode: false, fixedLength: true, maxLength: 5, nullable: false),
                    LatitudeStartOrCenter = table.Column<double>(type: "float", nullable: true),
                    LongitudeStartOrCenter = table.Column<double>(type: "float", nullable: true),
                    ThumbPictureBytes = table.Column<byte[]>(type: "varbinary(max)", nullable: true),
                    Info = table.Column<string>(type: "varchar(5000)", unicode: false, maxLength: 5000, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__Areas__3214EC27E5BB9B61", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Areas_Zones",
                        column: x => x.ZoneID,
                        principalTable: "Zones",
                        principalColumn: "ID");
                });

            migrationBuilder.CreateTable(
                name: "ZoneGeoFenceNodes",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ZoneID = table.Column<int>(type: "int", nullable: false),
                    Latitude = table.Column<double>(type: "float", nullable: false),
                    Longitude = table.Column<double>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__ZoneGeoF__3214EC27529D14D4", x => x.ID);
                    table.ForeignKey(
                        name: "FK_ZoneGeoFenceNodes_Zones",
                        column: x => x.ZoneID,
                        principalTable: "Zones",
                        principalColumn: "ID");
                });

            migrationBuilder.CreateTable(
                name: "AreaGeoFenceNodes",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AreaID = table.Column<int>(type: "int", nullable: false),
                    Latitude = table.Column<double>(type: "float", nullable: false),
                    Longitude = table.Column<double>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__tmp_ms_x__3214EC27DDCE7825", x => x.ID);
                    table.ForeignKey(
                        name: "FK_AreaGeoFenceNodes_Areas",
                        column: x => x.AreaID,
                        principalTable: "Areas",
                        principalColumn: "ID");
                });

            migrationBuilder.CreateTable(
                name: "RockClimbingWalls",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AreaID = table.Column<int>(type: "int", nullable: false),
                    EnglishFullName = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: false),
                    WallCode = table.Column<string>(type: "char(5)", unicode: false, fixedLength: true, maxLength: 5, nullable: false),
                    Approach = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false, defaultValueSql: "('Unknown')"),
                    LatitudeStartOrCenter = table.Column<double>(type: "float", nullable: true),
                    LongitudeStartOrCenter = table.Column<double>(type: "float", nullable: true),
                    LatitudeParking = table.Column<double>(type: "float", nullable: true),
                    LongitudeParking = table.Column<double>(type: "float", nullable: true),
                    ThumbPictureBytes = table.Column<byte[]>(type: "varbinary(max)", nullable: true),
                    Info = table.Column<string>(type: "varchar(5000)", unicode: false, maxLength: 5000, nullable: true),
                    JanSeasonalClimbingQualityRatingID = table.Column<byte>(type: "tinyint", nullable: false),
                    FebSeasonalClimbingQualityRatingID = table.Column<byte>(type: "tinyint", nullable: false),
                    MarSeasonalClimbingQualityRatingID = table.Column<byte>(type: "tinyint", nullable: false),
                    AprSeasonalClimbingQualityRatingID = table.Column<byte>(type: "tinyint", nullable: false),
                    MaySeasonalClimbingQualityRatingID = table.Column<byte>(type: "tinyint", nullable: false),
                    JunSeasonalClimbingQualityRatingID = table.Column<byte>(type: "tinyint", nullable: false),
                    JulSeasonalClimbingQualityRatingID = table.Column<byte>(type: "tinyint", nullable: false),
                    AugSeasonalClimbingQualityRatingID = table.Column<byte>(type: "tinyint", nullable: false),
                    SepSeasonalClimbingQualityRatingID = table.Column<byte>(type: "tinyint", nullable: false),
                    OctSeasonalClimbingQualityRatingID = table.Column<byte>(type: "tinyint", nullable: false),
                    NovSeasonalClimbingQualityRatingID = table.Column<byte>(type: "tinyint", nullable: false),
                    DecSeasonalClimbingQualityRatingID = table.Column<byte>(type: "tinyint", nullable: false),
                    JanSeasonalBusyRatingID = table.Column<byte>(type: "tinyint", nullable: false),
                    FebSeasonalBusyRatingID = table.Column<byte>(type: "tinyint", nullable: false),
                    MarSeasonalBusyRatingID = table.Column<byte>(type: "tinyint", nullable: false),
                    AprSeasonalBusyRatingID = table.Column<byte>(type: "tinyint", nullable: false),
                    MaySeasonalBusyRatingID = table.Column<byte>(type: "tinyint", nullable: false),
                    JunSeasonalBusyRatingID = table.Column<byte>(type: "tinyint", nullable: false),
                    JulSeasonalBusyRatingID = table.Column<byte>(type: "tinyint", nullable: false),
                    AugSeasonalBusyRatingID = table.Column<byte>(type: "tinyint", nullable: false),
                    SepSeasonalBusyRatingID = table.Column<byte>(type: "tinyint", nullable: false),
                    OctSeasonalBusyRatingID = table.Column<byte>(type: "tinyint", nullable: false),
                    NovSeasonalBusyRatingID = table.Column<byte>(type: "tinyint", nullable: false),
                    DecSeasonalBusyRatingID = table.Column<byte>(type: "tinyint", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__RockClim__3214EC27DA4C6A92", x => x.ID);
                    table.ForeignKey(
                        name: "FK_RockClimbingWalls_Areas",
                        column: x => x.AreaID,
                        principalTable: "Areas",
                        principalColumn: "ID");
                    table.ForeignKey(
                        name: "FK_RockClimbingWalls_BusyRatings_Apr",
                        column: x => x.AprSeasonalBusyRatingID,
                        principalTable: "BusyRatings",
                        principalColumn: "ID");
                    table.ForeignKey(
                        name: "FK_RockClimbingWalls_BusyRatings_Aug",
                        column: x => x.AugSeasonalBusyRatingID,
                        principalTable: "BusyRatings",
                        principalColumn: "ID");
                    table.ForeignKey(
                        name: "FK_RockClimbingWalls_BusyRatings_Dec",
                        column: x => x.DecSeasonalBusyRatingID,
                        principalTable: "BusyRatings",
                        principalColumn: "ID");
                    table.ForeignKey(
                        name: "FK_RockClimbingWalls_BusyRatings_Feb",
                        column: x => x.FebSeasonalBusyRatingID,
                        principalTable: "BusyRatings",
                        principalColumn: "ID");
                    table.ForeignKey(
                        name: "FK_RockClimbingWalls_BusyRatings_Jan",
                        column: x => x.JanSeasonalBusyRatingID,
                        principalTable: "BusyRatings",
                        principalColumn: "ID");
                    table.ForeignKey(
                        name: "FK_RockClimbingWalls_BusyRatings_Jul",
                        column: x => x.JulSeasonalBusyRatingID,
                        principalTable: "BusyRatings",
                        principalColumn: "ID");
                    table.ForeignKey(
                        name: "FK_RockClimbingWalls_BusyRatings_Jun",
                        column: x => x.JunSeasonalBusyRatingID,
                        principalTable: "BusyRatings",
                        principalColumn: "ID");
                    table.ForeignKey(
                        name: "FK_RockClimbingWalls_BusyRatings_Mar",
                        column: x => x.MarSeasonalBusyRatingID,
                        principalTable: "BusyRatings",
                        principalColumn: "ID");
                    table.ForeignKey(
                        name: "FK_RockClimbingWalls_BusyRatings_May",
                        column: x => x.MaySeasonalBusyRatingID,
                        principalTable: "BusyRatings",
                        principalColumn: "ID");
                    table.ForeignKey(
                        name: "FK_RockClimbingWalls_BusyRatings_Nov",
                        column: x => x.NovSeasonalBusyRatingID,
                        principalTable: "BusyRatings",
                        principalColumn: "ID");
                    table.ForeignKey(
                        name: "FK_RockClimbingWalls_BusyRatings_Oct",
                        column: x => x.OctSeasonalBusyRatingID,
                        principalTable: "BusyRatings",
                        principalColumn: "ID");
                    table.ForeignKey(
                        name: "FK_RockClimbingWalls_BusyRatings_Sep",
                        column: x => x.SepSeasonalBusyRatingID,
                        principalTable: "BusyRatings",
                        principalColumn: "ID");
                    table.ForeignKey(
                        name: "FK_RockClimbingWalls_ClimbingQualityRatings_Apr",
                        column: x => x.AprSeasonalClimbingQualityRatingID,
                        principalTable: "ClimbingQualityRatings",
                        principalColumn: "ID");
                    table.ForeignKey(
                        name: "FK_RockClimbingWalls_ClimbingQualityRatings_Aug",
                        column: x => x.AugSeasonalClimbingQualityRatingID,
                        principalTable: "ClimbingQualityRatings",
                        principalColumn: "ID");
                    table.ForeignKey(
                        name: "FK_RockClimbingWalls_ClimbingQualityRatings_Dec",
                        column: x => x.DecSeasonalClimbingQualityRatingID,
                        principalTable: "ClimbingQualityRatings",
                        principalColumn: "ID");
                    table.ForeignKey(
                        name: "FK_RockClimbingWalls_ClimbingQualityRatings_Feb",
                        column: x => x.FebSeasonalClimbingQualityRatingID,
                        principalTable: "ClimbingQualityRatings",
                        principalColumn: "ID");
                    table.ForeignKey(
                        name: "FK_RockClimbingWalls_ClimbingQualityRatings_Jan",
                        column: x => x.JanSeasonalClimbingQualityRatingID,
                        principalTable: "ClimbingQualityRatings",
                        principalColumn: "ID");
                    table.ForeignKey(
                        name: "FK_RockClimbingWalls_ClimbingQualityRatings_Jul",
                        column: x => x.JulSeasonalClimbingQualityRatingID,
                        principalTable: "ClimbingQualityRatings",
                        principalColumn: "ID");
                    table.ForeignKey(
                        name: "FK_RockClimbingWalls_ClimbingQualityRatings_Jun",
                        column: x => x.JunSeasonalClimbingQualityRatingID,
                        principalTable: "ClimbingQualityRatings",
                        principalColumn: "ID");
                    table.ForeignKey(
                        name: "FK_RockClimbingWalls_ClimbingQualityRatings_Mar",
                        column: x => x.MarSeasonalClimbingQualityRatingID,
                        principalTable: "ClimbingQualityRatings",
                        principalColumn: "ID");
                    table.ForeignKey(
                        name: "FK_RockClimbingWalls_ClimbingQualityRatings_May",
                        column: x => x.MaySeasonalClimbingQualityRatingID,
                        principalTable: "ClimbingQualityRatings",
                        principalColumn: "ID");
                    table.ForeignKey(
                        name: "FK_RockClimbingWalls_ClimbingQualityRatings_Nov",
                        column: x => x.NovSeasonalClimbingQualityRatingID,
                        principalTable: "ClimbingQualityRatings",
                        principalColumn: "ID");
                    table.ForeignKey(
                        name: "FK_RockClimbingWalls_ClimbingQualityRatings_Oct",
                        column: x => x.OctSeasonalClimbingQualityRatingID,
                        principalTable: "ClimbingQualityRatings",
                        principalColumn: "ID");
                    table.ForeignKey(
                        name: "FK_RockClimbingWalls_ClimbingQualityRatings_Sep",
                        column: x => x.SepSeasonalClimbingQualityRatingID,
                        principalTable: "ClimbingQualityRatings",
                        principalColumn: "ID");
                });

            migrationBuilder.CreateTable(
                name: "UsersAreaFavorites",
                columns: table => new
                {
                    AreaID = table.Column<int>(type: "int", nullable: false),
                    UserID = table.Column<int>(type: "int", nullable: false),
                    Notes = table.Column<string>(type: "varchar(2500)", unicode: false, maxLength: 2500, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__UsersAre__80834EAE76DAF971", x => new { x.UserID, x.AreaID });
                    table.ForeignKey(
                        name: "FK_UsersAreaFavorites_Areas",
                        column: x => x.AreaID,
                        principalTable: "Areas",
                        principalColumn: "ID");
                    table.ForeignKey(
                        name: "FK_UsersAreaFavorites_Users",
                        column: x => x.UserID,
                        principalTable: "ApplicationUsers",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "BoulderingRoutes",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false),
                    ClimbingWallID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__Boulderi__3214EC27A1742EE1", x => x.ID);
                    table.ForeignKey(
                        name: "FK_BoulderingRoutes_ClimbingWalls",
                        column: x => x.ClimbingWallID,
                        principalTable: "RockClimbingWalls",
                        principalColumn: "ID");
                });

            migrationBuilder.CreateTable(
                name: "MountainToRockClimbingWallLinks",
                columns: table => new
                {
                    MountainID = table.Column<int>(type: "int", nullable: false),
                    ClimbingWallsID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__Mountain__CC24E42986BE9C60", x => new { x.MountainID, x.ClimbingWallsID });
                    table.ForeignKey(
                        name: "FK_MountainToRockClimbingWallLinks_ClimbingWalls",
                        column: x => x.ClimbingWallsID,
                        principalTable: "RockClimbingWalls",
                        principalColumn: "ID");
                    table.ForeignKey(
                        name: "FK_MountainToRockClimbingWallLinks_Mountains",
                        column: x => x.MountainID,
                        principalTable: "Mountains",
                        principalColumn: "ID");
                });

            migrationBuilder.CreateTable(
                name: "RockClimbingRoutes",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ClimbingWallID = table.Column<int>(type: "int", nullable: false),
                    TypeID = table.Column<byte>(type: "tinyint", nullable: false),
                    DifficultyID = table.Column<byte>(type: "tinyint", nullable: false),
                    EnglishFullName = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: false),
                    RouteCode = table.Column<string>(type: "char(5)", unicode: false, fixedLength: true, maxLength: 5, nullable: false),
                    Rating = table.Column<byte>(type: "tinyint", nullable: false),
                    HeightInMeters = table.Column<double>(type: "float", nullable: false),
                    HeightInFeet = table.Column<double>(type: "float", nullable: false, computedColumnSql: "((3.28084)*[HeightInMeters])", stored: false),
                    NumberOfPitchs = table.Column<byte>(type: "tinyint", nullable: false),
                    FirstAscent = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: false, defaultValueSql: "('Unknown')"),
                    FirstFreeAscent = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: false, defaultValueSql: "('Unknown')"),
                    SunAM = table.Column<bool>(type: "bit", nullable: false),
                    SunPM = table.Column<bool>(type: "bit", nullable: false),
                    FilteredSun = table.Column<bool>(type: "bit", nullable: false),
                    Sunny = table.Column<bool>(type: "bit", nullable: false),
                    Shady = table.Column<bool>(type: "bit", nullable: false),
                    DriesFast = table.Column<bool>(type: "bit", nullable: false),
                    DryInRain = table.Column<bool>(type: "bit", nullable: false),
                    Windy = table.Column<bool>(type: "bit", nullable: false),
                    ClimbAnglesHaveSlabs = table.Column<bool>(type: "bit", nullable: false),
                    ClimbAnglesHaveVerticals = table.Column<bool>(type: "bit", nullable: false),
                    ClimbAnglesHaveOverHangs = table.Column<bool>(type: "bit", nullable: false),
                    ClimbAnglesHaveRoofs = table.Column<bool>(type: "bit", nullable: false),
                    RockFalls = table.Column<bool>(type: "bit", nullable: false),
                    Seepage = table.Column<bool>(type: "bit", nullable: false),
                    StickClip = table.Column<bool>(type: "bit", nullable: false),
                    Runout = table.Column<bool>(type: "bit", nullable: false),
                    Reachy = table.Column<bool>(type: "bit", nullable: false),
                    Dyno = table.Column<bool>(type: "bit", nullable: false),
                    Pumpy = table.Column<bool>(type: "bit", nullable: false),
                    Techy = table.Column<bool>(type: "bit", nullable: false),
                    Power = table.Column<bool>(type: "bit", nullable: false),
                    PockSlashHole = table.Column<bool>(type: "bit", nullable: false),
                    Crimpy = table.Column<bool>(type: "bit", nullable: false),
                    Slopey = table.Column<bool>(type: "bit", nullable: false),
                    SeatStart = table.Column<bool>(type: "bit", nullable: false),
                    Info = table.Column<string>(type: "varchar(5000)", unicode: false, maxLength: 5000, nullable: true),
                    ThumbPictureBytes = table.Column<byte[]>(type: "varbinary(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__RockClim__3214EC276BCC0FD0", x => x.ID);
                    table.ForeignKey(
                        name: "FK_RockClimbingRoutes_RockClimbingDifficulties",
                        column: x => x.DifficultyID,
                        principalTable: "RockClimbingDifficulties",
                        principalColumn: "ID");
                    table.ForeignKey(
                        name: "FK_RockClimbingRoutes_RockClimbingWalls",
                        column: x => x.ClimbingWallID,
                        principalTable: "RockClimbingWalls",
                        principalColumn: "ID");
                    table.ForeignKey(
                        name: "FK_RockClimbingRoutes_RockWallClimbingTypes",
                        column: x => x.TypeID,
                        principalTable: "RockClimbingTypes",
                        principalColumn: "ID");
                });

            migrationBuilder.CreateTable(
                name: "RockClimbingWallGeoFenceNodes",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ClimbingWallID = table.Column<int>(type: "int", nullable: false),
                    Latitude = table.Column<double>(type: "float", nullable: false),
                    Longitude = table.Column<double>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__RockClim__3214EC27FF46A267", x => x.ID);
                    table.ForeignKey(
                        name: "FK_RockClimbingWallGeoFenceNodes_RockClimbingWalls",
                        column: x => x.ClimbingWallID,
                        principalTable: "RockClimbingWalls",
                        principalColumn: "ID");
                });

            migrationBuilder.CreateTable(
                name: "UsersRockClimbingWallFavorites",
                columns: table => new
                {
                    RockClimbingWallID = table.Column<int>(type: "int", nullable: false),
                    UserID = table.Column<int>(type: "int", nullable: false),
                    Notes = table.Column<string>(type: "varchar(2500)", unicode: false, maxLength: 2500, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__UsersRoc__35FF1B6CC0138FFE", x => new { x.UserID, x.RockClimbingWallID });
                    table.ForeignKey(
                        name: "FK_UsersWallFavorites_ClimbingWalls",
                        column: x => x.RockClimbingWallID,
                        principalTable: "RockClimbingWalls",
                        principalColumn: "ID");
                    table.ForeignKey(
                        name: "FK_UsersWallFavorites_Users",
                        column: x => x.UserID,
                        principalTable: "ApplicationUsers",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "RockClimbingRoutesToGearLinks",
                columns: table => new
                {
                    RockClimbingRoutesID = table.Column<int>(type: "int", nullable: false),
                    GearSizeID = table.Column<byte>(type: "tinyint", nullable: false),
                    NumberRequired = table.Column<short>(type: "smallint", nullable: false, defaultValueSql: "((1))")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__RockClim__C3324E3A162DD9B1", x => new { x.RockClimbingRoutesID, x.GearSizeID });
                    table.ForeignKey(
                        name: "FK_RockClimbingRoutesGearLinkingTable_GearSizeID",
                        column: x => x.GearSizeID,
                        principalTable: "GearSizes",
                        principalColumn: "ID");
                    table.ForeignKey(
                        name: "FK_RockClimbingRoutesGearLinkingTable_RockClimbingRoutes",
                        column: x => x.RockClimbingRoutesID,
                        principalTable: "RockClimbingRoutes",
                        principalColumn: "ID");
                });

            migrationBuilder.CreateTable(
                name: "UsersRockClimbComments",
                columns: table => new
                {
                    CommentID = table.Column<byte>(type: "tinyint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RockClimbingRoutesID = table.Column<int>(type: "int", nullable: false),
                    UserID = table.Column<int>(type: "int", nullable: false),
                    Time = table.Column<DateTime>(type: "datetime", nullable: false, defaultValueSql: "(getdate())"),
                    Comments = table.Column<string>(type: "varchar(2500)", unicode: false, maxLength: 2500, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__UsersRoc__C3B4DFAA253AD024", x => x.CommentID);
                    table.ForeignKey(
                        name: "FK_UsersRockClimbComments_RockClimbingRoutes",
                        column: x => x.RockClimbingRoutesID,
                        principalTable: "RockClimbingRoutes",
                        principalColumn: "ID");
                    table.ForeignKey(
                        name: "FK_UsersRockClimbComments_Users",
                        column: x => x.UserID,
                        principalTable: "ApplicationUsers",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "UsersRockClimbRouteFavorites",
                columns: table => new
                {
                    RockClimbingRoutesID = table.Column<int>(type: "int", nullable: false),
                    UserID = table.Column<int>(type: "int", nullable: false),
                    Notes = table.Column<string>(type: "varchar(2500)", unicode: false, maxLength: 2500, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__UsersRoc__C5CBB65FA1853CBF", x => new { x.UserID, x.RockClimbingRoutesID });
                    table.ForeignKey(
                        name: "FK_UsersRockClimbRouteFavorites_ApplicationUsers",
                        column: x => x.UserID,
                        principalTable: "ApplicationUsers",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_UsersRockClimbRouteFavorites_RockClimbingRoutes",
                        column: x => x.RockClimbingRoutesID,
                        principalTable: "RockClimbingRoutes",
                        principalColumn: "ID");
                });

            migrationBuilder.CreateTable(
                name: "UsersRockClimbs",
                columns: table => new
                {
                    ClimbID = table.Column<byte>(type: "tinyint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RockClimbingRoutesID = table.Column<int>(type: "int", nullable: false),
                    UserID = table.Column<int>(type: "int", nullable: false),
                    Time = table.Column<DateTime>(type: "datetime", nullable: false, defaultValueSql: "(getdate())"),
                    Comments = table.Column<string>(type: "varchar(2500)", unicode: false, maxLength: 2500, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__UsersRoc__2FC3D4C018D82566", x => x.ClimbID);
                    table.ForeignKey(
                        name: "FK_UsersRockClimbTracker_RockClimbingRoutes",
                        column: x => x.RockClimbingRoutesID,
                        principalTable: "RockClimbingRoutes",
                        principalColumn: "ID");
                    table.ForeignKey(
                        name: "FK_UsersRockClimbTracker_Users",
                        column: x => x.UserID,
                        principalTable: "ApplicationUsers",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "RoleNameIndex",
                table: "ApplicationRoles",
                column: "Name",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_UserId",
                table: "ApplicationUserClaims",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_UserId",
                table: "ApplicationUserLogins",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_RoleId",
                table: "ApplicationUserRoles",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "IX_UserId",
                table: "ApplicationUserRoles",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_ApplicationUsers_CountryId",
                table: "ApplicationUsers",
                column: "CountryId");

            migrationBuilder.CreateIndex(
                name: "IX_ApplicationUsers_ProvinceId",
                table: "ApplicationUsers",
                column: "ProvinceId");

            migrationBuilder.CreateIndex(
                name: "UQ_ApplicationUsers_Email",
                table: "ApplicationUsers",
                column: "Email",
                unique: true,
                filter: "[Email] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "UQ_ApplicationUsers_UserName",
                table: "ApplicationUsers",
                column: "UserName",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_AreaGeoFenceNodes_AreaID",
                table: "AreaGeoFenceNodes",
                column: "AreaID");

            migrationBuilder.CreateIndex(
                name: "UQ_Areas_Code",
                table: "Areas",
                columns: new[] { "ZoneID", "AreaCode" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "UQ_Areas_Name",
                table: "Areas",
                columns: new[] { "ZoneID", "EnglishFullName" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_BoulderingRoutes_ClimbingWallID",
                table: "BoulderingRoutes",
                column: "ClimbingWallID");

            migrationBuilder.CreateIndex(
                name: "UQ_Countries_Code",
                table: "Countries",
                column: "CountryCode",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "UQ_Countries_Name",
                table: "Countries",
                column: "EnglishFullName",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_DistrictGeoFenceNodes_DistrictID",
                table: "DistrictGeoFenceNodes",
                column: "DistrictID");

            migrationBuilder.CreateIndex(
                name: "UQ_Districts_Code",
                table: "Districts",
                columns: new[] { "RegionID", "DistrictCode" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "UQ_Districts_Name",
                table: "Districts",
                columns: new[] { "RegionID", "EnglishFullName" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_GearSizes_GearID",
                table: "GearSizes",
                column: "GearID");

            migrationBuilder.CreateIndex(
                name: "IX_GearToGearTypeLinks_GearID",
                table: "GearToGearTypeLinks",
                column: "GearID");

            migrationBuilder.CreateIndex(
                name: "IX_GroupMessagingMembers_GroupMessagingID",
                table: "GroupMessagingMembers",
                column: "GroupMessagingID");

            migrationBuilder.CreateIndex(
                name: "IX_GroupMessagingMessages_GroupMessagingID",
                table: "GroupMessagingMessages",
                column: "GroupMessagingID");

            migrationBuilder.CreateIndex(
                name: "IX_GroupMessagingMessages_UserID",
                table: "GroupMessagingMessages",
                column: "UserID");

            migrationBuilder.CreateIndex(
                name: "IX_MountainToRockClimbingWallLinks_ClimbingWallsID",
                table: "MountainToRockClimbingWallLinks",
                column: "ClimbingWallsID");

            migrationBuilder.CreateIndex(
                name: "UQ_ProvincesOrStates_Code",
                table: "ProvincesOrStates",
                columns: new[] { "CountryID", "RegionCode" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "UQ_ProvincesOrStates_Name",
                table: "ProvincesOrStates",
                columns: new[] { "CountryID", "EnglishFullName" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_RegionGeoFenceNodes_RegionID",
                table: "RegionGeoFenceNodes",
                column: "RegionID");

            migrationBuilder.CreateIndex(
                name: "UQ_Region_Code",
                table: "Regions",
                columns: new[] { "ProvinceOrStateID", "RegionCode" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "UQ_Region_Name",
                table: "Regions",
                columns: new[] { "ProvinceOrStateID", "EnglishFullName" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_RockClimbingRoutes_DifficultyID",
                table: "RockClimbingRoutes",
                column: "DifficultyID");

            migrationBuilder.CreateIndex(
                name: "IX_RockClimbingRoutes_TypeID",
                table: "RockClimbingRoutes",
                column: "TypeID");

            migrationBuilder.CreateIndex(
                name: "UQ_RockClimbingRoutes_Code",
                table: "RockClimbingRoutes",
                columns: new[] { "ClimbingWallID", "RouteCode" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "UQ_RockClimbingRoutes_Name",
                table: "RockClimbingRoutes",
                columns: new[] { "ClimbingWallID", "EnglishFullName" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_RockClimbingRoutesToGearLinks_GearSizeID",
                table: "RockClimbingRoutesToGearLinks",
                column: "GearSizeID");

            migrationBuilder.CreateIndex(
                name: "IX_RockClimbingWallGeoFenceNodes_ClimbingWallID",
                table: "RockClimbingWallGeoFenceNodes",
                column: "ClimbingWallID");

            migrationBuilder.CreateIndex(
                name: "IX_RockClimbingWalls_AprSeasonalBusyRatingID",
                table: "RockClimbingWalls",
                column: "AprSeasonalBusyRatingID");

            migrationBuilder.CreateIndex(
                name: "IX_RockClimbingWalls_AprSeasonalClimbingQualityRatingID",
                table: "RockClimbingWalls",
                column: "AprSeasonalClimbingQualityRatingID");

            migrationBuilder.CreateIndex(
                name: "IX_RockClimbingWalls_AugSeasonalBusyRatingID",
                table: "RockClimbingWalls",
                column: "AugSeasonalBusyRatingID");

            migrationBuilder.CreateIndex(
                name: "IX_RockClimbingWalls_AugSeasonalClimbingQualityRatingID",
                table: "RockClimbingWalls",
                column: "AugSeasonalClimbingQualityRatingID");

            migrationBuilder.CreateIndex(
                name: "IX_RockClimbingWalls_DecSeasonalBusyRatingID",
                table: "RockClimbingWalls",
                column: "DecSeasonalBusyRatingID");

            migrationBuilder.CreateIndex(
                name: "IX_RockClimbingWalls_DecSeasonalClimbingQualityRatingID",
                table: "RockClimbingWalls",
                column: "DecSeasonalClimbingQualityRatingID");

            migrationBuilder.CreateIndex(
                name: "IX_RockClimbingWalls_FebSeasonalBusyRatingID",
                table: "RockClimbingWalls",
                column: "FebSeasonalBusyRatingID");

            migrationBuilder.CreateIndex(
                name: "IX_RockClimbingWalls_FebSeasonalClimbingQualityRatingID",
                table: "RockClimbingWalls",
                column: "FebSeasonalClimbingQualityRatingID");

            migrationBuilder.CreateIndex(
                name: "IX_RockClimbingWalls_JanSeasonalBusyRatingID",
                table: "RockClimbingWalls",
                column: "JanSeasonalBusyRatingID");

            migrationBuilder.CreateIndex(
                name: "IX_RockClimbingWalls_JanSeasonalClimbingQualityRatingID",
                table: "RockClimbingWalls",
                column: "JanSeasonalClimbingQualityRatingID");

            migrationBuilder.CreateIndex(
                name: "IX_RockClimbingWalls_JulSeasonalBusyRatingID",
                table: "RockClimbingWalls",
                column: "JulSeasonalBusyRatingID");

            migrationBuilder.CreateIndex(
                name: "IX_RockClimbingWalls_JulSeasonalClimbingQualityRatingID",
                table: "RockClimbingWalls",
                column: "JulSeasonalClimbingQualityRatingID");

            migrationBuilder.CreateIndex(
                name: "IX_RockClimbingWalls_JunSeasonalBusyRatingID",
                table: "RockClimbingWalls",
                column: "JunSeasonalBusyRatingID");

            migrationBuilder.CreateIndex(
                name: "IX_RockClimbingWalls_JunSeasonalClimbingQualityRatingID",
                table: "RockClimbingWalls",
                column: "JunSeasonalClimbingQualityRatingID");

            migrationBuilder.CreateIndex(
                name: "IX_RockClimbingWalls_MarSeasonalBusyRatingID",
                table: "RockClimbingWalls",
                column: "MarSeasonalBusyRatingID");

            migrationBuilder.CreateIndex(
                name: "IX_RockClimbingWalls_MarSeasonalClimbingQualityRatingID",
                table: "RockClimbingWalls",
                column: "MarSeasonalClimbingQualityRatingID");

            migrationBuilder.CreateIndex(
                name: "IX_RockClimbingWalls_MaySeasonalBusyRatingID",
                table: "RockClimbingWalls",
                column: "MaySeasonalBusyRatingID");

            migrationBuilder.CreateIndex(
                name: "IX_RockClimbingWalls_MaySeasonalClimbingQualityRatingID",
                table: "RockClimbingWalls",
                column: "MaySeasonalClimbingQualityRatingID");

            migrationBuilder.CreateIndex(
                name: "IX_RockClimbingWalls_NovSeasonalBusyRatingID",
                table: "RockClimbingWalls",
                column: "NovSeasonalBusyRatingID");

            migrationBuilder.CreateIndex(
                name: "IX_RockClimbingWalls_NovSeasonalClimbingQualityRatingID",
                table: "RockClimbingWalls",
                column: "NovSeasonalClimbingQualityRatingID");

            migrationBuilder.CreateIndex(
                name: "IX_RockClimbingWalls_OctSeasonalBusyRatingID",
                table: "RockClimbingWalls",
                column: "OctSeasonalBusyRatingID");

            migrationBuilder.CreateIndex(
                name: "IX_RockClimbingWalls_OctSeasonalClimbingQualityRatingID",
                table: "RockClimbingWalls",
                column: "OctSeasonalClimbingQualityRatingID");

            migrationBuilder.CreateIndex(
                name: "IX_RockClimbingWalls_SepSeasonalBusyRatingID",
                table: "RockClimbingWalls",
                column: "SepSeasonalBusyRatingID");

            migrationBuilder.CreateIndex(
                name: "IX_RockClimbingWalls_SepSeasonalClimbingQualityRatingID",
                table: "RockClimbingWalls",
                column: "SepSeasonalClimbingQualityRatingID");

            migrationBuilder.CreateIndex(
                name: "UQ_RockClimbingWalls_Code",
                table: "RockClimbingWalls",
                columns: new[] { "AreaID", "WallCode" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "UQ_RockClimbingWalls_Name",
                table: "RockClimbingWalls",
                columns: new[] { "AreaID", "EnglishFullName" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_UserDirectMessages_UserFromId",
                table: "UserDirectMessages",
                column: "UserFromId");

            migrationBuilder.CreateIndex(
                name: "IX_UserDirectMessages_UserToId",
                table: "UserDirectMessages",
                column: "UserToId");

            migrationBuilder.CreateIndex(
                name: "IX_UserFriends_UserToID",
                table: "UserFriends",
                column: "UserToID");

            migrationBuilder.CreateIndex(
                name: "IX_UsersAreaFavorites_AreaID",
                table: "UsersAreaFavorites",
                column: "AreaID");

            migrationBuilder.CreateIndex(
                name: "IX_UsersRockClimbComments_RockClimbingRoutesID",
                table: "UsersRockClimbComments",
                column: "RockClimbingRoutesID");

            migrationBuilder.CreateIndex(
                name: "IX_UsersRockClimbComments_UserID",
                table: "UsersRockClimbComments",
                column: "UserID");

            migrationBuilder.CreateIndex(
                name: "IX_UsersRockClimbingWallFavorites_RockClimbingWallID",
                table: "UsersRockClimbingWallFavorites",
                column: "RockClimbingWallID");

            migrationBuilder.CreateIndex(
                name: "IX_UsersRockClimbRouteFavorites_RockClimbingRoutesID",
                table: "UsersRockClimbRouteFavorites",
                column: "RockClimbingRoutesID");

            migrationBuilder.CreateIndex(
                name: "IX_UsersRockClimbs_RockClimbingRoutesID",
                table: "UsersRockClimbs",
                column: "RockClimbingRoutesID");

            migrationBuilder.CreateIndex(
                name: "IX_UsersRockClimbs_UserID",
                table: "UsersRockClimbs",
                column: "UserID");

            migrationBuilder.CreateIndex(
                name: "IX_ZoneGeoFenceNodes_ZoneID",
                table: "ZoneGeoFenceNodes",
                column: "ZoneID");

            migrationBuilder.CreateIndex(
                name: "UQ_Zones_Code",
                table: "Zones",
                columns: new[] { "DistrictID", "ZoneCode" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "UQ_Zones_Name",
                table: "Zones",
                columns: new[] { "DistrictID", "EnglishFullName" },
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ApplicationUserClaims");

            migrationBuilder.DropTable(
                name: "ApplicationUserLogins");

            migrationBuilder.DropTable(
                name: "ApplicationUserRoles");

            migrationBuilder.DropTable(
                name: "AreaGeoFenceNodes");

            migrationBuilder.DropTable(
                name: "BoulderingRoutes");

            migrationBuilder.DropTable(
                name: "DistrictGeoFenceNodes");

            migrationBuilder.DropTable(
                name: "GearToGearTypeLinks");

            migrationBuilder.DropTable(
                name: "GroupMessagingMembers");

            migrationBuilder.DropTable(
                name: "GroupMessagingMessages");

            migrationBuilder.DropTable(
                name: "IceClimbingRoutes");

            migrationBuilder.DropTable(
                name: "MountainToRockClimbingWallLinks");

            migrationBuilder.DropTable(
                name: "RegionGeoFenceNodes");

            migrationBuilder.DropTable(
                name: "RockClimbingRoutesToGearLinks");

            migrationBuilder.DropTable(
                name: "RockClimbingWallGeoFenceNodes");

            migrationBuilder.DropTable(
                name: "UserDirectMessages");

            migrationBuilder.DropTable(
                name: "UserFriends");

            migrationBuilder.DropTable(
                name: "UsersAreaFavorites");

            migrationBuilder.DropTable(
                name: "UsersRockClimbComments");

            migrationBuilder.DropTable(
                name: "UsersRockClimbingWallFavorites");

            migrationBuilder.DropTable(
                name: "UsersRockClimbRouteFavorites");

            migrationBuilder.DropTable(
                name: "UsersRockClimbs");

            migrationBuilder.DropTable(
                name: "ZoneGeoFenceNodes");

            migrationBuilder.DropTable(
                name: "ApplicationRoles");

            migrationBuilder.DropTable(
                name: "ClimbingTypes");

            migrationBuilder.DropTable(
                name: "GroupMessagingGroups");

            migrationBuilder.DropTable(
                name: "Mountains");

            migrationBuilder.DropTable(
                name: "GearSizes");

            migrationBuilder.DropTable(
                name: "RockClimbingRoutes");

            migrationBuilder.DropTable(
                name: "ApplicationUsers");

            migrationBuilder.DropTable(
                name: "Gear");

            migrationBuilder.DropTable(
                name: "RockClimbingDifficulties");

            migrationBuilder.DropTable(
                name: "RockClimbingWalls");

            migrationBuilder.DropTable(
                name: "RockClimbingTypes");

            migrationBuilder.DropTable(
                name: "Areas");

            migrationBuilder.DropTable(
                name: "BusyRatings");

            migrationBuilder.DropTable(
                name: "ClimbingQualityRatings");

            migrationBuilder.DropTable(
                name: "Zones");

            migrationBuilder.DropTable(
                name: "Districts");

            migrationBuilder.DropTable(
                name: "Regions");

            migrationBuilder.DropTable(
                name: "ProvincesOrStates");

            migrationBuilder.DropTable(
                name: "Countries");
        }
    }
}
