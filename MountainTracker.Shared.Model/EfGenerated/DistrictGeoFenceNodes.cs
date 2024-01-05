namespace MountainTracker.Shared.Model;

public partial class DistrictGeoFenceNodes
{
    public int DistrictId { get; set; }

    public int Id { get; set; }

    public double Latitude { get; set; }

    public double Longitude { get; set; }

    public virtual Districts District { get; set; } = null!;
}
