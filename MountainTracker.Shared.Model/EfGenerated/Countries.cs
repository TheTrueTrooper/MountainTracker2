﻿namespace MountainTracker.Shared.Model;

public partial class Countries
{
    public byte Id { get; set; }

    public string EnglishFullName { get; set; } = null!;

    public string CountryCode { get; set; } = null!;

    public virtual ICollection<ProvincesOrStates> ProvincesOrStates { get; set; } = new List<ProvincesOrStates>();

    public virtual ICollection<Users> Users { get; set; } = new List<Users>();
}
