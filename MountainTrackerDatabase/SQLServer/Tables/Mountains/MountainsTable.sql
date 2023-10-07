CREATE TABLE [dbo].[Mountains](
	[ID] int NOT NULL IDENTITY(0,1) PRIMARY KEY,
	[EnglishFullName] varchar(100) NOT NULL,
	[RouteInfo] varchar(1000) NULL,
)