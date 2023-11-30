using MountainTracker.Shared.Model;

namespace MountainTracker.Server.Services.LocalServices.Interfaces;

public interface IRockClimbingRouteService
{
    public Task<IEnumerable<RockClimbingRoutes>> GetAllRockClimbingRoutes();

    public Task<RockClimbingRoutes?> GetRockClimbingRouteByCode(string routeCode);

    public Task<RockClimbingRoutes?> GetRockClimbingRouteById(int id);

    public Task<List<RockClimbingRoutes>?> GetRockClimbingRoutesByRockClimbingWall(int climbingWallId);

    public Task<ILookup<int, RockClimbingRoutes>> GetRockClimbingRoutesByRockClimbingWalls(IEnumerable<int> climbingWallIds);

    public Task<ILookup<int, RockClimbingRoutes>> GetRockClimbingRoutesByIds(IEnumerable<int> ids);

    public Task<ILookup<byte, RockClimbingRoutes>> GetRockClimbingRoutesByTypes(IEnumerable<byte> typeIds);
}
