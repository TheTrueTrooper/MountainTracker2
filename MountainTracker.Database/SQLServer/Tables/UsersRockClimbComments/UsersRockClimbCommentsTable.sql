CREATE TABLE [dbo].[UsersRockClimbComments](
	[RockClimbingRoutesID] [int] NOT NULL,
	[UserID] [int] NOT NULL,
	[CommentID] [tinyint] NOT NULL IDENTITY(0,1) PRIMARY KEY,
	[Time] [datetime] NOT NULL DEFAULT (getdate()),
	[Comments] [varchar](2500) NOT NULL,

	CONSTRAINT [FK_UsersRockClimbComments_RockClimbingRoutes] FOREIGN KEY([RockClimbingRoutesID]) REFERENCES [dbo].[RockClimbingRoutes] ([ID]),
	CONSTRAINT [FK_UsersRockClimbComments_Users] FOREIGN KEY([UserID]) REFERENCES [dbo].[Users] ([ID]),
)