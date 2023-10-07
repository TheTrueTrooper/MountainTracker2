CREATE TABLE [dbo].[GearToGearTypeLinks](
	[ClimbingTypeID] tinyint NOT NULL,
	[GearID] tinyint NOT NULL,

	PRIMARY KEY (ClimbingTypeID,GearID),

	CONSTRAINT [FK_GearToGearTypeLinks_ClimbingTypes] FOREIGN KEY([ClimbingTypeID]) REFERENCES [dbo].[ClimbingTypes] ([ID]),
	CONSTRAINT [FK_GearToGearTypeLinks_Gear] FOREIGN KEY([GearID]) REFERENCES [dbo].[Gear] ([ID]),
)