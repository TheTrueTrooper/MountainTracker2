CREATE PROCEDURE [dbo].[GetUserSalt]
	@UserName as varchar(50)
AS
	SELECT Salt from users where UserName = @UserName
RETURN