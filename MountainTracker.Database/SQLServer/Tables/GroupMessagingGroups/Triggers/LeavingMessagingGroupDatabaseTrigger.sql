CREATE TRIGGER [dbo].[LeavingMessagingGroupTrigger]
	ON [dbo].[GroupMessagingMembers]
	After DELETE
	AS
	BEGIN
		declare @GroupID as int, @UsersID as int
		select @UsersID = UserID, @GroupID = GroupMessagingID from deleted

		if Not Exists(select GroupMessagingID from GroupMessagingMembers where GroupMessagingID = @GroupID)
		begin
			delete from GroupMessagingMessages where GroupMessagingID = @GroupID
			delete from GroupMessagingGroups where ID = @GroupID
		end
	END