using Microsoft.EntityFrameworkCore;
using MountainTracker.Server.Contexts.MountainTrackerContext;
using MountainTracker.Server.Services.LocalServices.Interfaces;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.Services.LocalServices.Services;

public class RockClimbingDifficultyService : IRockClimbingDifficultyService
{
    MountainTrackerDatabase1Context Context;
    DbSet<RockClimbingDifficulties> RockClimbingDifficulties;

    public RockClimbingDifficultyService(MountainTrackerDatabase1Context context)
    {
        Context = context;
        RockClimbingDifficulties = Context.RockClimbingDifficulties;
    }

    public async Task<IEnumerable<RockClimbingDifficulties>> GetAllRockClimbingDifficulties()
    {
        return await RockClimbingDifficulties.AsNoTracking().ToArrayAsync();
    }

    public async Task<RockClimbingDifficulties?> GetRockClimbingDifficultyById(byte id)
    {
        return await RockClimbingDifficulties.AsNoTracking().FirstOrDefaultAsync(c => c.Id == id);
    }

    public async Task<IDictionary<byte, RockClimbingDifficulties>> GetRockClimbingDifficultyByIds(IEnumerable<byte> ids)
    {
        return await RockClimbingDifficulties.AsNoTracking().Where(c => ids.Contains(c.Id)).ToDictionaryAsync(key => key.Id, value => value);
    }
}
