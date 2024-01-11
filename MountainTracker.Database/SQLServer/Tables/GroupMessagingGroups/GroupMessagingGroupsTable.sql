CREATE TABLE [dbo].[GroupMessagingGroups](
	[Id] int NOT NULL IDENTITY(0,1) PRIMARY KEY,
	[GroupsName] nvarchar(50) NOT NULL,
	[TimeCreated] datetime NOT NULL DEFAULT (getdate()),
)
