CREATE TABLE [dbo].[RockClimbingWallsGeoFenceNodes](
	[ClimbingWallsID] [int] NOT NULL,
	[ID] [int] NOT NULL IDENTITY(0,1) PRIMARY KEY,
	[Latitude] [float] NULL,
	[Longitude] [float] NULL,

	CONSTRAINT [FK_RockClimbingWallsGeoFenceNodes_RockClimbingWalls] FOREIGN KEY([ClimbingWallsID]) REFERENCES [dbo].[RockClimbingWalls] ([ID]),

	CONSTRAINT [CK_RockClimbingWallsGeoFenceNodes_Latitude_Max] CHECK ([Latitude]<=90),
	CONSTRAINT [CK_RockClimbingWallsGeoFenceNodes_Latitude_Min] CHECK ([Latitude]<=-90),
	CONSTRAINT [CK_RockClimbingWallsGeoFenceNodes_Longitude_Max] CHECK ([Longitude]<=180),
	CONSTRAINT [CK_RockClimbingWallsGeoFenceNodes_Longitude_Min] CHECK ([Longitude]<=-180),
)