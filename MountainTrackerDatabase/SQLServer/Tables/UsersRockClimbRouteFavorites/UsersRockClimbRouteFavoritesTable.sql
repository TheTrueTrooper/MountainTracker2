CREATE TABLE [dbo].[UsersRockClimbRouteFavorites](
	[RockClimbingRoutesID] [int] NOT NULL,
	[UserID] [int] NOT NULL,
	[Notes] [varchar](2500) NULL,

	PRIMARY KEY ([UserID], [RockClimbingRoutesID]),

	CONSTRAINT [FK_UsersRockClimbRouteFavorites_RockClimbingRoutes] FOREIGN KEY([RockClimbingRoutesID]) REFERENCES [dbo].[RockClimbingRoutes] ([ID]),
	CONSTRAINT [FK_UsersRockClimbRouteFavorites_Users] FOREIGN KEY([UserID]) REFERENCES [dbo].[Users] ([ID]),
)