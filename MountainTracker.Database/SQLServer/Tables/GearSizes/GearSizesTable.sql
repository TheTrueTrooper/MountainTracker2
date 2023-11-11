CREATE TABLE [dbo].[GearSizes](
	[GearID] tinyint NOT NULL,
	[ID] tinyint NOT NULL PRIMARY KEY,
	[EnglishFullName] varchar(100) NOT NULL,

	CONSTRAINT [FK_GearSizes_RockClimbingGearID] FOREIGN KEY([GearID]) REFERENCES [dbo].[Gear] ([ID]),
)