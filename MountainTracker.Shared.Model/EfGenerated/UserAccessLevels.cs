namespace MountainTracker.Shared.Model;

public partial class UserAccessLevels
{
    public byte Id { get; set; }

    public string? EnglishName { get; set; }

    public virtual ICollection<Users> Users { get; set; } = new List<Users>();
}
