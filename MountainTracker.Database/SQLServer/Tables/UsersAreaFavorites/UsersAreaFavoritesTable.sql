CREATE TABLE [dbo].[UsersAreaFavorites](
	[AreaId] int NOT NULL,
	[UserId] nvarchar(450) NOT NULL,
	[Notes] varchar(2500) NULL,

	PRIMARY KEY ([UserId], [AreaId]),

	CONSTRAINT [FK_UsersAreaFavorites_Users] FOREIGN KEY([UserId]) REFERENCES [dbo].[AspNetUsers] ([Id]),
	CONSTRAINT [FK_UsersAreaFavorites_Areas] FOREIGN KEY([AreaId])REFERENCES [dbo].[Areas] ([Id]),
)