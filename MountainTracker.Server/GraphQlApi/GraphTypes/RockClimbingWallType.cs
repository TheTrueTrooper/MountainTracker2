using GraphQL.DataLoader;
using GraphQL.Types;
using MountainTracker.Server.Services.LocalServices.Interfaces;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.GraphQlApi.GraphTypes;

public class RockClimbingWallType : ObjectGraphType<RockClimbingWalls>, IDisposable
{
    private List<IServiceScope> scopes = new List<IServiceScope>(3);

    public RockClimbingWallType(IDataLoaderContextAccessor accessor, IServiceProvider serviceProvider)
    {
        Name = "RockClimbingWall";
        Description = "Rock Climbing Wall Type";

        Field(d => d.Id, nullable: false).Description("Database Id");
        Field(d => d.WallCode, nullable: false).Description("Code for wall");
        Field(d => d.EnglishFullName, nullable: false).Description("Wall's english name");
        Field(d => d.AreaId, nullable: false).Description("Wall's area id");
        Field(d => d.Approach, nullable: false).Description("Wall's approach info");
        Field(d => d.Info, nullable: true).Description("Wall's english info");
        Field(d => d.ThumbPictureBytes, nullable: true).Description("Wall's thumb picture in bytes");

        Field(d => d.LatitudeStartOrCenter, nullable: true).Description("Wall's latitude location by center or start");
        Field(d => d.LongitudeStartOrCenter, nullable: true).Description("Wall's latitude location by center or start");
        Field(d => d.LatitudeParking, nullable: true).Description("Wall's parking latitude location");
        Field(d => d.LongitudeParking, nullable: true).Description("Wall's parking longitude location");

        Field(d => d.JanSeasonalClimbingQualityRatingId, nullable: false).Description("Wall's seasonal climbing quality rating in January");
        Field(d => d.FebSeasonalClimbingQualityRatingId, nullable: false).Description("Wall's seasonal climbing quality rating in Febuary");
        Field(d => d.MarSeasonalClimbingQualityRatingId, nullable: false).Description("Wall's seasonal climbing quality rating in March");
        Field(d => d.AprSeasonalClimbingQualityRatingId, nullable: false).Description("Wall's seasonal climbing quality rating in April");
        Field(d => d.MaySeasonalClimbingQualityRatingId, nullable: false).Description("Wall's seasonal climbing quality rating in May");
        Field(d => d.JunSeasonalClimbingQualityRatingId, nullable: false).Description("Wall's seasonal climbing quality rating in June");
        Field(d => d.JulSeasonalClimbingQualityRatingId, nullable: false).Description("Wall's seasonal climbing quality rating in July");
        Field(d => d.AugSeasonalClimbingQualityRatingId, nullable: false).Description("Wall's seasonal climbing quality rating in August");
        Field(d => d.SepSeasonalClimbingQualityRatingId, nullable: false).Description("Wall's seasonal climbing quality rating in September");
        Field(d => d.OctSeasonalClimbingQualityRatingId, nullable: false).Description("Wall's seasonal climbing quality rating in October");
        Field(d => d.NovSeasonalClimbingQualityRatingId, nullable: false).Description("Wall's seasonal climbing quality rating in November");
        Field(d => d.DecSeasonalClimbingQualityRatingId, nullable: false).Description("Wall's seasonal climbing quality rating in December");

        Field(d => d.JanSeasonalBusyRatingId, nullable: false).Description("Wall's busy climbing rating in January");
        Field(d => d.FebSeasonalBusyRatingId, nullable: false).Description("Wall's busy climbing rating in Febuary");
        Field(d => d.MarSeasonalBusyRatingId, nullable: false).Description("Wall's busy climbing rating in March");
        Field(d => d.AprSeasonalBusyRatingId, nullable: false).Description("Wall's busy climbing rating in April");
        Field(d => d.MaySeasonalBusyRatingId, nullable: false).Description("Wall's busy climbing rating in May");
        Field(d => d.JunSeasonalBusyRatingId, nullable: false).Description("Wall's busy climbing rating in June");
        Field(d => d.JulSeasonalBusyRatingId, nullable: false).Description("Wall's busy climbing rating in July");
        Field(d => d.AugSeasonalBusyRatingId, nullable: false).Description("Wall's busy climbing rating in August");
        Field(d => d.SepSeasonalBusyRatingId, nullable: false).Description("Wall's busy climbing rating in September");
        Field(d => d.OctSeasonalBusyRatingId, nullable: false).Description("Wall's busy climbing rating in October");
        Field(d => d.NovSeasonalBusyRatingId, nullable: false).Description("Wall's busy climbing rating in November");
        Field(d => d.DecSeasonalBusyRatingId, nullable: false).Description("Wall's busy climbing rating in December");

        var busyRatingsScope = CreateScope(serviceProvider);
        Field<BusyRatingType, BusyRatings>("janSeasonalBusyRating")
            .ResolveAsync(async context =>
            {
                var busyRatingsService = busyRatingsScope.ServiceProvider.GetService<IBusyRatingsService>()!;
                var loader = accessor.Context!.GetOrAddBatchLoader<byte, BusyRatings>("GetBusyRatingByIds", busyRatingsService.GetBusyRatingByIds);
                return loader.LoadAsync(context.Source.JanSeasonalBusyRatingId);
            })
            .Description("Wall's busy climbing rating in January");
        Field<BusyRatingType, BusyRatings>("febSeasonalBusyRating")
            .ResolveAsync(async context =>
            {
                var busyRatingsService = busyRatingsScope.ServiceProvider.GetService<IBusyRatingsService>()!;
                var loader = accessor.Context!.GetOrAddBatchLoader<byte, BusyRatings>("GetBusyRatingByIds", busyRatingsService.GetBusyRatingByIds);
                return loader.LoadAsync(context.Source.FebSeasonalBusyRatingId);
            })
            .Description("Wall's busy climbing rating in Febuary");
        Field<BusyRatingType, BusyRatings>("marSeasonalBusyRating")
            .ResolveAsync(async context =>
            {
                var busyRatingsService = busyRatingsScope.ServiceProvider.GetService<IBusyRatingsService>()!;
                var loader = accessor.Context!.GetOrAddBatchLoader<byte, BusyRatings>("GetBusyRatingByIds", busyRatingsService.GetBusyRatingByIds);
                return loader.LoadAsync(context.Source.MarSeasonalBusyRatingId);
            })
            .Description("Wall's busy climbing rating in March");
        Field<BusyRatingType, BusyRatings>("aprSeasonalBusyRating")
            .ResolveAsync(async context =>
            {
                var busyRatingsService = busyRatingsScope.ServiceProvider.GetService<IBusyRatingsService>()!;
                var loader = accessor.Context!.GetOrAddBatchLoader<byte, BusyRatings>("GetBusyRatingByIds", busyRatingsService.GetBusyRatingByIds);
                return loader.LoadAsync(context.Source.AprSeasonalBusyRatingId);
            })
            .Description("Wall's busy climbing rating in April");
        Field<BusyRatingType, BusyRatings>("maySeasonalBusyRating")
            .ResolveAsync(async context =>
            {
                var busyRatingsService = busyRatingsScope.ServiceProvider.GetService<IBusyRatingsService>()!;
                var loader = accessor.Context!.GetOrAddBatchLoader<byte, BusyRatings>("GetBusyRatingByIds", busyRatingsService.GetBusyRatingByIds);
                return loader.LoadAsync(context.Source.MaySeasonalBusyRatingId);
            })
            .Description("Wall's busy climbing rating in May");
        Field<BusyRatingType, BusyRatings>("junSeasonalBusyRating")
            .ResolveAsync(async context =>
            {
                var busyRatingsService = busyRatingsScope.ServiceProvider.GetService<IBusyRatingsService>()!;
                var loader = accessor.Context!.GetOrAddBatchLoader<byte, BusyRatings>("GetBusyRatingByIds", busyRatingsService.GetBusyRatingByIds);
                return loader.LoadAsync(context.Source.JunSeasonalBusyRatingId);
            })
            .Description("Wall's busy climbing rating in June");
        Field<BusyRatingType, BusyRatings>("julSeasonalBusyRating")
            .ResolveAsync(async context =>
            {
                var busyRatingsService = busyRatingsScope.ServiceProvider.GetService<IBusyRatingsService>()!;
                var loader = accessor.Context!.GetOrAddBatchLoader<byte, BusyRatings>("GetBusyRatingByIds", busyRatingsService.GetBusyRatingByIds);
                return loader.LoadAsync(context.Source.JulSeasonalBusyRatingId);
            })
            .Description("Wall's busy climbing rating in July");
        Field<BusyRatingType, BusyRatings>("augSeasonalBusyRating")
            .ResolveAsync(async context =>
            {
                var busyRatingsService = busyRatingsScope.ServiceProvider.GetService<IBusyRatingsService>()!;
                var loader = accessor.Context!.GetOrAddBatchLoader<byte, BusyRatings>("GetBusyRatingByIds", busyRatingsService.GetBusyRatingByIds);
                return loader.LoadAsync(context.Source.AugSeasonalBusyRatingId);
            })
            .Description("Wall's busy climbing rating in August");
        Field<BusyRatingType, BusyRatings>("sepSeasonalBusyRating")
            .ResolveAsync(async context =>
            {
                var busyRatingsService = busyRatingsScope.ServiceProvider.GetService<IBusyRatingsService>()!;
                var loader = accessor.Context!.GetOrAddBatchLoader<byte, BusyRatings>("GetBusyRatingByIds", busyRatingsService.GetBusyRatingByIds);
                return loader.LoadAsync(context.Source.SepSeasonalBusyRatingId);
            })
            .Description("Wall's busy climbing rating in September");
        Field<BusyRatingType, BusyRatings>("octSeasonalBusyRating")
            .ResolveAsync(async context =>
            {
                var busyRatingsService = busyRatingsScope.ServiceProvider.GetService<IBusyRatingsService>()!;
                var loader = accessor.Context!.GetOrAddBatchLoader<byte, BusyRatings>("GetBusyRatingByIds", busyRatingsService.GetBusyRatingByIds);
                return loader.LoadAsync(context.Source.OctSeasonalBusyRatingId);
            })
            .Description("Wall's busy climbing rating in October");
        Field<BusyRatingType, BusyRatings>("novSeasonalBusyRating")
            .ResolveAsync(async context =>
            {
                var busyRatingsService = busyRatingsScope.ServiceProvider.GetService<IBusyRatingsService>()!;
                var loader = accessor.Context!.GetOrAddBatchLoader<byte, BusyRatings>("GetBusyRatingByIds", busyRatingsService.GetBusyRatingByIds);
                return loader.LoadAsync(context.Source.NovSeasonalBusyRatingId);
            })
            .Description("Wall's busy climbing rating in November");
        Field<BusyRatingType, BusyRatings>("decSeasonalBusyRating")
            .ResolveAsync(async context =>
            {
                var busyRatingsService = busyRatingsScope.ServiceProvider.GetService<IBusyRatingsService>()!;
                var loader = accessor.Context!.GetOrAddBatchLoader<byte, BusyRatings>("GetBusyRatingByIds", busyRatingsService.GetBusyRatingByIds);
                return loader.LoadAsync(context.Source.DecSeasonalBusyRatingId);
            })
            .Description("Wall's busy climbing rating in December");

        var areaScope = CreateScope(serviceProvider);
        Field<AreaType, Areas>("area")
            .ResolveAsync(async context =>
            {
                var areaService = areaScope.ServiceProvider.GetService<IAreaService>()!;
                var loader = accessor.Context!.GetOrAddBatchLoader<int, Areas>("GetAreasByIds", areaService.GetAreasByIds);
                return loader.LoadAsync(context.Source.AreaId);
            })
            .Description("Wall's associated area");

        var routesScope = CreateScope(serviceProvider);
        Field<ListGraphType<RockClimbingRouteType>, IEnumerable<RockClimbingRoutes>>("routes")
            .ResolveAsync(context =>
            {
                var rockClimbingRouteService = routesScope.ServiceProvider.GetService<IRockClimbingRouteService>()!;
                var loader = accessor.Context!.GetOrAddCollectionBatchLoader<int, RockClimbingRoutes>("GetRockClimbingRoutesByRockClimbingWalls", rockClimbingRouteService.GetRockClimbingRoutesByRockClimbingWalls);
                return loader.LoadAsync(context.Source.Id);
            })
            .Description("Wall's associated routes");

        var geoFenceNodesScope = CreateScope(serviceProvider);
        Field<ListGraphType<RockClimbingWallGeoFenceNodeType>, IEnumerable<RockClimbingWallGeoFenceNodes>>("geoFenceNodes")
            .ResolveAsync(context =>
            {
                var rockClimbingWallGeoFenceNodeService = geoFenceNodesScope.ServiceProvider.GetService<IRockClimbingWallGeoFenceNodeService>()!;
                var loader = accessor.Context!.GetOrAddCollectionBatchLoader<int, RockClimbingWallGeoFenceNodes>("GetRockClimbingWallGeoFenceNodesByRockClimbingWalls", rockClimbingWallGeoFenceNodeService.GetRockClimbingWallGeoFenceNodesByRockClimbingWalls);
                return loader.LoadAsync(context.Source.Id);
            })
            .Description("Wall's associated geo fence nodes");
    }

    private IServiceScope CreateScope(IServiceProvider serviceProvider)
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
