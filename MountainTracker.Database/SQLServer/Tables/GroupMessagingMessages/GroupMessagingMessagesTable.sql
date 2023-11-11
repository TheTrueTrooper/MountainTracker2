CREATE TABLE [dbo].[GroupMessagingMessages](
	[UserID] int NOT NULL,
	[GroupMessagingID] int NOT NULL,
	[ID] int NOT NULL IDENTITY(0,1) PRIMARY KEY,
	[Message] nvarchar(1000) NOT NULL,
	[Time] datetime NOT NULL DEFAULT (getdate()),

	CONSTRAINT [FK_GroupMessagingMessages_GroupMessagingGroups] FOREIGN KEY([GroupMessagingID]) REFERENCES [dbo].[GroupMessagingGroups] ([ID]),
	CONSTRAINT [FK_GroupMessagingMessages_Users] FOREIGN KEY([UserID]) REFERENCES [dbo].[Users] ([ID])
)