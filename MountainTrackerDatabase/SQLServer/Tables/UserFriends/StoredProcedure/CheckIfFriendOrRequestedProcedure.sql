CREATE PROCEDURE [dbo].[CheckIfFriendOrRequested]
	@UserID int,
	@FriendUserID int
AS
	declare @Success as bit
	set @Success = 0
	if(exists(select Accepted from UserFriends where (UserFromID = @UserID and UserToID = @FriendUserID) or (UserFromID = @FriendUserID and UserToID = @UserID)))
		set @Success = 1
	select @Success as IsFriend
RETURN 0