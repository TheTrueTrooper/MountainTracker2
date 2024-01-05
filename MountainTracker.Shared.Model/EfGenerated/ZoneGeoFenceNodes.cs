namespace MountainTracker.Shared.Model;

public partial class ZoneGeoFenceNodes
{
    public int ZoneId { get; set; }

    public int Id { get; set; }

    public double Latitude { get; set; }

    public double Longitude { get; set; }

    public virtual Zones Zone { get; set; } = null!;
}
