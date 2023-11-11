CREATE PROCEDURE [dbo].[GetUserSalt]
	@UserName as varchar(50)
AS
	SELECT Salt from Users where UserName = @UserName
RETURN