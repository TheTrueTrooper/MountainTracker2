CREATE PROCEDURE [dbo].[CreateToken]
	@UserID int,
	@UserToken CHAR(44),
	@DaysValid int = 30
AS
begin
		insert into UserAccessTokens(UserID, UserToken, DaysValid, UserTokenValidTill)
		Values (@UserID, @UserToken, @DaysValid, DATEADD(day, @DaysValid, GETDATE()))
	RETURN 0
end