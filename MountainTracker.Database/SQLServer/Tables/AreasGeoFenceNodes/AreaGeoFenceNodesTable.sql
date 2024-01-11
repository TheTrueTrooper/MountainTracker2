CREATE TABLE [dbo].[AreaGeoFenceNodes](
	[AreaId] [int] NOT NULL,
	[Id] [int] NOT NULL IDENTITY(0,1) PRIMARY KEY,
	[Latitude] [float] NOT NULL,
	[Longitude] [float] NOT NULL,

	CONSTRAINT [FK_AreaGeoFenceNodes_Areas] FOREIGN KEY([AreaId]) REFERENCES [dbo].[Areas] ([Id]),

	CONSTRAINT [CK_AreaGeoFenceNodes_Latitude_Max] CHECK ([Latitude]<=90),
	CONSTRAINT [CK_AreaGeoFenceNodes_Latitude_Min] CHECK ([Latitude]>=-90),
	CONSTRAINT [CK_AreaGeoFenceNodes_Longitude_Max] CHECK ([Longitude]<=180),
	CONSTRAINT [CK_AreaGeoFenceNodes_Longitude_Min] CHECK ([Longitude]>=-180),
)