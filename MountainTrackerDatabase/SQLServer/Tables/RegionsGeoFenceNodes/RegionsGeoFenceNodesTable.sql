CREATE TABLE [dbo].[RegionsGeoFenceNodes](
	[RegionsID] int NOT NULL,
	[ID] int NOT NULL IDENTITY(0,1) PRIMARY KEY,
	[Latitude] float NULL,
	[Longitude] float NULL,

	CONSTRAINT [FK_RegionsGeoFenceNodes_Regions] FOREIGN KEY([RegionsID]) REFERENCES [dbo].[Regions] ([ID]),

	CONSTRAINT [CK_RegionsGeoFenceNodes_Latitude_Max] CHECK ([Latitude]<=90),
	CONSTRAINT [CK_RegionsGeoFenceNodes_Latitude_Min] CHECK ([Latitude]<=-90),
	CONSTRAINT [CK_RegionsGeoFenceNodes_Longitude_Max] CHECK ([Longitude]<=180),
	CONSTRAINT [CK_RegionsGeoFenceNodes_Longitude_Min] CHECK ([Longitude]<=-180),
)