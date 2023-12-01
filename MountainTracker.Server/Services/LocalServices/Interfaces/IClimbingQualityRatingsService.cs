using Microsoft.EntityFrameworkCore;
using MountainTracker.Server.Contexts.MountainTrackerContext;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.Services.LocalServices.Interfaces;

public interface IClimbingQualityRatingsService
{
    public Task<IEnumerable<ClimbingQualityRatings>> GetAllClimbingQualityRatings();

    public Task<ClimbingQualityRatings?> GetClimbingQualityRatingById(byte id);

    public Task<IDictionary<byte, ClimbingQualityRatings>> GetClimbingQualityRatingByIds(IEnumerable<byte> ids);
}
