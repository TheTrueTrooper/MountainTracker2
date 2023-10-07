CREATE PROCEDURE [dbo].[GetUsersMessageGroups]
	@UserID int
AS
	SELECT ID, GroupsName ,TimeCreated
	FROM GroupMessagingGroups as GMG
		join GroupMessagingMembers as GMM on GMG.ID = GMM.GroupMessagingID
	where GMM.UserID = @UserID and GMM.AcceptedInvite = 1;
RETURN 0