CREATE TABLE [dbo].[UsersRockClimbs](
	[RockClimbingRoutesID] [int] NOT NULL,
	[UserID] [int] NOT NULL,
	[ClimbID] [tinyint] NOT NULL IDENTITY(0,1) PRIMARY KEY,
	[Time] [datetime] NOT NULL DEFAULT (getdate()),
	[Comments] [varchar](2500) NULL DEFAULT (NULL),

	CONSTRAINT [FK_UsersRockClimbTracker_RockClimbingRoutes] FOREIGN KEY([RockClimbingRoutesID]) REFERENCES [dbo].[RockClimbingRoutes] ([ID]),
	CONSTRAINT [FK_UsersRockClimbTracker_Users] FOREIGN KEY([UserID]) REFERENCES [dbo].[Users] ([ID]),
)