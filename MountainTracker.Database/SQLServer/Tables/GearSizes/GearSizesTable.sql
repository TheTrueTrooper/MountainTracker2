CREATE TABLE [dbo].[GearSizes](
	[GearId] tinyint NOT NULL,
	[Id] tinyint NOT NULL PRIMARY KEY,
	[EnglishFullName] varchar(100) NOT NULL,

	CONSTRAINT [FK_GearSizes_RockClimbingGearId] FOREIGN KEY([GearId]) REFERENCES [dbo].[Gear] ([Id]),
)