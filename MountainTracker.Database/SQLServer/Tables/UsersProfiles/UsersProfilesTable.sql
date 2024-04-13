CREATE TABLE [dbo].[UsersProfiles]
(
	[Id] nvarchar(450) NOT NULL PRIMARY KEY,
	[FirstName] nvarchar(50) NULL,
	[MiddleName] nvarchar(50) NULL,
	[LastName] nvarchar(50) NULL,
	[UserName] nvarchar(50) NULL,
	[FormAlias]  nvarchar(50) NULL,
	[ContactEmail] varchar(320) NULL,
	[ContactPhone] varchar(15) NULL,
	[UseFormAlias] bit NOT NULL DEFAULT (1),
	[KeepPrivate] bit NOT NULL DEFAULT (0),
	[MetricOverImperial] bit NOT NULL DEFAULT (1),
	[CountryID] tinyint NULL DEFAULT (NULL),
	[ProvinceID] smallint NULL DEFAULT (NULL),
	[ProfilePictureBytes] varbinary(max) NULL,
	[BannerPictureBytes] varbinary(max) NULL,
	[Bio] nvarchar(2500) NULL,
	[ProfileURL] nvarchar(100) NULL,

	CONSTRAINT [FK_UsersProfiles_Users] FOREIGN KEY ([Id]) REFERENCES [dbo].[UsersProfiles] ([Id]),
)
go
CREATE UNIQUE INDEX [UserFirstNameIndex] ON [dbo].[UsersProfiles] ([FirstName]) WHERE [FirstName] is not null    
go
CREATE UNIQUE INDEX [UserLastNameIndex] ON [dbo].[UsersProfiles] ([LastName]) WHERE [LastName] is not null 
go
CREATE UNIQUE INDEX [UserContactEmailIndex] ON [dbo].[UsersProfiles] ([ContactEmail]) WHERE [ContactEmail] is not null 
go
CREATE UNIQUE INDEX [UserContactPhoneIndex] ON [dbo].[UsersProfiles] ([ContactPhone]) WHERE [ContactPhone] is not null 
go
CREATE UNIQUE INDEX [FormAlias] ON [dbo].[UsersProfiles] ([FormAlias]) WHERE [FormAlias] is not null