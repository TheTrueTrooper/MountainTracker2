﻿using MountainTracker.Shared.Model;

namespace MountainTracker.Server.Services.LocalServices.Interfaces;

public interface IBusyRatingService
{
    public Task<IEnumerable<BusyRatings>> GetAllBusyRatings();

    public Task<BusyRatings?> GetBusyRatingById(byte id);

    public Task<IDictionary<byte, BusyRatings>> GetBusyRatingByIds(IEnumerable<byte> ids);
}
