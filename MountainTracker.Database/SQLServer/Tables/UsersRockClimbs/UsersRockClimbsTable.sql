CREATE TABLE [dbo].[UsersRockClimbs](
	[RockClimbingRoutesId] int NOT NULL,
	[UserId] nvarchar(450) NOT NULL,
	[ClimbId] int NOT NULL IDENTITY(0,1) PRIMARY KEY,
	[Time] datetime NOT NULL DEFAULT (getdate()),
	[Comments] varchar(2500) NULL DEFAULT (NULL),

	CONSTRAINT [FK_UsersRockClimbTracker_RockClimbingRoutes] FOREIGN KEY([RockClimbingRoutesId]) REFERENCES [dbo].[RockClimbingRoutes] ([Id]),
	CONSTRAINT [FK_UsersRockClimbTracker_Users] FOREIGN KEY([UserId]) REFERENCES [dbo].[AspNetUsers] ([Id]),
)