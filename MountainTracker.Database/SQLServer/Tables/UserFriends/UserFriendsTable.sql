CREATE TABLE [dbo].[UserFriends](
	[UserFromId] [int] NOT NULL,
	[UserToId] [int] NOT NULL,
	[RequestCreationDate] [datetime] NOT NULL DEFAULT (getdate()),
	[RequestAcceptDate] [datetime] NULL DEFAULT (NULL),
	[Accepted] [bit] NOT NULL DEFAULT (0),

	PRIMARY KEY ([UserFromId], [UserToId]),

	CONSTRAINT [FK_UserFriends_Users_From] FOREIGN KEY([UserFromId]) REFERENCES [dbo].[ApplicationUsers] ([Id]),
	CONSTRAINT [FK_UserFriends_Users_To] FOREIGN KEY([UserToId]) REFERENCES [dbo].[ApplicationUsers] ([Id]),

	CONSTRAINT [CK_UserFriends_NoFriendSelf] CHECK  ((NOT [UserFromId]=[UserToId]))
)
