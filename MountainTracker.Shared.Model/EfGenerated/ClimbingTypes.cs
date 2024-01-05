namespace MountainTracker.Shared.Model;

public partial class ClimbingTypes
{
    public byte Id { get; set; }

    public string EnglishFullName { get; set; } = null!;

    public virtual ICollection<Gear> Gear { get; set; } = new List<Gear>();
}
