CREATE TABLE [dbo].[ApplicationUsers](
	[Id]                   INT            IDENTITY (1, 1) NOT NULL,
    [Email]                NVARCHAR (256) NULL,
    [EmailConfirmed]       BIT            NOT NULL,
    [PasswordHash]         NVARCHAR (512) NULL,
    [SecurityStamp]        NVARCHAR (512) NULL,
    [PhoneNumber]          NVARCHAR (128) NULL,
    [PhoneNumberConfirmed] BIT            NOT NULL,
    [TwoFactorEnabled]     BIT            NOT NULL,
    [LockoutEndDateUtc]    DATETIME       NULL,
    [LockoutEnabled]       BIT            NOT NULL,
    [AccessFailedCount]    INT            NOT NULL,
    [UserName]             NVARCHAR (256) NOT NULL,
    [FirstName]            NVARCHAR (256) NULL,
    [LastName]             NVARCHAR (256) NULL,
    [DateCreated]          DATETIME       NOT NULL,
    [DateUpdated]          DATETIME       NOT NULL,
    [LastLoginDate]        DATETIME       NULL,
    [PasswordChangeDate]   DATETIME       NULL,


	[KeepPrivate] bit NOT NULL DEFAULT (0),
	[MetricOverImperial] bit NOT NULL DEFAULT (1),


	[CountryId] tinyint NULL DEFAULT (NULL),
	[ProvinceId] smallint NULL DEFAULT (NULL),


	[ProfilePictureBytes] varbinary(max) NULL,
	[BannerPictureBytes] varbinary(max) NULL,
	[Bio] nvarchar(2500) NULL,
	[ProfileURL] nvarchar(100) NULL,

    CONSTRAINT [PK_ApplicationUsers] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [UQ_ApplicationUsers_Email] UNIQUE NONCLUSTERED ([Email] ASC),
    CONSTRAINT [UQ_ApplicationUsers_UserName] UNIQUE NONCLUSTERED ([UserName] ASC),

	CONSTRAINT [FK_ApplicationUsers_Countries] FOREIGN KEY([CountryId]) REFERENCES [dbo].[Countries] ([Id]),
	CONSTRAINT [FK_ApplicationUsers_ProvincesOrStates] FOREIGN KEY([ProvinceId]) REFERENCES [dbo].[ProvincesOrStates] ([Id]),
)