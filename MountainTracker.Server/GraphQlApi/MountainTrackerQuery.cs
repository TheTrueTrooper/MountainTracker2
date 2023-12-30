using GraphQL.Types;
using MountainTracker.Server.GraphQlApi.GraphQueries;
using MountainTracker.Server.Services.LocalServices.Interfaces;

namespace MountainTracker.Server.GraphQlApi;

public class MountainTrackerQuery : ObjectGraphType
{
    private List<IServiceScope> scopes = new List<IServiceScope>(12);

    public MountainTrackerQuery(IServiceProvider serviceProvider)
    {
        Name = "Query";
        Description = "A place to collect all queries";

        this.AddRockClimbingDifficultyQuery(serviceProvider);
        this.AddRockClimbingTypeQuery(serviceProvider);
        this.AddClimbingQualityRatingQuery(serviceProvider);
        this.AddBusyRatingQuery(serviceProvider);
        this.AddCountryQuerys(serviceProvider);
        this.AddProvinceOrStateQuery(serviceProvider);
        this.AddRegionQuery(serviceProvider);
        this.AddDistrictQuery(serviceProvider);
        this.AddZoneQuery(serviceProvider);
        this.AddAreaQuery(serviceProvider);
        this.AddRockClimbingWallQuery(serviceProvider);
        this.AddRockClimbingRouteQuery(serviceProvider);
    }

    internal IServiceScope CreateScope(IServiceProvider serviceProvider)
    {
        var scope = serviceProvider.CreateScope();
        scopes.Add(scope);
        return scope;
    }

    public void Dispose()
    {
        foreach (var scope in scopes)
        {
            scope.Dispose();
        }
    }
}
