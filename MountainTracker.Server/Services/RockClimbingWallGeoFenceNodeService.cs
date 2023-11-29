using Microsoft.EntityFrameworkCore;
using MountainTracker.Server.Contexts.MountainTrackerContext;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.Services;

public class RockClimbingWallGeoFenceNodeService : IRockClimbingWallGeoFenceNodeService
{
    MountainTrackerDatabase1Context Context;
    DbSet<RockClimbingWallGeoFenceNodes> RockClimbingWallGeoFenceNodes;

    public RockClimbingWallGeoFenceNodeService(MountainTrackerDatabase1Context context)
    {
        this.Context = context;
        this.RockClimbingWallGeoFenceNodes = Context.RockClimbingWallGeoFenceNodes;
    }

    public async Task<IEnumerable<RockClimbingWallGeoFenceNodes>> GetAllRockClimbingWallGeoFenceNodes()
    {
        return await RockClimbingWallGeoFenceNodes.AsNoTracking().ToArrayAsync();
    }

    public async Task<RockClimbingWallGeoFenceNodes?> GetRockClimbingWallGeoFenceNodeById(int id)
    {
        return await RockClimbingWallGeoFenceNodes.AsNoTracking().FirstOrDefaultAsync(c => c.Id == id);
    }

    public async Task<List<RockClimbingWallGeoFenceNodes>?> GetRockClimbingWallGeoFenceNodesByRockClimbingWall(int climbingWallId)
    {
        return await RockClimbingWallGeoFenceNodes.AsNoTracking().Where(c => c.ClimbingWallId == climbingWallId).ToListAsync();
    }

    public async Task<ILookup<int, RockClimbingWallGeoFenceNodes>> GetRockClimbingWallGeoFenceNodesByRockClimbingWalls(IEnumerable<int> climbingWallIds)
    {
        var list = await RockClimbingWallGeoFenceNodes.AsNoTracking().Where(c => climbingWallIds.Contains(c.ClimbingWallId)).ToListAsync();
        return list.ToLookup(list=>list.ClimbingWallId);
    }
}
