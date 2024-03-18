CREATE TABLE [dbo].[UsersRockClimbingWallFavorites](
	[RockClimbingWallId] int NOT NULL,
	[UserId] int NOT NULL,
	[Notes] varchar(2500) NULL,
	
	PRIMARY KEY ([UserId], [RockClimbingWallId]),

	CONSTRAINT [FK_UsersWallFavorites_ClimbingWalls] FOREIGN KEY([RockClimbingWallId]) REFERENCES [dbo].[RockClimbingWalls] ([Id]),
	--CONSTRAINT [FK_UsersWallFavorites_Users] FOREIGN KEY([UserId]) REFERENCES [dbo].[ApplicationUsers] ([Id]),
)