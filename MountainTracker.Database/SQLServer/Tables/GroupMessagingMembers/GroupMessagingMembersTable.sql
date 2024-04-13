CREATE TABLE [dbo].[GroupMessagingMembers](
	[UserId] nvarchar(450) NOT NULL,
	[GroupMessagingId] int NOT NULL,
	[TimeInvited] datetime NOT NULL DEFAULT (getdate()),
	[TimeJoined] datetime NULL DEFAULT (getdate()),
	[AcceptedInvite] bit NOT NULL DEFAULT (0),
	[TimeLastSeen] datetime NOT NULL DEFAULT (getdate()),

    PRIMARY KEY CLUSTERED ([UserId], [GroupMessagingId]),

	CONSTRAINT [FK_GroupMessagingMembers_GroupMessaging] FOREIGN KEY([GroupMessagingId]) REFERENCES [dbo].[GroupMessagingGroups] ([Id]),
	CONSTRAINT [FK_GroupMessagingMembers_Users] FOREIGN KEY([UserId]) REFERENCES [dbo].[UsersProfiles] ([Id]),
)