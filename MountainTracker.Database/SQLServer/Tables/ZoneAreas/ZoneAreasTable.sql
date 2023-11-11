CREATE TABLE [dbo].[ZoneAreas](
	[DistrictZoneID] [int] NOT NULL,
	[ID] [int] NOT NULL IDENTITY(0,1) PRIMARY KEY,
	[EnglishFullName] [varchar](100) NOT NULL,
	[AreaCode] [char](5) NOT NULL,
	[LatitudeStartOrCenter] [float] NULL,
	[LongitudeStartOrCenter] [float] NULL,
	[ThumbPictureBytes] [varbinary](max) NULL,
	[Info] [varchar](5000) NULL,

	CONSTRAINT [UQ_ZoneAreas_Code] UNIQUE NONCLUSTERED ([DistrictZoneID], [AreaCode]),
	CONSTRAINT [UQ_ZoneAreas_Name] UNIQUE NONCLUSTERED ([DistrictZoneID], [EnglishFullName]),

	CONSTRAINT [FK_ZoneAreas_DistrictZones] FOREIGN KEY([DistrictZoneID]) REFERENCES [dbo].[DistrictZones] ([ID]),

	CONSTRAINT [CK_ZoneAreas_LatitudeStartOrCenter_Max] CHECK ([LatitudeStartOrCenter]<=90),
	CONSTRAINT [CK_ZoneAreas_LatitudeStartOrCenter_Min] CHECK ([LatitudeStartOrCenter]<=-90),
	CONSTRAINT [CK_ZoneAreas_LongitudeStartOrCenter_Max] CHECK ([LatitudeStartOrCenter]<=180),
	CONSTRAINT [CK_ZoneAreas_LongitudeStartOrCenter_Min] CHECK ([LatitudeStartOrCenter]<=-180),
)