CREATE TABLE [dbo].[ApplicationRoles] (
    [Id]   INT            IDENTITY (0, 1) NOT NULL,
    [Name] NVARCHAR (256) NOT NULL,
    CONSTRAINT [PK_ApplicationRoles] PRIMARY KEY CLUSTERED ([Id] ASC)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [RoleNameIndex]
    ON [dbo].[ApplicationRoles]([Name] ASC);