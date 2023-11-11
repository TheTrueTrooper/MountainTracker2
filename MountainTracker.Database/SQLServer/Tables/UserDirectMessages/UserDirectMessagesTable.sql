CREATE TABLE [dbo].[UserDirectMessages](
	[UserFromID] [int] NOT NULL,
	[UserToID] [int] NOT NULL,
	[DirectMessageID] [int] NOT NULL IDENTITY(1,1) PRIMARY KEY,
	[Time] [datetime] NOT NULL DEFAULT (getdate()),
	[Seen] [bit] NOT NULL DEFAULT (0),
	[Message] [varchar](2500) NOT NULL,

	CONSTRAINT [FK_UserDirectMessages_Users_From] FOREIGN KEY([UserFromID]) REFERENCES [dbo].[Users] ([ID]),
	CONSTRAINT [FK_UserDirectMessages_Users_To] FOREIGN KEY([UserToID]) REFERENCES [dbo].[Users] ([ID]),

	CONSTRAINT [CK_UserDirectMessages_NoMessageSelf] CHECK  (NOT [UserFromID]=[UserToID]),
)