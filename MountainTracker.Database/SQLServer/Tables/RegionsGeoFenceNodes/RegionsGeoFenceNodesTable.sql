﻿CREATE TABLE [dbo].[RegionGeoFenceNodes](
	[RegionId] int NOT NULL,
	[Id] int NOT NULL IDENTITY(0,1) PRIMARY KEY,
	[Latitude] float NOT NULL,
	[Longitude] float NOT NULL,

	CONSTRAINT [FK_RegionGeoFenceNodes_Regions] FOREIGN KEY([RegionId]) REFERENCES [dbo].[Regions] ([Id]),

	CONSTRAINT [CK_RegionGeoFenceNodes_Latitude_Max] CHECK ([Latitude]<=90),
	CONSTRAINT [CK_RegionGeoFenceNodes_Latitude_Min] CHECK ([Latitude]>=-90),
	CONSTRAINT [CK_RegionGeoFenceNodes_Longitude_Max] CHECK ([Longitude]<=180),
	CONSTRAINT [CK_RegionGeoFenceNodes_Longitude_Min] CHECK ([Longitude]>=-180),
)