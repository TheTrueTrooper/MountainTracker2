CREATE TABLE [dbo].[GroupMessagingMessages](
	[UserId] nvarchar(450) NOT NULL,
	[GroupMessagingId] int NOT NULL,
	[Id] int NOT NULL IDENTITY(0,1) PRIMARY KEY,
	[Message] nvarchar(1000) NOT NULL,
	[Time] datetime NOT NULL DEFAULT (getdate()),

	CONSTRAINT [FK_GroupMessagingMessages_GroupMessagingGroups] FOREIGN KEY([GroupMessagingId]) REFERENCES [dbo].[GroupMessagingGroups] ([Id]),
	CONSTRAINT [FK_GroupMessagingMessages_Users] FOREIGN KEY([UserId]) REFERENCES [dbo].[AspNetUsers] ([Id])
)