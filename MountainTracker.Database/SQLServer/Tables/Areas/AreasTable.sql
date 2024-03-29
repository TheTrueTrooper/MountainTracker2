﻿CREATE TABLE [dbo].[Areas](
	[ZoneId] [int] NOT NULL,
	[Id] [int] NOT NULL IDENTITY(0,1) PRIMARY KEY,
	[EnglishFullName] [varchar](100) NOT NULL,
	[AreaCode] [char](5) NOT NULL,
	[LatitudeStartOrCenter] [float] NULL,
	[LongitudeStartOrCenter] [float] NULL,
	[ThumbPictureBytes] [varbinary](max) NULL,
	[Info] [varchar](5000) NULL,

	CONSTRAINT [UQ_Areas_Code] UNIQUE NONCLUSTERED ([ZoneId], [AreaCode]),
	CONSTRAINT [UQ_Areas_Name] UNIQUE NONCLUSTERED ([ZoneId], [EnglishFullName]),

	CONSTRAINT [FK_Areas_Zones] FOREIGN KEY([ZoneId]) REFERENCES [dbo].[Zones] ([Id]),

	CONSTRAINT [CK_Areas_LatitudeStartOrCenter_Max] CHECK ([LatitudeStartOrCenter]<=90),
	CONSTRAINT [CK_Areas_LatitudeStartOrCenter_Min] CHECK ([LatitudeStartOrCenter]>=-90),
	CONSTRAINT [CK_Areas_LongitudeStartOrCenter_Max] CHECK ([LatitudeStartOrCenter]<=180),
	CONSTRAINT [CK_Areas_LongitudeStartOrCenter_Min] CHECK ([LatitudeStartOrCenter]>=-180),
)