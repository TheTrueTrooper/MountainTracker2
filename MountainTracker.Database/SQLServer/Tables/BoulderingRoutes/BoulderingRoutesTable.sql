CREATE TABLE [dbo].[BoulderingRoutes](
	[ClimbingWallID] int NOT NULL,
	[ID] int NOT NULL PRIMARY KEY, 

    CONSTRAINT [FK_BoulderingRoutes_ClimbingWalls] FOREIGN KEY ([ClimbingWallID]) REFERENCES [dbo].[RockClimbingWalls]([ID]),
)