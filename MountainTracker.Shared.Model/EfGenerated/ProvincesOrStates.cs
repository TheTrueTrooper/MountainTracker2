using System;
using System.Collections.Generic;

namespace MountainTracker.Shared.Model;

public partial class ProvincesOrStates
{
    public byte CountryId { get; set; }

    public short Id { get; set; }

    public string EnglishFullName { get; set; } = null!;

    public string RegionCode { get; set; } = null!;

    public virtual Countries Country { get; set; } = null!;

    public virtual ICollection<Regions> Regions { get; set; } = new List<Regions>();
}
