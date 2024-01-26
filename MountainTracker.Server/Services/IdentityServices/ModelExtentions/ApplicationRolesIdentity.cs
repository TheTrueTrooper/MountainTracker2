using Microsoft.AspNet.Identity;

namespace MountainTracker.Shared.Model;

/// <summary>
/// simply required to allow for the store. But I did not want to include it in the model objects... still considering how to handle this exactly
/// </summary>
public partial class ApplicationRolesIdentity: ApplicationRoles, IRole<int> {}