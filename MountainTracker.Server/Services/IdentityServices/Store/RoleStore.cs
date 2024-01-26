using Microsoft.AspNet.Identity;
using Microsoft.EntityFrameworkCore;
using MountainTracker.Server.Contexts.MountainTrackerContext;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.Services.IdentityServices.Store;

public class RoleStore: IRoleStore<ApplicationRolesIdentity, int>
{
    protected MountainTrackerDatabase1Context DatabaseConnection;
    protected DbSet<ApplicationRoles> Roles;

    public RoleStore(MountainTrackerDatabase1Context database1Context)
    {
        DatabaseConnection = database1Context;

        Roles = DatabaseConnection.ApplicationRoles;
    }

    public void Dispose()
    {
        this.DatabaseConnection.Dispose();
    }

    public async Task CreateAsync(ApplicationRolesIdentity role)
    {
        await Roles.AddAsync(role);
        await DatabaseConnection.SaveChangesAsync();
        return;
    }

    public async Task DeleteAsync(ApplicationRolesIdentity role)
    {
        Roles.Remove(role);
        await DatabaseConnection.SaveChangesAsync();
        return;
    }

    public async Task<ApplicationRolesIdentity> FindByIdAsync(int roleId)
    {
        return (ApplicationRolesIdentity)await Roles.FirstAsync(role => role.Id == roleId);
    }

    public async Task<ApplicationRolesIdentity> FindByNameAsync(string roleName)
    {
        return (ApplicationRolesIdentity)await Roles.FirstAsync(role => role.Name == roleName);
    }

    public async Task UpdateAsync(ApplicationRolesIdentity role)
    {
        Roles.Update(role);
        await DatabaseConnection.SaveChangesAsync();
        return;
    }
}
