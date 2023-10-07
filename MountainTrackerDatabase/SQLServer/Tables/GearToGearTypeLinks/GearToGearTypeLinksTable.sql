CREATE TABLE [dbo].[GearToGearTypeLinks](
	[RockClimbingTypesID] tinyint NOT NULL PRIMARY KEY,
	[GearID] tinyint NOT NULL,

	CONSTRAINT [FK_GearToGearTypeLinks_ClimbingTypes] FOREIGN KEY([RockClimbingTypesID]) REFERENCES [dbo].[RockClimbingTypes] ([ID]),
	CONSTRAINT [FK_GearToGearTypeLinks_Gear] FOREIGN KEY([GearID]) REFERENCES [dbo].[Gear] ([ID]),
)