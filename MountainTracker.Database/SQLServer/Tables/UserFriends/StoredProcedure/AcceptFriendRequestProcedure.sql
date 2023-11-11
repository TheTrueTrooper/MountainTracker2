CREATE PROCEDURE [dbo].[AcceptFriendRequest]
	@UserToID int,
	@UserFromID int
AS
	update UserFriends
	set 
	Accepted = 1,
	RequestAcceptDate = getdate()
	where UserToID = @UserToID and UserFromID = @UserFromID and Accepted = 0
RETURN 0