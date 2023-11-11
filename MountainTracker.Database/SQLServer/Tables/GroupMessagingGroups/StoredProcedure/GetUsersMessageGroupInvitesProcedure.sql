CREATE PROCEDURE [dbo].[GetUsersMessageGroupInvites]
	@UserID int
AS
	SELECT ID, GroupsName ,TimeCreated
	FROM GroupMessagingGroups as GMG
		join GroupMessagingMembers as GMM on GMG.ID = GMM.GroupMessagingID
	where GMM.UserID = @UserID and GMM.AcceptedInvite = 0;
RETURN 0