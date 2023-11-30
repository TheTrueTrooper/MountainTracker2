﻿using MountainTracker.Shared.Model;

namespace MountainTracker.Server.Services.LocalServices.Interfaces;

public interface IRegionService
{
    public Task<IEnumerable<Regions>> GetAllRegions();

    public Task<Regions?> GetRegionByCode(string regionCode);

    public Task<Regions?> GetRegionById(int id);

    public Task<List<Regions>?> GetRegionsByProvinceOrState(int provinceOrStateIds);

    public Task<ILookup<short, Regions>> GetRegionsByProvincesOrStates(IEnumerable<short> provinceOrStateIds);

    public Task<ILookup<int, Regions>> GetRegionsByIds(IEnumerable<int> ids);
}