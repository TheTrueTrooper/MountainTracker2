CREATE TABLE [dbo].[AreasGeoFenceNodes](
	[AreasID] [int] NOT NULL,
	[ID] [int] NOT NULL IDENTITY(0,1) PRIMARY KEY,
	[Latitude] [float] NULL,
	[Longitude] [float] NULL,

	CONSTRAINT [FK_AreasGeoFenceNodes_Areas] FOREIGN KEY([AreasID]) REFERENCES [dbo].[Areas] ([ID]),

	CONSTRAINT [CK_Areas_Latitude_Max] CHECK ([Latitude]<=90),
	CONSTRAINT [CK_Areas_Latitude_Min] CHECK ([Latitude]<=-90),
	CONSTRAINT [CK_Areas_Longitude_Max] CHECK ([Longitude]<=180),
	CONSTRAINT [CK_Areas_Longitude_Min] CHECK ([Longitude]<=-180),
)