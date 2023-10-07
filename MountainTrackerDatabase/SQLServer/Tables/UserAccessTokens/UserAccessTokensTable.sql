CREATE TABLE [dbo].[UserAccessTokens](
	[UserID] [int] NOT NULL,
	[ID] [int] NOT NULL IDENTITY(0,1) PRIMARY KEY,
	[UserToken] [char](44) NULL,
	[UserTokenIssueDate] [datetime] NULL DEFAULT (getdate()),
	[UserTokenValidTill] [datetime] NULL,
	[DaysValid] [int] NULL DEFAULT (0),

	CONSTRAINT [FK_UserAccessTokens_Users] FOREIGN KEY([UserID]) REFERENCES [dbo].[Users] ([ID])
)