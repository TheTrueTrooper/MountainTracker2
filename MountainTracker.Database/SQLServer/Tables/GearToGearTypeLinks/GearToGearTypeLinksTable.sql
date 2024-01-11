CREATE TABLE [dbo].[GearToGearTypeLinks](
	[ClimbingTypeId] tinyint NOT NULL,
	[GearId] tinyint NOT NULL,

	PRIMARY KEY (ClimbingTypeId,GearId),

	CONSTRAINT [FK_GearToGearTypeLinks_ClimbingTypes] FOREIGN KEY([ClimbingTypeId]) REFERENCES [dbo].[ClimbingTypes] ([Id]),
	CONSTRAINT [FK_GearToGearTypeLinks_Gear] FOREIGN KEY([GearId]) REFERENCES [dbo].[Gear] ([Id]),
)