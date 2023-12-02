using Microsoft.EntityFrameworkCore;
using MountainTracker.Server.Contexts.MountainTrackerContext;
using MountainTracker.Server.Services.LocalServices.Interfaces;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.Services.LocalServices.Services;

public class RockClimbingRouteService : IRockClimbingRouteService
{
    MountainTrackerDatabase1Context Context;
    DbSet<RockClimbingRoutes> RockClimbingRoutes;

    public RockClimbingRouteService(MountainTrackerDatabase1Context context)
    {
        Context = context;
        RockClimbingRoutes = Context.RockClimbingRoutes;
    }

    public async Task<IEnumerable<RockClimbingRoutes>> GetAllRockClimbingRoutes()
    {
        return await RockClimbingRoutes.AsNoTracking().ToArrayAsync();
    }

    public async Task<RockClimbingRoutes?> GetRockClimbingRouteByCode(string routeCode)
    {
        string[] codes = routeCode.Split('-');
        if (codes.Length < 8)
        {
            return null;
        }
        return await RockClimbingRoutes.AsNoTracking().FirstOrDefaultAsync(c => c.RouteCode == codes[7] && c.ClimbingWall.WallCode == codes[6] && c.ClimbingWall.Area.AreaCode == codes[5] && c.ClimbingWall.Area.Zone.ZoneCode == codes[4] && c.ClimbingWall.Area.Zone.District.DistrictCode == codes[3] && c.ClimbingWall.Area.Zone.District.Region.RegionCode == codes[2] && c.ClimbingWall.Area.Zone.District.Region.ProvinceOrState.RegionCode == codes[1] && c.ClimbingWall.Area.Zone.District.Region.ProvinceOrState.Country.CountryCode == codes[0]);
    }

    public async Task<RockClimbingRoutes?> GetRockClimbingRouteById(int id)
    {
        return await RockClimbingRoutes.AsNoTracking().FirstOrDefaultAsync(c => c.Id == id);
    }

    public async Task<IDictionary<int, RockClimbingRoutes>> GetRockClimbingRoutesByIds(IEnumerable<int> ids)
    {
        return await RockClimbingRoutes.AsNoTracking().Where(c => ids.Contains(c.Id)).ToDictionaryAsync(key=>key.Id, value=>value);
    }

    public async Task<IEnumerable<RockClimbingRoutes>?> GetRockClimbingRoutesByRockClimbingWall(int climbingWallId)
    {
        return await RockClimbingRoutes.AsNoTracking().Where(c => c.ClimbingWallId == climbingWallId).ToListAsync();
    }

    public async Task<ILookup<int, RockClimbingRoutes>> GetRockClimbingRoutesByRockClimbingWalls(IEnumerable<int> climbingWallIds)
    {
        var list = await RockClimbingRoutes.AsNoTracking().Where(c => climbingWallIds.Contains(c.ClimbingWallId)).ToListAsync();
        return list.ToLookup(list => list.ClimbingWallId);
    }

    public async Task<ILookup<byte, RockClimbingRoutes>> GetRockClimbingRoutesByTypes(IEnumerable<byte> typeIds)
    {
        var list = await RockClimbingRoutes.AsNoTracking().Where(c => typeIds.Contains(c.TypeId)).ToListAsync();
        return list.ToLookup(list => list.TypeId);
    }
}
