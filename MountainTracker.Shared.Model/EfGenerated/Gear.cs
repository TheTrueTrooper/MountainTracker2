namespace MountainTracker.Shared.Model;

public partial class Gear
{
    public byte Id { get; set; }

    public string EnglishFullName { get; set; } = null!;

    public virtual ICollection<GearSizes> GearSizes { get; set; } = new List<GearSizes>();

    public virtual ICollection<ClimbingTypes> ClimbingType { get; set; } = new List<ClimbingTypes>();
}
