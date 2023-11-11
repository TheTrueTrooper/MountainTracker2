CREATE TABLE [dbo].[DistrictZonesGeoFenceNodes](
	[DistrictZonesID] int NOT NULL,
	[ID] int NOT NULL PRIMARY KEY IDENTITY (0,1),
	[Latitude] float NULL,
	[Longitude] float NULL,

	CONSTRAINT [FK_DistrictZonesGeoFenceNodes_DistrictZones] FOREIGN KEY([DistrictZonesID]) REFERENCES [dbo].[Districts] ([ID]),

	CONSTRAINT [CK_DistrictZonesGeoFenceNodes_Latitude_Max] CHECK ([Latitude]<=90),
	CONSTRAINT [CK_DistrictZonesGeoFenceNodes_Latitude_Min] CHECK ([Latitude]<=-90),
	CONSTRAINT [CK_DistrictZonesGeoFenceNodes_Longitude_Max] CHECK ([Longitude]<=180),
	CONSTRAINT [CK_DistrictZonesGeoFenceNodes_Longitude_Min] CHECK ([Longitude]<=-180),
)