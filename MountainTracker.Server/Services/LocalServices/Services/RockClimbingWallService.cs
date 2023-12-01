using Microsoft.EntityFrameworkCore;
using MountainTracker.Server.Contexts.MountainTrackerContext;
using MountainTracker.Server.Services.LocalServices.Interfaces;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.Services.LocalServices.Services;

public class RockClimbingWallService : IRockClimbingWallService
{
    MountainTrackerDatabase1Context Context;
    DbSet<RockClimbingWalls> RockClimbingWalls;

    public RockClimbingWallService(MountainTrackerDatabase1Context context)
    {
        Context = context;
        RockClimbingWalls = Context.RockClimbingWalls;
    }

    public async Task<IEnumerable<RockClimbingWalls>> GetAllRockClimbingWalls()
    {
        return await RockClimbingWalls.AsNoTracking().ToArrayAsync();
    }

    public async Task<RockClimbingWalls?> GetRockClimbingWallByCode(string wallCode)
    {
        return await RockClimbingWalls.AsNoTracking().FirstOrDefaultAsync(c => c.WallCode == wallCode);
    }

    public async Task<RockClimbingWalls?> GetRockClimbingWallById(int id)
    {
        return await RockClimbingWalls.AsNoTracking().FirstOrDefaultAsync(c => c.Id == id);
    }

    public async Task<IEnumerable<RockClimbingWalls>?> GetRockClimbingWallsByArea(int areaId)
    {
        return await RockClimbingWalls.AsNoTracking().Where(c => c.AreaId == areaId).ToListAsync();
    }

    public async Task<ILookup<int, RockClimbingWalls>> GetRockClimbingWallsByAreas(IEnumerable<int> areaIds)
    {
        var list = await RockClimbingWalls.AsNoTracking().Where(c => areaIds.Contains(c.AreaId)).ToListAsync();
        return list.ToLookup(list => list.AreaId);
    }

    public async Task<IDictionary<int, RockClimbingWalls>> GetRockClimbingWallsByIds(IEnumerable<int> ids)
    {
        return await RockClimbingWalls.AsNoTracking().Where(c => ids.Contains(c.Id)).ToDictionaryAsync(key => key.Id, value => value);
    }
}
