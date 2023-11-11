CREATE PROCEDURE [dbo].[CheckTokenWithAccessLevel]
	@UserID int,
	@UserToken CHAR(44),
	@UserRequiredAccessLevelID int
AS
begin
	--set up some more vars we need
	declare @Valid as bit, @AccessLevelID as int, @TokenID as int, @ExtendValue as int
	--set our default stance as fail
	set @Valid = 0
	--clear old tokens to start
	delete from UserAccessTokens where UserTokenValidTill < GETDATE()
	--If we have a value after clearing old ones then we must have had a valid log on in time with this token
	if(exists(select UAT.UserToken from Users as U
		join UserAccessTokens as UAT on U.ID = UAT.UserID
			where not U.AccessLevelID > @UserRequiredAccessLevelID and U.ID = @UserID and UAT.UserToken = @UserToken))
		begin
			--get the time to extend
			select @ExtendValue = UAT.DaysValid, @AccessLevelID = U.AccessLevelID from Users as U
			join UserAccessTokens as UAT on U.ID = UAT.UserID
				where U.ID = @UserID and UAT.UserToken = @UserToken
			--extend that much time
			update UserAccessTokens
			set
			UserTokenValidTill = DATEADD(day, @ExtendValue, GETDATE())
			where UserToken = @UserToken
			--Set ourselves as a valid log on
			set @Valid = 1
		end
	--return the results
	select @Valid, @AccessLevelID
	RETURN 0
end