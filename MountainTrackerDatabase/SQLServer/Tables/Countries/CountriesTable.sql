CREATE TABLE [dbo].[Countries](
	[ID] tinyint NOT NULL PRIMARY KEY,
	[EnglishFullName] varchar(44) NOT NULL,
	[CountryCode] char(2) NOT NULL,

	CONSTRAINT [UQ_Countries_Code] UNIQUE([CountryCode]),
	CONSTRAINT [UQ_Countries_Name] UNIQUE([EnglishFullName]),
)
