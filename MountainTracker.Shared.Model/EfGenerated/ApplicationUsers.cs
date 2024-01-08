using System;
using System.Collections.Generic;

namespace MountainTracker.Shared.Model;

public partial class ApplicationUsers
{
    public int Id { get; set; }

    public string? Email { get; set; }

    public bool EmailConfirmed { get; set; }

    public string? PasswordHash { get; set; }

    public string? SecurityStamp { get; set; }

    public string? PhoneNumber { get; set; }

    public bool PhoneNumberConfirmed { get; set; }

    public bool TwoFactorEnabled { get; set; }

    public DateTime? LockoutEndDateUtc { get; set; }

    public bool LockoutEnabled { get; set; }

    public int AccessFailedCount { get; set; }

    public string UserName { get; set; } = null!;

    public string? FirstName { get; set; }

    public string? LastName { get; set; }

    public DateTime DateCreated { get; set; }

    public DateTime DateUpdated { get; set; }

    public DateTime? LastLoginDate { get; set; }

    public DateTime? PasswordChangeDate { get; set; }

    public bool KeepPrivate { get; set; }

    public bool? MetricOverImperial { get; set; }

    public byte? CountryId { get; set; }

    public short? ProvinceId { get; set; }

    public byte[]? ProfilePictureBytes { get; set; }

    public byte[]? BannerPictureBytes { get; set; }

    public string? Bio { get; set; }

    public string? ProfileUrl { get; set; }

    public virtual ICollection<ApplicationUserClaims> ApplicationUserClaims { get; set; } = new List<ApplicationUserClaims>();

    public virtual ICollection<ApplicationUserLogins> ApplicationUserLogins { get; set; } = new List<ApplicationUserLogins>();

    public virtual Countries? Country { get; set; }

    public virtual ICollection<GroupMessagingMembers> GroupMessagingMembers { get; set; } = new List<GroupMessagingMembers>();

    public virtual ICollection<GroupMessagingMessages> GroupMessagingMessages { get; set; } = new List<GroupMessagingMessages>();

    public virtual ProvincesOrStates? Province { get; set; }

    public virtual ICollection<UserDirectMessages> UserDirectMessagesUserFrom { get; set; } = new List<UserDirectMessages>();

    public virtual ICollection<UserDirectMessages> UserDirectMessagesUserTo { get; set; } = new List<UserDirectMessages>();

    public virtual ICollection<UserFriends> UserFriendsUserFrom { get; set; } = new List<UserFriends>();

    public virtual ICollection<UserFriends> UserFriendsUserTo { get; set; } = new List<UserFriends>();

    public virtual ICollection<UsersAreaFavorites> UsersAreaFavorites { get; set; } = new List<UsersAreaFavorites>();

    public virtual ICollection<UsersRockClimbComments> UsersRockClimbComments { get; set; } = new List<UsersRockClimbComments>();

    public virtual ICollection<UsersRockClimbRouteFavorites> UsersRockClimbRouteFavorites { get; set; } = new List<UsersRockClimbRouteFavorites>();

    public virtual ICollection<UsersRockClimbingWallFavorites> UsersRockClimbingWallFavorites { get; set; } = new List<UsersRockClimbingWallFavorites>();

    public virtual ICollection<UsersRockClimbs> UsersRockClimbs { get; set; } = new List<UsersRockClimbs>();

    public virtual ICollection<ApplicationRoles> Role { get; set; } = new List<ApplicationRoles>();
}
