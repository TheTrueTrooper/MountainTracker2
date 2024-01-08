CREATE TABLE [dbo].[DistrictGeoFenceNodes](
	[DistrictId] int NOT NULL,
	[Id] int NOT NULL PRIMARY KEY IDENTITY (0,1),
	[Latitude] float NOT NULL,
	[Longitude] float NOT NULL,

	CONSTRAINT [FK_DistrictGeoFenceNodes_District] FOREIGN KEY([DistrictId]) REFERENCES [dbo].[Districts] ([Id]),

	CONSTRAINT [CK_DistrictGeoFenceNodes_Latitude_Max] CHECK ([Latitude]<=90),
	CONSTRAINT [CK_DistrictGeoFenceNodes_Latitude_Min] CHECK ([Latitude]>=-90),
	CONSTRAINT [CK_DistrictGeoFenceNodes_Longitude_Max] CHECK ([Longitude]<=180),
	CONSTRAINT [CK_DistrictGeoFenceNodes_Longitude_Min] CHECK ([Longitude]>=-180),
)