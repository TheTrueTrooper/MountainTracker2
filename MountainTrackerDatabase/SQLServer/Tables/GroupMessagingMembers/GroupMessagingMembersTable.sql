CREATE TABLE [dbo].[GroupMessagingMembers](
	[UserID] int NOT NULL,
	[GroupMessagingID] int NOT NULL,
	[TimeInvited] datetime NOT NULL DEFAULT (getdate()),
	[TimeJoined] datetime NULL DEFAULT (getdate()),
	[AcceptedInvite] bit NOT NULL DEFAULT (0),
	[TimeLastSeen] datetime NOT NULL DEFAULT (getdate()),

    PRIMARY KEY CLUSTERED ([UserID], [GroupMessagingID]),

	CONSTRAINT [FK_GroupMessagingMembers_GroupMessaging] FOREIGN KEY([GroupMessagingID]) REFERENCES [dbo].[GroupMessagingGroups] ([ID]),
	CONSTRAINT [FK_GroupMessagingMembers_Users] FOREIGN KEY([UserID]) REFERENCES [dbo].[Users] ([ID]),
)