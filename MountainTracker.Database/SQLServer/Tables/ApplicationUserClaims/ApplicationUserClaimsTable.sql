CREATE TABLE [dbo].[ApplicationUserClaims] (
    [Id]         INT            IDENTITY (1, 1) NOT NULL,
    [UserId]     INT            NOT NULL,
    [ClaimType]  NVARCHAR (MAX) NOT NULL,
    [ClaimValue] NVARCHAR (MAX) NOT NULL,
    CONSTRAINT [PK_ApplicationUserClaims] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_ApplicationUserClaims_ApplicationUsers_UserId] FOREIGN KEY ([UserId]) REFERENCES [dbo].[ApplicationUsers] ([Id]) ON DELETE CASCADE
);


GO
CREATE NONCLUSTERED INDEX [IX_UserId]
    ON [dbo].[ApplicationUserClaims]([UserId] ASC);