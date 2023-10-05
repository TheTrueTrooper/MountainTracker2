/*
 Pre-Deployment Script Template							
--------------------------------------------------------------------------------------
 This file contains SQL statements that will be executed before the build script.	
 Use SQLCMD syntax to include a file in the pre-deployment script.			
 Example:      :r .\myfile.sql								
 Use SQLCMD syntax to reference a variable in the pre-deployment script.		
 Example:      :setvar TableName MyTable							
               SELECT * FROM [$(TableName)]					
--------------------------------------------------------------------------------------
*/
--save users for reset
print '<<<Saving Users For Later'
CREATE TABLE [dbo].[TempSavedUsers]
(
	[ID] INT NOT NULL, 
    [FirstName] NVARCHAR(50) NOT NULL, 
    [MiddleName] NVARCHAR(50) NULL, 
    [LastName] NVARCHAR(50) NOT NULL, 
    [UserName] NVARCHAR(50) NOT NULL, 
    [PrimaryPersonalEmail] VARCHAR(320) NOT NULL, 
    [EmailValidated] BIT NOT NULL DEFAULT 0,
	[PrimaryPhone] VARCHAR(15) NOT NULL, 
    [PhoneValidated] BIT NOT NULL DEFAULT 0,
    [KeepPrivate] BIT NOT NULL DEFAULT 0, 
    [MetricOverImperial] BIT NOT NULL DEFAULT 1, 
    [CountryID] TINYINT NULL DEFAULT NULL,
    [ProvinceID] SMALLINT NULL DEFAULT NULL,
    [AccessLevelID] TINYINT NOT NULL DEFAULT 5,
    [HashedPassword] NCHAR(44) NOT NULL, 
	[Salt] CHAR(44) NOT NULL,  
    [ProfilePictureBytes] VARBINARY(max) NULL,
    [BannerPictureBytes] VARBINARY(max) NULL,
    [Bio] NVARCHAR(2500) NULL, 
	[ProfileURL] NVARCHAR(100) NULL
)
INSERT INTO TempSavedUsers
SELECT * FROM Users
print '>>>Users Saved'

--reset the table for data by deleting old data to make a clean alter\
--Routes Rest

IF EXISTS(SELECT 1 FROM sys.Objects WHERE  Object_id = OBJECT_ID(N'dbo.RockClimbingRoutes') AND Type = N'U')
	delete RockClimbingRoutes where 1=1

--Gear drill down reset
IF EXISTS(SELECT 1 FROM sys.Objects WHERE  Object_id = OBJECT_ID(N'dbo.GearLinkingTableForGearType') AND Type = N'U')
	delete [GearLinkingTableForGearType] where 1=1
IF EXISTS(SELECT 1 FROM sys.Objects WHERE  Object_id = OBJECT_ID(N'dbo.ClimbingTypes') AND Type = N'U')
	delete [ClimbingTypes] where 1=1
IF EXISTS(SELECT 1 FROM sys.Objects WHERE  Object_id = OBJECT_ID(N'dbo.GearSizes') AND Type = N'U')
	delete GearSizes where 1=1
IF EXISTS(SELECT 1 FROM sys.Objects WHERE  Object_id = OBJECT_ID(N'dbo.Gear') AND Type = N'U')
	delete Gear where 1=1
--Difficulties rest
IF EXISTS(SELECT 1 FROM sys.Objects WHERE  Object_id = OBJECT_ID(N'dbo.RockClimbingDifficulties') AND Type = N'U')
	delete RockClimbingDifficulties where 1=1

--Routes Rest cont
IF EXISTS(SELECT 1 FROM sys.Objects WHERE  Object_id = OBJECT_ID(N'dbo.RockClimbingRoutes') AND Type = N'U')
	delete ClimbingWalls where 1=1
IF EXISTS(SELECT 1 FROM sys.Objects WHERE  Object_id = OBJECT_ID(N'dbo.RockClimbingRoutes') AND Type = N'U')
	delete ZoneAreas where 1=1
IF EXISTS(SELECT 1 FROM sys.Objects WHERE  Object_id = OBJECT_ID(N'dbo.RockClimbingRoutes') AND Type = N'U')
	delete DistrictZones where 1=1
IF EXISTS(SELECT 1 FROM sys.Objects WHERE  Object_id = OBJECT_ID(N'dbo.RockClimbingRoutes') AND Type = N'U')
	delete Districts where 1=1
IF EXISTS(SELECT 1 FROM sys.Objects WHERE  Object_id = OBJECT_ID(N'dbo.RockClimbingRoutes') AND Type = N'U')
	delete Regions where 1=1

IF EXISTS(SELECT 1 FROM sys.Objects WHERE  Object_id = OBJECT_ID(N'dbo.Users') AND Type = N'U')
	delete UserAccessTokens where 1=1

IF EXISTS(SELECT 1 FROM sys.Objects WHERE  Object_id = OBJECT_ID(N'dbo.UserDMs') AND Type = N'U')
	delete UserDMs where 1=1

IF EXISTS(SELECT 1 FROM sys.Objects WHERE  Object_id = OBJECT_ID(N'dbo.UserFriends') AND Type = N'U')
	delete UserFriends where 1=1

IF EXISTS(SELECT 1 FROM sys.Objects WHERE  Object_id = OBJECT_ID(N'dbo.Users') AND Type = N'U')
	delete Users where 1=1

    --Wall drill down reset
IF EXISTS(SELECT 1 FROM sys.Objects WHERE  Object_id = OBJECT_ID(N'dbo.ProvincesOrStates') AND Type = N'U')
	delete ProvincesOrStates where 1=1
IF EXISTS(SELECT 1 FROM sys.Objects WHERE  Object_id = OBJECT_ID(N'dbo.Countries') AND Type = N'U')
	delete Countries where 1=1

IF EXISTS(SELECT 1 FROM sys.Objects WHERE  Object_id = OBJECT_ID(N'dbo.UserAccessLevels') AND Type = N'U')
	delete UserAccessLevels where 1=1
go