CREATE TRIGGER [dbo].[LeavingMessagingGroupTrigger]
	ON [dbo].[GroupMessagingMembers]
	After DELETE
	AS
	BEGIN
		declare @GroupId as int, @UsersId as int
		select @UsersId = UserId, @GroupId = GroupMessagingId from deleted

		if Not Exists(select GroupMessagingId from GroupMessagingMembers where GroupMessagingId = @GroupId)
		begin
			delete from GroupMessagingMessages where GroupMessagingId = @GroupId
			delete from GroupMessagingGroups where Id = @GroupId
		end
	END