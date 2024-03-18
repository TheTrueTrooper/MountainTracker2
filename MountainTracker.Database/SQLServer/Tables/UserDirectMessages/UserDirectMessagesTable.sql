CREATE TABLE [dbo].[UserDirectMessages](
	[UserFromId] int NOT NULL,
	[UserToId] int NOT NULL,
	[DirectMessageId] int NOT NULL IDENTITY(0,1) PRIMARY KEY,
	[Time] datetime NOT NULL DEFAULT (getdate()),
	[Seen] bit NOT NULL DEFAULT (0),
	[Message] varchar(2500) NOT NULL,

	--CONSTRAINT [FK_UserDirectMessages_Users_From] FOREIGN KEY([UserFromId]) REFERENCES [dbo].[ApplicationUsers] ([Id]),
	--CONSTRAINT [FK_UserDirectMessages_Users_To] FOREIGN KEY([UserToId]) REFERENCES [dbo].[ApplicationUsers] ([Id]),

	CONSTRAINT [CK_UserDirectMessages_NoMessageSelf] CHECK  (NOT [UserFromId]=[UserToId]),
)