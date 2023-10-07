CREATE TABLE [dbo].[UsersRockClimbingWallFavorites](
	[RockClimbingWallID] [int] NOT NULL,
	[UserID] [int] NOT NULL,
	[Notes] [varchar](2500) NULL,
	
	PRIMARY KEY ([UserID], [RockClimbingWallID]),

	CONSTRAINT [FK_UsersWallFavorites_ClimbingWalls] FOREIGN KEY([RockClimbingWallID]) REFERENCES [dbo].[RockClimbingWalls] ([ID]),
	CONSTRAINT [FK_UsersWallFavorites_Users] FOREIGN KEY([UserID]) REFERENCES [dbo].[Users] ([ID]),
)