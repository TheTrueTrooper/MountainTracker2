namespace MountainTracker.Shared.Model;

public partial class GroupMessagingGroups
{
    public int Id { get; set; }

    public string GroupsName { get; set; } = null!;

    public DateTime TimeCreated { get; set; }

    public virtual ICollection<GroupMessagingMembers> GroupMessagingMembers { get; set; } = new List<GroupMessagingMembers>();

    public virtual ICollection<GroupMessagingMessages> GroupMessagingMessages { get; set; } = new List<GroupMessagingMessages>();
}
