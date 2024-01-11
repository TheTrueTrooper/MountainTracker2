CREATE PROCEDURE [dbo].[CheckIfFriend]
	@UserId int,
	@FriendUserId int
AS
	declare @Success as bit
	set @Success = 0
	if(exists(select Accepted from UserFriends where Accepted = 1 and ((UserFromId = @UserId and UserToId = @FriendUserId) or (UserFromId = @FriendUserId and UserToId = @UserId))))
		set @Success = 1
	select @Success as IsFriend
RETURN 0