CREATE TABLE [dbo].[ZoneAreasGeoFenceNodes](
	[ZoneAreasID] [int] NOT NULL,
	[ID] [int] NOT NULL IDENTITY(0,1) PRIMARY KEY,
	[Latitude] [float] NULL,
	[Longitude] [float] NULL,

	CONSTRAINT [FK_ZoneAreasGeoFenceNodes_ZoneAreas] FOREIGN KEY([ZoneAreasID]) REFERENCES [dbo].[ZoneAreas] ([ID]),

	CONSTRAINT [CK_ZoneAreas_Latitude_Max] CHECK ([Latitude]<=90),
	CONSTRAINT [CK_ZoneAreas_Latitude_Min] CHECK ([Latitude]<=-90),
	CONSTRAINT [CK_ZoneAreas_Longitude_Max] CHECK ([Longitude]<=180),
	CONSTRAINT [CK_ZoneAreas_Longitude_Min] CHECK ([Longitude]<=-180),
)