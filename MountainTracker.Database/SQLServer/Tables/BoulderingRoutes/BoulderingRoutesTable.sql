CREATE TABLE [dbo].[BoulderingRoutes](
	[ClimbingWallId] int NOT NULL,
	[Id] int NOT NULL PRIMARY KEY, 

    CONSTRAINT [FK_BoulderingRoutes_ClimbingWalls] FOREIGN KEY ([ClimbingWallId]) REFERENCES [dbo].[RockClimbingWalls]([Id]),
)