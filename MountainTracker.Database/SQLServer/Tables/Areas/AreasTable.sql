CREATE TABLE [dbo].[Areas](
	[ZoneID] [int] NOT NULL,
	[ID] [int] NOT NULL IDENTITY(0,1) PRIMARY KEY,
	[EnglishFullName] [varchar](100) NOT NULL,
	[AreaCode] [char](5) NOT NULL,
	[LatitudeStartOrCenter] [float] NULL,
	[LongitudeStartOrCenter] [float] NULL,
	[ThumbPictureBytes] [varbinary](max) NULL,
	[Info] [varchar](5000) NULL,

	CONSTRAINT [UQ_Areas_Code] UNIQUE NONCLUSTERED ([ZoneID], [AreaCode]),
	CONSTRAINT [UQ_Areas_Name] UNIQUE NONCLUSTERED ([ZoneID], [EnglishFullName]),

	CONSTRAINT [FK_Areas_Zones] FOREIGN KEY([ZoneID]) REFERENCES [dbo].[Zones] ([ID]),

	CONSTRAINT [CK_Areas_LatitudeStartOrCenter_Max] CHECK ([LatitudeStartOrCenter]<=90),
	CONSTRAINT [CK_Areas_LatitudeStartOrCenter_Min] CHECK ([LatitudeStartOrCenter]>=-90),
	CONSTRAINT [CK_Areas_LongitudeStartOrCenter_Max] CHECK ([LatitudeStartOrCenter]<=180),
	CONSTRAINT [CK_Areas_LongitudeStartOrCenter_Min] CHECK ([LatitudeStartOrCenter]>=-180),
)