CREATE TABLE [dbo].[UsersAreaFavorites](
	[AreaID] [int] NOT NULL,
	[UserID] [int] NOT NULL,
	[Notes] [varchar](2500) NULL,

	PRIMARY KEY ([UserID], [AreaID]),

	CONSTRAINT [FK_UsersAreaFavorites_Users] FOREIGN KEY([UserID])REFERENCES [dbo].[Users] ([ID]),
	CONSTRAINT [FK_UsersAreaFavorites_ZoneAreas] FOREIGN KEY([AreaID])REFERENCES [dbo].[ZoneAreas] ([ID]),
)