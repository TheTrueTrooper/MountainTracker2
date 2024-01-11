using System;
using System.Collections.Generic;

namespace MountainTracker.Shared.Model;

public partial class Countries
{
    public byte Id { get; set; }

    public string EnglishFullName { get; set; } = null!;

    public string CountryCode { get; set; } = null!;

    public virtual ICollection<ApplicationUsers> ApplicationUsers { get; set; } = new List<ApplicationUsers>();

    public virtual ICollection<ProvincesOrStates> ProvincesOrStates { get; set; } = new List<ProvincesOrStates>();
}
