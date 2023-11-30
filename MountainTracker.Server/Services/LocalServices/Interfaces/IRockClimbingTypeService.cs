using Microsoft.EntityFrameworkCore;
using MountainTracker.Server.Contexts.MountainTrackerContext;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.Services.LocalServices.Interfaces;

public interface IRockClimbingTypeService
{
    public Task<IEnumerable<RockClimbingTypes>> GetAllRockClimbingTypes();

    public Task<RockClimbingTypes?> GetRockClimbingTypeById(byte id);

    public Task<ILookup<byte, RockClimbingTypes>> GetRockClimbingTypesByIds(IEnumerable<byte> ids);
}
