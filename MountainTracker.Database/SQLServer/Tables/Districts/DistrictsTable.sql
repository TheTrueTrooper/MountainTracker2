CREATE TABLE [dbo].[Districts](
	[RegionId] int NOT NULL,
	[Id] int NOT NULL IDENTITY(0,1) PRIMARY KEY,
	[EnglishFullName] varchar(100) NOT NULL,
	[DistrictCode] char(5) NOT NULL,
	[LatitudeStartOrCenter] float NULL,
	[LongitudeStartOrCenter] float NULL,
	[ThumbPictureBytes] varbinary(max) NULL,
	[Info] varchar(5000) NULL,

	CONSTRAINT [UQ_Districts_Code] UNIQUE ([RegionId], [DistrictCode]),
	CONSTRAINT [UQ_Districts_Name] UNIQUE ([RegionId], [EnglishFullName]),

	CONSTRAINT [FK_Districts_Regions] FOREIGN KEY ([RegionId]) REFERENCES [dbo].[Regions]([Id]), 

    CONSTRAINT [CK_Districts_LatitudeStartOrCenter_Max] CHECK ([LatitudeStartOrCenter]<=90),
	CONSTRAINT [CK_Districts_LatitudeStartOrCenter_Min] CHECK ([LatitudeStartOrCenter]>=-90),
	CONSTRAINT [CK_Districts_LongitudeStartOrCenter_Max] CHECK ([LatitudeStartOrCenter]<=180),
	CONSTRAINT [CK_Districts_LongitudeStartOrCenter_Min] CHECK ([LatitudeStartOrCenter]>=-180),
)