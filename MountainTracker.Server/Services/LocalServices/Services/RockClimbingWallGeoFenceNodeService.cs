using Microsoft.EntityFrameworkCore;
using MountainTracker.Server.Contexts.MountainTrackerContext;
using MountainTracker.Server.Services.LocalServices.Interfaces;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.Services.LocalServices.Services;

public class RockClimbingWallGeoFenceNodeService : IRockClimbingWallGeoFenceNodeService
{
    MountainTrackerDatabase1Context Context;
    DbSet<RockClimbingWallGeoFenceNodes> RockClimbingWallGeoFenceNodes;

    public RockClimbingWallGeoFenceNodeService(MountainTrackerDatabase1Context context)
    {
        Context = context;
        RockClimbingWallGeoFenceNodes = Context.RockClimbingWallGeoFenceNodes;
    }

    public async Task<IEnumerable<RockClimbingWallGeoFenceNodes>> GetAllRockClimbingWallGeoFenceNodes()
    {
        return await RockClimbingWallGeoFenceNodes.AsNoTracking().ToArrayAsync();
    }

    public async Task<RockClimbingWallGeoFenceNodes?> GetRockClimbingWallGeoFenceNodeById(int id)
    {
        return await RockClimbingWallGeoFenceNodes.AsNoTracking().FirstOrDefaultAsync(c => c.Id == id);
    }

    public async Task<IDictionary<int, RockClimbingWallGeoFenceNodes>> GetRockClimbingWallGeoFenceNodesByIds(IEnumerable<int> ids)
    {
        return await RockClimbingWallGeoFenceNodes.AsNoTracking().Where(c => ids.Contains(c.Id)).ToDictionaryAsync(key => key.Id, value => value);
    }

    public async Task<IEnumerable<RockClimbingWallGeoFenceNodes>?> GetRockClimbingWallGeoFenceNodesByRockClimbingWall(int climbingWallId)
    {
        return await RockClimbingWallGeoFenceNodes.AsNoTracking().Where(c => c.ClimbingWallId == climbingWallId).ToListAsync();
    }

    public async Task<ILookup<int, RockClimbingWallGeoFenceNodes>> GetRockClimbingWallGeoFenceNodesByRockClimbingWalls(IEnumerable<int> climbingWallIds)
    {
        var list = await RockClimbingWallGeoFenceNodes.AsNoTracking().Where(c => climbingWallIds.Contains(c.ClimbingWallId)).ToListAsync();
        return list.ToLookup(list => list.ClimbingWallId);
    }
}
