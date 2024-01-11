CREATE TABLE [dbo].[UsersRockClimbComments](
	[RockClimbingRoutesId] [int] NOT NULL,
	[UserId] [int] NOT NULL,
	[CommentId] [tinyint] NOT NULL IDENTITY(0,1) PRIMARY KEY,
	[Time] [datetime] NOT NULL DEFAULT (getdate()),
	[Comments] [varchar](2500) NOT NULL,

	CONSTRAINT [FK_UsersRockClimbComments_RockClimbingRoutes] FOREIGN KEY([RockClimbingRoutesId]) REFERENCES [dbo].[RockClimbingRoutes] ([Id]),
	CONSTRAINT [FK_UsersRockClimbComments_Users] FOREIGN KEY([UserID]) REFERENCES [dbo].[ApplicationUsers] ([Id]),
)