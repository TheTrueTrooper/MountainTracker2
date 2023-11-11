CREATE TABLE [dbo].[Regions](
	[ProvinceOrStateID] smallint NOT NULL,
	[ID] int NOT NULL IDENTITY(0,1) PRIMARY KEY,
	[EnglishFullName] varchar(100) NOT NULL,
	[RegionCode] char(5) NOT NULL,
	[LatitudeStartOrCenter] float NULL,
	[LongitudeStartOrCenter] float NULL,
	[ThumbPictureBytes] varbinary(max) NULL,
	[Info] varchar(5000) NULL,

	CONSTRAINT [UQ_Region_Code] UNIQUE NONCLUSTERED ([ProvinceOrStateID], [RegionCode]),
	CONSTRAINT [UQ_Region_Name] UNIQUE NONCLUSTERED ([ProvinceOrStateID] ,[EnglishFullName]),

	CONSTRAINT [FK_Regions_ProvincesOrStates] FOREIGN KEY([ProvinceOrStateID]) REFERENCES [dbo].[ProvincesOrStates] ([ID]),

	CONSTRAINT [CK_Regions_LatitudeStartOrCenter_Max] CHECK ([LatitudeStartOrCenter]<=90),
	CONSTRAINT [CK_Regions_LatitudeStartOrCenter_Min] CHECK ([LatitudeStartOrCenter]<=-90),
	CONSTRAINT [CK_Regions_LongitudeStartOrCenter_Max] CHECK ([LatitudeStartOrCenter]<=180),
	CONSTRAINT [CK_Regions_LongitudeStartOrCenter_Min] CHECK ([LatitudeStartOrCenter]<=-180),
)