using MountainTracker.Shared.Model;

namespace MountainTracker.Server.Services;

public interface IRockClimbingWallService
{
    public Task<IEnumerable<RockClimbingWalls>> GetAllRockClimbingWalls();

    public Task<RockClimbingWalls?> GetRockClimbingWallByCode(string wallCode);

    public Task<RockClimbingWalls?> GetRockClimbingWallById(int id);

    public Task<List<RockClimbingWalls>?> GetRockClimbingWallsByArea(int areaId);

    public Task<ILookup<int, RockClimbingWalls>> GetRockClimbingWallsByAreas(IEnumerable<int> areaIds);

    public Task<ILookup<int, RockClimbingWalls>> GetRockClimbingWallsByIds(IEnumerable<int> ids);
}
