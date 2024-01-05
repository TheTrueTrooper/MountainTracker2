using MountainTracker.Shared.Model;

namespace MountainTracker.Server.Services.LocalServices.Interfaces;

public interface IRockClimbingTypeService
{
    public Task<IEnumerable<RockClimbingTypes>> GetAllRockClimbingTypes();

    public Task<RockClimbingTypes?> GetRockClimbingTypeById(byte id);

    public Task<IDictionary<byte, RockClimbingTypes>> GetRockClimbingTypeByIds(IEnumerable<byte> ids);
}
