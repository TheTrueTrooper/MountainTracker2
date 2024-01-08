CREATE TABLE [dbo].[ApplicationUserRoles] (
    [UserId] INT NOT NULL,
    [RoleId] INT NOT NULL,
    CONSTRAINT [PK_dbo.ApplicationUserRoles] PRIMARY KEY CLUSTERED ([UserId] ASC, [RoleId] ASC),
    CONSTRAINT [FK_dbo.ApplicationUserRoles_dbo.ApplicationRoles_RoleId] FOREIGN KEY ([RoleId]) REFERENCES [dbo].[ApplicationRoles] ([Id]) ON DELETE CASCADE,
    CONSTRAINT [FK_dbo.ApplicationUserRoles_dbo.ApplicationUsers_UserId] FOREIGN KEY ([UserId]) REFERENCES [dbo].[ApplicationUsers] ([Id]) ON DELETE CASCADE
);


GO
CREATE NONCLUSTERED INDEX [IX_UserId]
    ON [dbo].[ApplicationUserRoles]([UserId] ASC);


GO
CREATE NONCLUSTERED INDEX [IX_RoleId]
    ON [dbo].[ApplicationUserRoles]([RoleId] ASC);
