CREATE TABLE [dbo].[UsersRockClimbingWallFavorites](
	[RockClimbingWallId] int NOT NULL,
	[UserId] nvarchar(450) NOT NULL,
	[Notes] varchar(2500) NULL,
	
	PRIMARY KEY ([UserId], [RockClimbingWallId]),

	CONSTRAINT [FK_UsersWallFavorites_ClimbingWalls] FOREIGN KEY([RockClimbingWallId]) REFERENCES [dbo].[RockClimbingWalls] ([Id]),
	CONSTRAINT [FK_UsersRockClimbingWallFavorites_Users] FOREIGN KEY([UserId]) REFERENCES [dbo].[UsersProfiles] ([Id]),
)