Create PROCEDURE [dbo].[CheckToken]
	@UserID int,
	@UserToken CHAR(44)
AS
begin
	declare @Valid as bit, @TokenID as int, @ExtendValue as int
	set @Valid = 0
	--clear old tokens to start
	delete from UserAccessTokens where UserTokenValidTill < GETDATE()
	if(exists(select UAT.UserToken from Users as U
		join UserAccessLevels as UAL on UAL.ID = U.AccessLevelID
		join UserAccessTokens as UAT on U.ID = UAT.UserID
			where U.ID = @UserID and UAT.UserToken = @UserToken))
		begin
			select @ExtendValue = UAT.DaysValid from Users as U
			join UserAccessLevels as UAL on UAL.ID = U.AccessLevelID
			join UserAccessTokens as UAT on U.ID = UAT.UserID
				where U.ID = @UserID and UAT.UserToken = @UserToken
			update UserAccessTokens
			set
			UserTokenValidTill = DATEADD(day,@ExtendValue, GETDATE())
			where UserToken = @UserToken
			set @Valid = 1
		end
	select @Valid
	RETURN 0
end