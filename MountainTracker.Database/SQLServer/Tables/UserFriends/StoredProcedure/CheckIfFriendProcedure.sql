CREATE PROCEDURE [dbo].[CheckIfFriend]
	@UserID int,
	@FriendUserID int
AS
	declare @Success as bit
	set @Success = 0
	if(exists(select Accepted from UserFriends where Accepted = 1 and ((UserFromID = @UserID and UserToID = @FriendUserID) or (UserFromID = @FriendUserID and UserToID = @UserID))))
		set @Success = 1
	select @Success as IsFriend
RETURN 0