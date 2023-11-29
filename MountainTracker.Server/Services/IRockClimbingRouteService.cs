using MountainTracker.Shared.Model;

namespace MountainTracker.Server.Services;

public interface IRockClimbingRouteService
{
    public Task<IEnumerable<RockClimbingRoutes>> GetAllRockClimbingRoutes();

    public Task<RockClimbingRoutes?> GetRockClimbingRouteByCode(string routeCode);

    public Task<RockClimbingRoutes?> GetRockClimbingRouteById(int id);

    public Task<List<RockClimbingRoutes>?> GetRockClimbingRoutesByRockClimbingWall(int climbingWallId);

    public Task<ILookup<int, RockClimbingRoutes>> GetRockClimbingRoutesByRockClimbingWalls(IEnumerable<int> climbingWallIds);

    public Task<ILookup<int, RockClimbingRoutes>> GetRockClimbingRoutesByIds(IEnumerable<int> ids);
}
