﻿using Microsoft.EntityFrameworkCore;
using MountainTracker.Server.Contexts.MountainTrackerContext;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.Services;

public class RockClimbingTypeService : IRockClimbingTypeService
{
    MountainTrackerDatabase1Context Context;
    DbSet<RockClimbingTypes> RockClimbingTypes;

    public RockClimbingTypeService(MountainTrackerDatabase1Context context)
    {
        this.Context = context;
        this.RockClimbingTypes = Context.RockClimbingTypes;
    }

    public async Task<IEnumerable<RockClimbingTypes>> GetAllRockClimbingTypes()
    {
        return await RockClimbingTypes.AsNoTracking().ToArrayAsync();
    }

    public async Task<RockClimbingTypes?> GetRockClimbingTypeById(byte id)
    {
        return await RockClimbingTypes.AsNoTracking().FirstOrDefaultAsync(c => c.Id == id);
    }

    public async Task<ILookup<byte, RockClimbingTypes>> GetRockClimbingTypesByIds(IEnumerable<byte> ids)
    {
        var list = await RockClimbingTypes.AsNoTracking().Where(c => ids.Contains(c.Id)).ToListAsync();
        return list.ToLookup(list=>list.Id);
    }
}
