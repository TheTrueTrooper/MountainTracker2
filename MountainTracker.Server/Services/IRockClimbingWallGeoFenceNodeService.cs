using MountainTracker.Shared.Model;

namespace MountainTracker.Server.Services;

public interface IRockClimbingWallGeoFenceNodeService
{
    public Task<IEnumerable<RockClimbingWallGeoFenceNodes>> GetAllRockClimbingWallGeoFenceNodes();

    public Task<RockClimbingWallGeoFenceNodes?> GetRockClimbingWallGeoFenceNodeById(int id);

    public Task<List<RockClimbingWallGeoFenceNodes>?> GetRockClimbingWallGeoFenceNodesByRockClimbingWall(int climbingWallId);

    public Task<ILookup<int, RockClimbingWallGeoFenceNodes>> GetRockClimbingWallGeoFenceNodesByRockClimbingWalls(IEnumerable<int> climbingWallIds);
}
