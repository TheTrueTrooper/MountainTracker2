CREATE TABLE [dbo].[RockClimbingWallGeoFenceNodes](
	[ClimbingWallID] [int] NOT NULL,
	[ID] [int] NOT NULL IDENTITY(0,1) PRIMARY KEY,
	[Latitude] [float] NOT NULL,
	[Longitude] [float] NOT NULL,

	CONSTRAINT [FK_RockClimbingWallGeoFenceNodes_RockClimbingWalls] FOREIGN KEY([ClimbingWallID]) REFERENCES [dbo].[RockClimbingWalls] ([ID]),

	CONSTRAINT [CK_RockClimbingWallGeoFenceNodes_Latitude_Max] CHECK ([Latitude]<=90),
	CONSTRAINT [CK_RockClimbingWallGeoFenceNodes_Latitude_Min] CHECK ([Latitude]>=-90),
	CONSTRAINT [CK_RockClimbingWallGeoFenceNodes_Longitude_Max] CHECK ([Longitude]<=180),
	CONSTRAINT [CK_RockClimbingWallGeoFenceNodes_Longitude_Min] CHECK ([Longitude]>=-180),
)