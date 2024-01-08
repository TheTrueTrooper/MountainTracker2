CREATE PROCEDURE [dbo].[AcceptFriendRequest]
	@UserToId int,
	@UserFromId int
AS
	update UserFriends
	set 
	Accepted = 1,
	RequestAcceptDate = getdate()
	where UserToId = @UserToId and UserFromId = @UserFromId and Accepted = 0
RETURN 0