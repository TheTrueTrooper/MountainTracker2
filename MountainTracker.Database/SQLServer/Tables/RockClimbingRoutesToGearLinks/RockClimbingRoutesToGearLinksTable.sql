CREATE TABLE [dbo].[RockClimbingRoutesToGearLinks](
	[RockClimbingRoutesId] int NOT NULL,
	[GearSizeId] tinyint NOT NULL,
	[NumberRequired] smallint NOT NULL  DEFAULT (1),

	PRIMARY KEY ([RockClimbingRoutesId], [GearSizeId]),

	CONSTRAINT [FK_RockClimbingRoutesGearLinkingTable_GearSizeId] FOREIGN KEY([GearSizeId]) REFERENCES [dbo].[GearSizes] ([Id]),
	CONSTRAINT [FK_RockClimbingRoutesGearLinkingTable_RockClimbingRoutes] FOREIGN KEY([RockClimbingRoutesId]) REFERENCES [dbo].[RockClimbingRoutes] ([Id])
)