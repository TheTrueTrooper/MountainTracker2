﻿CREATE PROCEDURE [dbo].[GetUsersMessageGroupInvites]
	@UserId int
AS
	SELECT Id, GroupsName ,TimeCreated
	FROM GroupMessagingGroups as GMG
		join GroupMessagingMembers as GMM on GMG.Id = GMM.GroupMessagingId
	where GMM.UserId = @UserId and GMM.AcceptedInvite = 0;
RETURN 0