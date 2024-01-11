using Microsoft.EntityFrameworkCore;
using MountainTracker.Server.Contexts.MountainTrackerContext;
using MountainTracker.Server.Services.LocalServices.Interfaces;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.Services.LocalServices.Services;

public class RockClimbingTypeService : IRockClimbingTypeService
{
    MountainTrackerDatabase1Context Context;
    DbSet<RockClimbingTypes> RockClimbingTypes;

    public RockClimbingTypeService(MountainTrackerDatabase1Context context)
    {
        Context = context;
        RockClimbingTypes = Context.RockClimbingTypes;
    }

    public async Task<IEnumerable<RockClimbingTypes>> GetAllRockClimbingTypes()
    {
        return await RockClimbingTypes.AsNoTracking().ToArrayAsync();
    }

    public async Task<RockClimbingTypes?> GetRockClimbingTypeById(byte id)
    {
        return await RockClimbingTypes.AsNoTracking().FirstOrDefaultAsync(c => c.Id == id);
    }

    public async Task<IDictionary<byte, RockClimbingTypes>> GetRockClimbingTypeByIds(IEnumerable<byte> ids)
    {
        return await RockClimbingTypes.AsNoTracking().Where(c => ids.Contains(c.Id)).ToDictionaryAsync(key => key.Id, value => value);
    }
}
