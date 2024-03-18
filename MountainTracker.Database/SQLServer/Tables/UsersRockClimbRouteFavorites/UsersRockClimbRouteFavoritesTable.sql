CREATE TABLE [dbo].[UsersRockClimbRouteFavorites](
	[RockClimbingRoutesId] int NOT NULL,
	[UserId] int NOT NULL,
	[Notes] varchar(2500) NULL,

	PRIMARY KEY ([UserId], [RockClimbingRoutesId]),

	CONSTRAINT [FK_UsersRockClimbRouteFavorites_RockClimbingRoutes] FOREIGN KEY([RockClimbingRoutesId]) REFERENCES [dbo].[RockClimbingRoutes] ([Id]),
	--CONSTRAINT [FK_UsersRockClimbRouteFavorites_ApplicationUsers] FOREIGN KEY([UserId]) REFERENCES [dbo].[ApplicationUsers] ([Id]),
)