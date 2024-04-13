using System;
using System.Collections.Generic;

namespace MountainTracker.Shared.Model;

public partial class UsersProfiles
{
    public string Id { get; set; } = null!;

    public string? FirstName { get; set; }

    public string? MiddleName { get; set; }

    public string? LastName { get; set; }

    public string? UserName { get; set; }

    public string? FormAlias { get; set; }

    public string? ContactEmail { get; set; }

    public string? ContactPhone { get; set; }

    public bool UseFormAlias { get; set; }

    public bool KeepPrivate { get; set; }

    public bool MetricOverImperial { get; set; }

    public byte? CountryId { get; set; }

    public short? ProvinceId { get; set; }

    public byte[]? ProfilePictureBytes { get; set; }

    public byte[]? BannerPictureBytes { get; set; }

    public string? Bio { get; set; }

    public string? ProfileUrl { get; set; }

    public virtual ICollection<GroupMessagingMembers> GroupMessagingMembers { get; set; } = new List<GroupMessagingMembers>();

    public virtual ICollection<GroupMessagingMessages> GroupMessagingMessages { get; set; } = new List<GroupMessagingMessages>();

    public virtual ICollection<UserDirectMessages> UserDirectMessagesUserFrom { get; set; } = new List<UserDirectMessages>();

    public virtual ICollection<UserDirectMessages> UserDirectMessagesUserTo { get; set; } = new List<UserDirectMessages>();

    public virtual ICollection<UserFriends> UserFriendsUserFrom { get; set; } = new List<UserFriends>();

    public virtual ICollection<UserFriends> UserFriendsUserTo { get; set; } = new List<UserFriends>();

    public virtual ICollection<UsersAreaFavorites> UsersAreaFavorites { get; set; } = new List<UsersAreaFavorites>();

    public virtual ICollection<UsersRockClimbComments> UsersRockClimbComments { get; set; } = new List<UsersRockClimbComments>();

    public virtual ICollection<UsersRockClimbRouteFavorites> UsersRockClimbRouteFavorites { get; set; } = new List<UsersRockClimbRouteFavorites>();

    public virtual ICollection<UsersRockClimbingWallFavorites> UsersRockClimbingWallFavorites { get; set; } = new List<UsersRockClimbingWallFavorites>();
}
