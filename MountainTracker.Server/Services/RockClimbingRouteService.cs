﻿using Microsoft.EntityFrameworkCore;
using MountainTracker.Server.Contexts.MountainTrackerContext;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.Services;

public class RockClimbingRouteService : IRockClimbingRouteService
{
    MountainTrackerDatabase1Context Context;
    DbSet<RockClimbingRoutes> RockClimbingRoutes;

    public RockClimbingRouteService(MountainTrackerDatabase1Context context)
    {
        this.Context = context;
        this.RockClimbingRoutes = Context.RockClimbingRoutes;
    }

    public async Task<IEnumerable<RockClimbingRoutes>> GetAllRockClimbingRoutes()
    {
        return await RockClimbingRoutes.AsNoTracking().ToArrayAsync();
    }

    public async Task<RockClimbingRoutes?> GetRockClimbingRouteByCode(string routeCode)
    {
        return await RockClimbingRoutes.AsNoTracking().FirstOrDefaultAsync(c => c.RouteCode == routeCode);
    }

    public async Task<RockClimbingRoutes?> GetRockClimbingRouteById(int id)
    {
        return await RockClimbingRoutes.AsNoTracking().FirstOrDefaultAsync(c => c.Id == id);
    }

    public async Task<ILookup<int, RockClimbingRoutes>> GetRockClimbingRoutesByIds(IEnumerable<int> ids)
    {
        var list = await RockClimbingRoutes.AsNoTracking().Where(c => ids.Contains(c.Id)).ToListAsync();
        return list.ToLookup(list => list.Id);
    }

    public async Task<List<RockClimbingRoutes>?> GetRockClimbingRoutesByRockClimbingWall(int climbingWallId)
    {
        return await RockClimbingRoutes.AsNoTracking().Where(c => c.ClimbingWallId == climbingWallId).ToListAsync();
    }

    public async Task<ILookup<int, RockClimbingRoutes>> GetRockClimbingRoutesByRockClimbingWalls(IEnumerable<int> climbingWallIds)
    {
        var list = await RockClimbingRoutes.AsNoTracking().Where(c => climbingWallIds.Contains(c.ClimbingWallId)).ToListAsync();
        return list.ToLookup(list => list.ClimbingWallId);
    }
}
