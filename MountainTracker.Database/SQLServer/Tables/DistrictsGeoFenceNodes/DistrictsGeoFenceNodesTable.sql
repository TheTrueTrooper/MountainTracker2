CREATE TABLE [dbo].[DistrictsGeoFenceNodes](
	[DistrictsID] int NOT NULL,
	[ID] int NOT NULL PRIMARY KEY IDENTITY (0,1),
	[Latitude] float NULL,
	[Longitude] float NULL,

	CONSTRAINT [FK_DistrictsGeoFenceNodes_DistrictZones] FOREIGN KEY([DistrictsID]) REFERENCES [dbo].[Districts] ([ID]),

	CONSTRAINT [CK_DistrictsGeoFenceNodes_Latitude_Max] CHECK ([Latitude]<=90),
	CONSTRAINT [CK_DistrictsGeoFenceNodes_Latitude_Min] CHECK ([Latitude]<=-90),
	CONSTRAINT [CK_DistrictsGeoFenceNodes_Longitude_Max] CHECK ([Longitude]<=180),
	CONSTRAINT [CK_DistrictsGeoFenceNodes_Longitude_Min] CHECK ([Longitude]<=-180),
)