using Microsoft.EntityFrameworkCore;
using MountainTracker.Server.Contexts.MountainTrackerContext;
using MountainTracker.Server.Services.LocalServices.Interfaces;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.Services.LocalServices.Services;

public class BusyRatingsService : IBusyRatingsService
{
    MountainTrackerDatabase1Context Context;
    DbSet<BusyRatings> BusyRatings;

    public BusyRatingsService(MountainTrackerDatabase1Context context)
    {
        Context = context;
        BusyRatings = Context.BusyRatings;
    }

    public async Task<IEnumerable<BusyRatings>> GetAllBusyRatings()
    {
        return await BusyRatings.AsNoTracking().ToArrayAsync();
    }

    public async Task<BusyRatings?> GetBusyRatingById(byte id)
    {
        return await BusyRatings.AsNoTracking().FirstOrDefaultAsync(c => c.Id == id);
    }

    public async Task<IDictionary<byte, BusyRatings>> GetBusyRatingByIds(IEnumerable<byte> ids)
    {
        return await BusyRatings.AsNoTracking().Where(c => ids.Contains(c.Id)).ToDictionaryAsync(key => key.Id, value => value);
    }
}
