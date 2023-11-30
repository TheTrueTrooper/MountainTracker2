using MountainTracker.Shared.Model;

namespace MountainTracker.Server.Services.LocalServices.Interfaces;

public interface IRockClimbingWallGeoFenceNodeService
{
    public Task<IEnumerable<RockClimbingWallGeoFenceNodes>> GetAllRockClimbingWallGeoFenceNodes();

    public Task<RockClimbingWallGeoFenceNodes?> GetRockClimbingWallGeoFenceNodeById(int id);

    public Task<IEnumerable<RockClimbingWallGeoFenceNodes>?> GetRockClimbingWallGeoFenceNodesByRockClimbingWall(int climbingWallId);

    public Task<ILookup<int, RockClimbingWallGeoFenceNodes>> GetRockClimbingWallGeoFenceNodesByRockClimbingWalls(IEnumerable<int> climbingWallIds);

    public Task<IDictionary<int, RockClimbingWallGeoFenceNodes>> GetRockClimbingWallGeoFenceNodesByIds(IEnumerable<int> ids);
}
