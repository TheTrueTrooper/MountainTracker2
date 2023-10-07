CREATE PROCEDURE [dbo].[UserLogin]
	@UserName varchar(50),
	@HashedPassword varchar(50)
AS
begin
	declare @Success as bit, @UserID as int
	if(exists(select U.ID
		from Users as U
		full join UserAccessLevels as UAL on UAL.ID = U.AccessLevelID
			where U.UserName = @UserName and U.HashedPassword = @HashedPassword))
	begin
		select @UserID = U.ID
		from Users as U
			where U.UserName = @UserName and U.HashedPassword = @HashedPassword
		set @Success = 1
	end
	else
	begin
		set @Success = 0
	end
	select @Success as Success, @UserID as UserID 
	return
end