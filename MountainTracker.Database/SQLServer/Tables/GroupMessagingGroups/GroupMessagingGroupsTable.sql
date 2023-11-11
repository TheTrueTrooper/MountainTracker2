CREATE TABLE [dbo].[GroupMessagingGroups](
	[ID] int NOT NULL IDENTITY(0,1) PRIMARY KEY,
	[GroupsName] nvarchar(50) NOT NULL,
	[TimeCreated] datetime NOT NULL DEFAULT (getdate()),
)
