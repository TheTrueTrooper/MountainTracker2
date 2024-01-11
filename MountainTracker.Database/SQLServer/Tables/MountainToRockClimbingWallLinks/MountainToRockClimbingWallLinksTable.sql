CREATE TABLE [dbo].[MountainToRockClimbingWallLinks](
	[MountainId] int NOT NULL,
	[ClimbingWallsId] int NOT NULL,

	PRIMARY KEY ([MountainId], [ClimbingWallsId]),

	CONSTRAINT [FK_MountainToRockClimbingWallLinks_ClimbingWalls] FOREIGN KEY([ClimbingWallsId]) REFERENCES [dbo].[RockClimbingWalls] ([Id]),
	CONSTRAINT [FK_MountainToRockClimbingWallLinks_Mountains] FOREIGN KEY([MountainId]) REFERENCES [dbo].[Mountains] ([Id]),
)