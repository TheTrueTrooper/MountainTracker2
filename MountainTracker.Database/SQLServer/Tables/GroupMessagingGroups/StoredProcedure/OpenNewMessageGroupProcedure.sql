CREATE PROCEDURE [dbo].[OpenNewMessageGroup]
	@NewGroupsName NVARCHAR(50),
	@UserId int
AS
	begin Transaction

	declare @NewGroupId int

	begin try
		insert into [GroupMessagingGroups] ([GroupsName])
		values (@NewGroupsName)
		SELECT @NewGroupId = @@IDENTITY
		insert into [GroupMessagingMembers] ([AcceptedInvite], [TimeJoined], [UserId], [GroupMessagingId])
		values (1, GETDATE(), @UserId, @NewGroupId)
		commit
		RETURN 0
	end try
	begin catch
		rollback
		RETURN -1
	end catch
RETURN -1