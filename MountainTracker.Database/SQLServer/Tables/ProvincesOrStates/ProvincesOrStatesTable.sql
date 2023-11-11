CREATE TABLE [dbo].[ProvincesOrStates](
	[CountryID] tinyint NOT NULL,
	[ID] smallint NOT NULL PRIMARY KEY,
	[EnglishFullName] varchar(100) NOT NULL,
	[RegionCode] char(2) NOT NULL,

	CONSTRAINT [UQ_ProvincesOrStates_Code] UNIQUE NONCLUSTERED ([CountryID], [RegionCode]),
	CONSTRAINT [UQ_ProvincesOrStates_Name] UNIQUE NONCLUSTERED ([CountryID], [EnglishFullName]),

	CONSTRAINT [FK_ProvincesOrStates_Countries] FOREIGN KEY([CountryID]) REFERENCES [dbo].[Countries] ([ID]),
)
