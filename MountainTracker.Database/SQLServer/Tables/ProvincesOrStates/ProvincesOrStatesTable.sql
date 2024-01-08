CREATE TABLE [dbo].[ProvincesOrStates](
	[CountryId] tinyint NOT NULL,
	[Id] smallint NOT NULL PRIMARY KEY,
	[EnglishFullName] varchar(100) NOT NULL,
	[RegionCode] char(2) NOT NULL,

	CONSTRAINT [UQ_ProvincesOrStates_Code] UNIQUE NONCLUSTERED ([CountryId], [RegionCode]),
	CONSTRAINT [UQ_ProvincesOrStates_Name] UNIQUE NONCLUSTERED ([CountryId], [EnglishFullName]),

	CONSTRAINT [FK_ProvincesOrStates_Countries] FOREIGN KEY([CountryId]) REFERENCES [dbo].[Countries] ([Id]),
)
