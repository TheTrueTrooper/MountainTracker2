CREATE TABLE [dbo].[RockClimbingRoutesToGearLinks](
	[RockClimbingRoutesID] int NOT NULL,
	[GearSizeID] tinyint NOT NULL,
	[NumberRequired] smallint NOT NULL  DEFAULT (1),

	PRIMARY KEY ([RockClimbingRoutesID], [GearSizeID]),

	CONSTRAINT [FK_RockClimbingRoutesGearLinkingTable_GearSizeID] FOREIGN KEY([GearSizeID]) REFERENCES [dbo].[GearSizes] ([ID]),
	CONSTRAINT [FK_RockClimbingRoutesGearLinkingTable_RockClimbingRoutes] FOREIGN KEY([RockClimbingRoutesID]) REFERENCES [dbo].[RockClimbingRoutes] ([ID])
)