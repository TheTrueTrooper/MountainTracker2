CREATE PROCEDURE [dbo].[OpenNewMessageGroup]
	@NewGroupsName NVARCHAR(50),
	@UserID int
AS
	begin Transaction

	declare @NewGroupID int

	begin try
		insert into [GroupMessagingGroups] ([GroupsName])
		values (@NewGroupsName)
		SELECT @NewGroupID = @@IDENTITY
		insert into [GroupMessagingMembers] ([AcceptedInvite], [TimeJoined], [UserID], [GroupMessagingID])
		values (1, GETDATE(), @UserID, @NewGroupID)
		commit
		RETURN 0
	end try
	begin catch
		rollback
		RETURN -1
	end catch
RETURN -1