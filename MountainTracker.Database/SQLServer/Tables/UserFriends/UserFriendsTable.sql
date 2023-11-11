CREATE TABLE [dbo].[UserFriends](
	[UserFromID] [int] NOT NULL,
	[UserToID] [int] NOT NULL,
	[RequestCreationDate] [datetime] NOT NULL DEFAULT (getdate()),
	[RequestAcceptDate] [datetime] NULL DEFAULT (NULL),
	[Accepted] [bit] NOT NULL DEFAULT (0),

	PRIMARY KEY ([UserFromID], [UserToID]),

	CONSTRAINT [FK_UserFriends_Users_From] FOREIGN KEY([UserFromID]) REFERENCES [dbo].[Users] ([ID]),
	CONSTRAINT [FK_UserFriends_Users_To] FOREIGN KEY([UserToID]) REFERENCES [dbo].[Users] ([ID]),

	CONSTRAINT [CK_UserFriends_NoFriendSelf] CHECK  ((NOT [UserFromID]=[UserToID]))
)
