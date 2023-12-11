using Microsoft.EntityFrameworkCore;
using MountainTracker.Server.Contexts.MountainTrackerContext;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.Services.LocalServices.Interfaces;

public interface IRockClimbingDifficultyService
{
    public Task<IEnumerable<RockClimbingDifficulties>> GetAllRockClimbingDifficulties();

    public Task<RockClimbingDifficulties?> GetRockClimbingDifficultyById(byte id);

    public Task<IDictionary<byte, RockClimbingDifficulties>> GetRockClimbingDifficultyByIds(IEnumerable<byte> ids);
}
