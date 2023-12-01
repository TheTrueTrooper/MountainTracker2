using Microsoft.EntityFrameworkCore;
using MountainTracker.Server.Contexts.MountainTrackerContext;
using MountainTracker.Server.Services.LocalServices.Interfaces;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.Services.LocalServices.Services;

public class ClimbingQualityRatingsService : IClimbingQualityRatingsService
{
    MountainTrackerDatabase1Context Context;
    DbSet<ClimbingQualityRatings> ClimbingQualityRatings;

    public ClimbingQualityRatingsService(MountainTrackerDatabase1Context context)
    {
        Context = context;
        ClimbingQualityRatings = Context.ClimbingQualityRatings;
    }

    public async Task<IEnumerable<ClimbingQualityRatings>> GetAllClimbingQualityRatings()
    {
        return await ClimbingQualityRatings.AsNoTracking().ToArrayAsync();
    }

    public async Task<ClimbingQualityRatings?> GetClimbingQualityRatingById(byte id)
    {
        return await ClimbingQualityRatings.AsNoTracking().FirstOrDefaultAsync(c => c.Id == id);
    }

    public async Task<IDictionary<byte, ClimbingQualityRatings>> GetClimbingQualityRatingByIds(IEnumerable<byte> ids)
    {
        return await ClimbingQualityRatings.AsNoTracking().Where(c => ids.Contains(c.Id)).ToDictionaryAsync(key=>key.Id, value=>value);
    }
}
