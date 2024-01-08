CREATE TABLE [dbo].[Regions](
	[ProvinceOrStateId] smallint NOT NULL,
	[Id] int NOT NULL IDENTITY(0,1) PRIMARY KEY,
	[EnglishFullName] varchar(100) NOT NULL,
	[RegionCode] char(5) NOT NULL,
	[LatitudeStartOrCenter] float NULL,
	[LongitudeStartOrCenter] float NULL,
	[ThumbPictureBytes] varbinary(max) NULL,
	[Info] varchar(5000) NULL,

	CONSTRAINT [UQ_Region_Code] UNIQUE NONCLUSTERED ([ProvinceOrStateId], [RegionCode]),
	CONSTRAINT [UQ_Region_Name] UNIQUE NONCLUSTERED ([ProvinceOrStateId] ,[EnglishFullName]),

	CONSTRAINT [FK_Regions_ProvincesOrStates] FOREIGN KEY([ProvinceOrStateId]) REFERENCES [dbo].[ProvincesOrStates] ([Id]),

	CONSTRAINT [CK_Regions_LatitudeStartOrCenter_Max] CHECK ([LatitudeStartOrCenter]<=90),
	CONSTRAINT [CK_Regions_LatitudeStartOrCenter_Min] CHECK ([LatitudeStartOrCenter]>=-90),
	CONSTRAINT [CK_Regions_LongitudeStartOrCenter_Max] CHECK ([LatitudeStartOrCenter]<=180),
	CONSTRAINT [CK_Regions_LongitudeStartOrCenter_Min] CHECK ([LatitudeStartOrCenter]>=-180),
)