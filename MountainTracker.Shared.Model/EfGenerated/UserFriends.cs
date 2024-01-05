namespace MountainTracker.Shared.Model;

public partial class UserFriends
{
    public int UserFromId { get; set; }

    public int UserToId { get; set; }

    public DateTime RequestCreationDate { get; set; }

    public DateTime? RequestAcceptDate { get; set; }

    public bool Accepted { get; set; }

    public virtual Users UserFrom { get; set; } = null!;

    public virtual Users UserTo { get; set; } = null!;
}
