using Microsoft.EntityFrameworkCore;
using MountainTracker.Server.Contexts.MountainTrackerContext;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.Services;

public interface IRockClimbingTypeService
{
    public Task<IEnumerable<RockClimbingTypes>> GetAllRockClimbingTypes();

    public Task<RockClimbingTypes?> GetRockClimbingTypeById(byte id);

    public Task<ILookup<byte, RockClimbingTypes>> GetRockClimbingTypesByIds(IEnumerable<byte> ids);
}
