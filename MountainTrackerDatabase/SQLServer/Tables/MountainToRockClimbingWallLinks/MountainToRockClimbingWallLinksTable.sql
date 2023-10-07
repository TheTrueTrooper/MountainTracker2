CREATE TABLE [dbo].[MountainToRockClimbingWallLinks](
	[MountainID] int NOT NULL,
	[ClimbingWallsID] int NOT NULL,

	PRIMARY KEY ([MountainID], [ClimbingWallsID]),

	CONSTRAINT [FK_MountainToRockClimbingWallLinks_ClimbingWalls] FOREIGN KEY([ClimbingWallsID]) REFERENCES [dbo].[RockClimbingWalls] ([ID]),
	CONSTRAINT [FK_MountainToRockClimbingWallLinks_Mountains] FOREIGN KEY([MountainID]) REFERENCES [dbo].[Mountains] ([ID]),
)