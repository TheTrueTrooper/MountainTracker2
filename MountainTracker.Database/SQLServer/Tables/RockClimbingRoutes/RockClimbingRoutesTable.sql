﻿CREATE TABLE [dbo].[RockClimbingRoutes](
	[ClimbingWallID] int NOT NULL,
	[TypeID] tinyint NOT NULL,
	[DifficultyID] tinyint NOT NULL,
	[ID] [int] NOT NULL IDENTITY(0,1) PRIMARY KEY,
	[EnglishFullName] varchar(100) NOT NULL,
	[RouteCode] char(5) NOT NULL,
	[Rating] tinyint NOT NULL,
	[HeightInMeters] float NOT NULL,
	[HeightInFeet]  AS ((3.28084)*[HeightInMeters]),
	[NumberOfPitchs] tinyint NOT NULL,
	[FirstAscent] varchar(100) NOT NULL DEFAULT ('Unknown'),
	[FirstFreeAscent] varchar(100) NOT NULL DEFAULT ('Unknown'),
	[SunAM] bit NOT NULL DEFAULT (0),
	[SunPM] bit NOT NULL DEFAULT (0),
	[FilteredSun] bit NOT NULL DEFAULT (0),
	[Sunny] bit NOT NULL DEFAULT (0),
	[Shady] bit NOT NULL DEFAULT (0),
	[DriesFast] bit NOT NULL DEFAULT (0),
	[DryInRain] bit NOT NULL DEFAULT (0),
	[Windy] bit NOT NULL DEFAULT (0),
	[ClimbAnglesHaveSlabs] bit NOT NULL DEFAULT (0),
	[ClimbAnglesHaveVerticals] bit NOT NULL DEFAULT (0),
	[ClimbAnglesHaveOverHangs] bit NOT NULL DEFAULT (0),
	[ClimbAnglesHaveRoofs] bit NOT NULL DEFAULT (0),
	[RockFalls] bit NOT NULL DEFAULT (0),
	[Seepage] bit NOT NULL DEFAULT (0),
	[StickClip] bit NOT NULL DEFAULT (0),
	[Runout] bit NOT NULL DEFAULT (0),
	[Reachy] bit NOT NULL DEFAULT (0),
	[Dyno] bit NOT NULL DEFAULT (0),
	[Pumpy] bit NOT NULL DEFAULT (0),
	[Techy] bit NOT NULL DEFAULT (0),
	[Power] bit NOT NULL DEFAULT (0),
	[PockSlashHole] bit NOT NULL DEFAULT (0),
	[Crimpy] bit NOT NULL DEFAULT (0),
	[Slopey] bit NOT NULL DEFAULT (0),
	[SeatStart] bit NOT NULL DEFAULT (0),
	[Info] varchar(5000) NULL,
	[ThumbPictureBytes] varbinary(max) NULL,

	CONSTRAINT [UQ_RockClimbingRoutes_Code] UNIQUE NONCLUSTERED ([ClimbingWallID], [RouteCode]),
	CONSTRAINT [UQ_RockClimbingRoutes_Name] UNIQUE NONCLUSTERED ([ClimbingWallID], [EnglishFullName]),

	CONSTRAINT [FK_RockClimbingRoutes_RockClimbingWalls] FOREIGN KEY ([ClimbingWallID]) REFERENCES [dbo].[RockClimbingWalls] ([ID]),
	CONSTRAINT [FK_RockClimbingRoutes_RockWallClimbingTypes] FOREIGN KEY([TypeID]) REFERENCES [dbo].[RockClimbingTypes] ([ID]),
)