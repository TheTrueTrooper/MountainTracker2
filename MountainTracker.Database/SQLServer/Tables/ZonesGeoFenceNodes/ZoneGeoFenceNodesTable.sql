CREATE TABLE [dbo].[ZoneGeoFenceNodes](
	[ZoneID] int NOT NULL,
	[ID] int NOT NULL PRIMARY KEY IDENTITY (0,1),
	[Latitude] float NOT NULL,
	[Longitude] float NOT NULL,

	CONSTRAINT [FK_ZoneGeoFenceNodes_Zones] FOREIGN KEY([ZoneID]) REFERENCES [dbo].[Zones] ([ID]),

	CONSTRAINT [CK_ZoneGeoFenceNodes_Latitude_Max] CHECK ([Latitude]<=90),
	CONSTRAINT [CK_ZoneGeoFenceNodes_Latitude_Min] CHECK ([Latitude]>=-90),
	CONSTRAINT [CK_ZoneGeoFenceNodes_Longitude_Max] CHECK ([Longitude]<=180),
	CONSTRAINT [CK_ZoneGeoFenceNodes_Longitude_Min] CHECK ([Longitude]>=-180),
)