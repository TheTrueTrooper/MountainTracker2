using Microsoft.AspNet.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using MountainTracker.Server.Contexts.MountainTrackerContext;
using MountainTracker.Shared.Model;
using System.Security.Claims;

namespace MountainTracker.Server.Services.IdentityServices.Store;

public class UserStore :
    IUserStore<ApplicationUsersIdentity, int>,
    IUserClaimStore<ApplicationUsersIdentity, int>,
    //IUserLoginStore<ApplicationUsersIdentity, int>, For logging in with google due to the nature of this guy we will skip it for now.
    IUserRoleStore<ApplicationUsersIdentity, int>,
    IUserPasswordStore<ApplicationUsersIdentity, int>,
    IUserSecurityStampStore<ApplicationUsersIdentity, int>,
    IUserLockoutStore<ApplicationUsersIdentity, int>,
    IRoleStore<ApplicationRolesIdentity, int>
{
    protected MountainTrackerDatabase1Context DatabaseConnection;
    protected DbSet<ApplicationUsers> Users;
    protected DbSet<ApplicationUserClaims> UsersClaims;
    protected DbSet<ApplicationRolesIdentity> Roles;


    public UserStore(MountainTrackerDatabase1Context database1Context)
    {
        DatabaseConnection = database1Context;

        Users = DatabaseConnection.ApplicationUsers;
        UsersClaims = DatabaseConnection.ApplicationUserClaims;
        Roles = DatabaseConnection.ApplicationRoles;
    }

    public async Task CreateAsync(ApplicationUsersIdentity user)
    {
        await Users.AddAsync(user);
        await DatabaseConnection.SaveChangesAsync();
        return;
    }

    public async Task DeleteAsync(ApplicationUsersIdentity user)
    {
        Users.Remove(user);
        await DatabaseConnection.SaveChangesAsync();
        return;
    }

    public void Dispose()
    {
        this.DatabaseConnection.Dispose();
    }

    public async Task<ApplicationUsersIdentity> FindByIdAsync(int userId)
    {
        return (ApplicationUsersIdentity)await Users.FirstAsync(user => user.Id == userId);
    }

    public async Task<ApplicationUsersIdentity> FindByNameAsync(string userName)
    {
        return (ApplicationUsersIdentity)await Users.FirstAsync(user => user.UserName == userName);
    }

    public async Task UpdateAsync(ApplicationUsersIdentity user)
    {
        Users.Update(user);
        await DatabaseConnection.SaveChangesAsync();
        return;
    }

    public async Task SetPasswordHashAsync(ApplicationUsersIdentity user, string passwordHash)
    {
        var updateUser = await Users.FirstAsync(user => user.Id == user.Id);
        user.PasswordHash = passwordHash;
        Users.Update(updateUser);
        await DatabaseConnection.SaveChangesAsync();
        return;
    }

    public async Task<string> GetPasswordHashAsync(ApplicationUsersIdentity user)
    {
        return (await Users.FirstAsync(user => user.Id == user.Id)).PasswordHash!;
    }

    public async Task<bool> HasPasswordAsync(ApplicationUsersIdentity user)
    {
        string? password = (await Users.FirstAsync(user => user.Id == user.Id)).PasswordHash;
        return password != null && password.Trim().Length > 0 ? true : false;
    }

    public async Task SetSecurityStampAsync(ApplicationUsersIdentity user, string stamp)
    {
        var updateUser = await Users.FirstAsync(user => user.Id == user.Id);
        user.SecurityStamp = stamp;
        Users.Update(updateUser);
        await DatabaseConnection.SaveChangesAsync();
        return;
    }

    public async Task<string> GetSecurityStampAsync(ApplicationUsersIdentity user)
    {
        return (await Users.FirstAsync(user => user.Id == user.Id)).SecurityStamp!;
    }

    public async Task<DateTimeOffset> GetLockoutEndDateAsync(ApplicationUsersIdentity user)
    {
        return (DateTimeOffset)(await Users.FirstAsync(user => user.Id == user.Id)).LockoutEndDateUtc!;
    }

    public async Task SetLockoutEndDateAsync(ApplicationUsersIdentity user, DateTimeOffset lockoutEnd)
    {
        var updateUser = await Users.FirstAsync(user => user.Id == user.Id);
        user.LockoutEndDateUtc = lockoutEnd.UtcDateTime;
        Users.Update(updateUser);
        await DatabaseConnection.SaveChangesAsync();
        return;
    }

    public async Task<int> IncrementAccessFailedCountAsync(ApplicationUsersIdentity user)
    {
        var updateUser = await Users.FirstAsync(user => user.Id == user.Id);
        user.AccessFailedCount += 1;
        Users.Update(updateUser);
        await DatabaseConnection.SaveChangesAsync();
        return user.AccessFailedCount;
    }

    public async Task ResetAccessFailedCountAsync(ApplicationUsersIdentity user)
    {
        var updateUser = await Users.FirstAsync(user => user.Id == user.Id);
        user.AccessFailedCount = 0;
        Users.Update(updateUser);
        await DatabaseConnection.SaveChangesAsync();
        return;
    }

    public async Task<int> GetAccessFailedCountAsync(ApplicationUsersIdentity user)
    {
        return (await Users.FirstAsync(user => user.Id == user.Id)).AccessFailedCount!;
    }

    public async Task<bool> GetLockoutEnabledAsync(ApplicationUsersIdentity user)
    {
        return (await Users.FirstAsync(user => user.Id == user.Id)).LockoutEnabled!;
    }

    public async Task SetLockoutEnabledAsync(ApplicationUsersIdentity user, bool enabled)
    {
        var updateUser = await Users.FirstAsync(user => user.Id == user.Id);
        user.LockoutEnabled = enabled;
        Users.Update(updateUser);
        await DatabaseConnection.SaveChangesAsync();
        return;
    }

    public async Task<IList<Claim>> GetClaimsAsync(ApplicationUsersIdentity user)
    {
        var userClaims = (await Users.FirstAsync(user => user.Id == user.Id)).ApplicationUserClaims;
        return userClaims.Select(claim => new Claim(claim.ClaimType!, claim.ClaimValue!)).ToList();
    }

    public async Task AddClaimAsync(ApplicationUsersIdentity user, Claim claim)
    {
        var updateUser = await Users.FirstAsync(user => user.Id == user.Id);
        if (updateUser != null && !updateUser.ApplicationUserClaims.Any(x => x.ClaimType == claim.ValueType && claim.Value == claim.Value))
        {
            var newClaim = new ApplicationUserClaims()
            {
                ClaimType = claim.ValueType,
                ClaimValue = claim.Value,
                UserId = user.Id,
            };
            await UsersClaims.AddAsync(newClaim);
            await DatabaseConnection.SaveChangesAsync();
        }
        return;
    }

    public async Task RemoveClaimAsync(ApplicationUsersIdentity user, Claim claim)
    {
        var updateUser = await Users.FirstAsync(user => user.Id == user.Id);
        if (updateUser != null)
        {
            var claimsToRemove = updateUser.ApplicationUserClaims.Where(x => x.ClaimType == claim.ValueType && claim.Value == claim.Value);
            UsersClaims.RemoveRange(claimsToRemove);
            await DatabaseConnection.SaveChangesAsync();
        }
        return;
    }

    public async Task AddToRoleAsync(ApplicationUsersIdentity user, string roleName)
    {
        var updateUser = await Users.FirstAsync(user => user.Id == user.Id);
        IEnumerable<ApplicationRolesIdentity> roles = Roles;
        if (updateUser != null && !updateUser.Role.Any(x => x.Name == roleName))
        {
            updateUser.Role.Add(roles.First(x => x.Name == roleName));
            Users.Update(updateUser);
            await DatabaseConnection.SaveChangesAsync();
        }
        return;
    }

    public async Task RemoveFromRoleAsync(ApplicationUsersIdentity user, string roleName)
    {
        var updateUser = await Users.FirstAsync(user => user.Id == user.Id);
        IEnumerable<ApplicationRolesIdentity> roles = Roles;
        if (updateUser != null && !updateUser.Role.Any(x => x.Name == roleName))
        {
            updateUser.Role.Remove(roles.First(x => x.Name == roleName));
            Users.Update(updateUser);
            await DatabaseConnection.SaveChangesAsync();
        }
        return;
    }

    public async Task<IList<string>> GetRolesAsync(ApplicationUsersIdentity user)
    {
        return (await Users.FirstAsync(user => user.Id == user.Id)).Role.Select(x => x.Name).ToList();
    }

    public async Task<bool> IsInRoleAsync(ApplicationUsersIdentity user, string roleName)
    {
        return (await Users.FirstAsync(user => user.Id == user.Id)).Role.Any(x => x.Name == roleName);
    }

    public Task CreateAsync(ApplicationRolesIdentity role)
    {
        throw new NotImplementedException();
    }

    public Task UpdateAsync(ApplicationRolesIdentity role)
    {
        throw new NotImplementedException();
    }

    public Task DeleteAsync(ApplicationRolesIdentity role)
    {
        throw new NotImplementedException();
    }

    Task<ApplicationRolesIdentity> IRoleStore<ApplicationRolesIdentity, int>.FindByIdAsync(int roleId)
    {
        throw new NotImplementedException();
    }

    Task<ApplicationRolesIdentity> IRoleStore<ApplicationRolesIdentity, int>.FindByNameAsync(string roleName)
    {
        throw new NotImplementedException();
    }
}
