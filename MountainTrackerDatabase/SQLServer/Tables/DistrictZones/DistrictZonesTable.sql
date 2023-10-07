CREATE TABLE [dbo].[DistrictZones](
	[DistrictID] int NOT NULL,
	[ID] int NOT NULL IDENTITY(0,1) PRIMARY KEY,
	[EnglishFullName] varchar(100) NOT NULL,
	[ZoneCode] char(5) NOT NULL,
	[LatitudeStartOrCenter] float NULL,
	[LongitudeStartOrCenter] float NULL,
	[ThumbPictureBytes] varbinary(max) NULL,
	[Info] varchar(5000) NULL,

	CONSTRAINT [UQ_DistrictZones_Code] UNIQUE ([DistrictID], [ZoneCode]),
	CONSTRAINT [UQ_DistrictZones_Name] UNIQUE ([DistrictID], [EnglishFullName]),

	CONSTRAINT [FK_DistrictZones_Districts] FOREIGN KEY ([DistrictID]) REFERENCES [dbo].[Districts]([ID]), 

    CONSTRAINT [CK_DistrictZones_LatitudeStartOrCenter_Max] CHECK ([LatitudeStartOrCenter]<=90),
	CONSTRAINT [CK_DistrictZones_LatitudeStartOrCenter_Min] CHECK ([LatitudeStartOrCenter]<=-90),
	CONSTRAINT [CK_DistrictZones_LongitudeStartOrCenter_Max] CHECK ([LatitudeStartOrCenter]<=180),
	CONSTRAINT [CK_DistrictZones_LongitudeStartOrCenter_Min] CHECK ([LatitudeStartOrCenter]<=-180),
)