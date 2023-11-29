CREATE TABLE [dbo].[ZonesGeoFenceNodes](
	[ZonesID] int NOT NULL,
	[ID] int NOT NULL PRIMARY KEY IDENTITY (0,1),
	[Latitude] float NULL,
	[Longitude] float NULL,

	CONSTRAINT [FK_ZonesGeoFenceNodes_Zones] FOREIGN KEY([ZonesID]) REFERENCES [dbo].[Zones] ([ID]),

	CONSTRAINT [CK_ZonesGeoFenceNodes_Latitude_Max] CHECK ([Latitude]<=90),
	CONSTRAINT [CK_ZonesGeoFenceNodes_Latitude_Min] CHECK ([Latitude]<=-90),
	CONSTRAINT [CK_ZonesGeoFenceNodes_Longitude_Max] CHECK ([Longitude]<=180),
	CONSTRAINT [CK_ZonesGeoFenceNodes_Longitude_Min] CHECK ([Longitude]<=-180),
)