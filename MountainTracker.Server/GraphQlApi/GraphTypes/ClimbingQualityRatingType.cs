using GraphQL.DataLoader;
using GraphQL.Types;
using MountainTracker.Server.Services.LocalServices.Interfaces;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.GraphQlApi.GraphTypes;

public class ClimbingQualityRatingType : ObjectGraphType<ClimbingQualityRatings>, IDisposable
{
    private List<IServiceScope> scopes = new List<IServiceScope>(1);

    public ClimbingQualityRatingType(IDataLoaderContextAccessor accessor, IServiceProvider serviceProvider)
    {
        Name = "ClimbingQualityRatingType";
        Description = "Climbing Quality Rating Type";

        Field(d => d.Id, nullable: false).Description("Database Id");
        Field(d => d.EnglishName, nullable: false).Description("Ratings name in English");

        var rockClimbingWallScope = CreateScope(serviceProvider);
        Field<ListGraphType<RockClimbingWallType>, IEnumerable<RockClimbingWalls>>("rockClimbingWallsInApr")
            .ResolveAsync(async context =>
            {
                var rockClimbingWallService = rockClimbingWallScope.ServiceProvider.GetService<IRockClimbingWallService>()!;
                var loader = accessor.Context!.GetOrAddCollectionBatchLoader<int, RockClimbingWalls>("GetRockClimbingWallsByIds", rockClimbingWallService.GetRockClimbingWallsByIds);
                return loader.LoadAsync(context.Source.Id);
            })
            .Description("Rating's associated walls");

        Field<ListGraphType<RockClimbingWallType>, IEnumerable<RockClimbingWalls>>("rockClimbingWallsInAug")
            .ResolveAsync(async context =>
            {
                var rockClimbingWallService = rockClimbingWallScope.ServiceProvider.GetService<IRockClimbingWallService>()!;
                var loader = accessor.Context!.GetOrAddCollectionBatchLoader<int, RockClimbingWalls>("GetRockClimbingWallsByIds", rockClimbingWallService.GetRockClimbingWallsByIds);
                return loader.LoadAsync(context.Source.Id);
            })
            .Description("Rating's associated walls");

        Field<ListGraphType<RockClimbingWallType>, IEnumerable<RockClimbingWalls>>("rockClimbingWallsInDec")
            .ResolveAsync(async context =>
            {
                var rockClimbingWallService = rockClimbingWallScope.ServiceProvider.GetService<IRockClimbingWallService>()!;
                var loader = accessor.Context!.GetOrAddCollectionBatchLoader<int, RockClimbingWalls>("GetRockClimbingWallsByIds", rockClimbingWallService.GetRockClimbingWallsByIds);
                return loader.LoadAsync(context.Source.Id);
            })
            .Description("Rating's associated walls");

        Field<ListGraphType<RockClimbingWallType>, IEnumerable<RockClimbingWalls>>("rockClimbingWallsInFeb")
            .ResolveAsync(async context =>
            {
                var rockClimbingWallService = rockClimbingWallScope.ServiceProvider.GetService<IRockClimbingWallService>()!;
                var loader = accessor.Context!.GetOrAddCollectionBatchLoader<int, RockClimbingWalls>("GetRockClimbingWallsByIds", rockClimbingWallService.GetRockClimbingWallsByIds);
                return loader.LoadAsync(context.Source.Id);
            })
            .Description("Rating's associated walls");

        Field<ListGraphType<RockClimbingWallType>, IEnumerable<RockClimbingWalls>>("rockClimbingWallsInJan")
            .ResolveAsync(async context =>
            {
                var rockClimbingWallService = rockClimbingWallScope.ServiceProvider.GetService<IRockClimbingWallService>()!;
                var loader = accessor.Context!.GetOrAddCollectionBatchLoader<int, RockClimbingWalls>("GetRockClimbingWallsByIds", rockClimbingWallService.GetRockClimbingWallsByIds);
                return loader.LoadAsync(context.Source.Id);
            })
            .Description("Rating's associated walls");

        Field<ListGraphType<RockClimbingWallType>, IEnumerable<RockClimbingWalls>>("rockClimbingWallsInJul")
            .ResolveAsync(async context =>
            {
                var rockClimbingWallService = rockClimbingWallScope.ServiceProvider.GetService<IRockClimbingWallService>()!;
                var loader = accessor.Context!.GetOrAddCollectionBatchLoader<int, RockClimbingWalls>("GetRockClimbingWallsByIds", rockClimbingWallService.GetRockClimbingWallsByIds);
                return loader.LoadAsync(context.Source.Id);
            })
            .Description("Rating's associated walls");

        Field<ListGraphType<RockClimbingWallType>, IEnumerable<RockClimbingWalls>>("rockClimbingWallsInJun")
            .ResolveAsync(async context =>
            {
                var rockClimbingWallService = rockClimbingWallScope.ServiceProvider.GetService<IRockClimbingWallService>()!;
                var loader = accessor.Context!.GetOrAddCollectionBatchLoader<int, RockClimbingWalls>("GetRockClimbingWallsByIds", rockClimbingWallService.GetRockClimbingWallsByIds);
                return loader.LoadAsync(context.Source.Id);
            })
            .Description("Rating's associated walls");

        Field<ListGraphType<RockClimbingWallType>, IEnumerable<RockClimbingWalls>>("rockClimbingWallsInMar")
            .ResolveAsync(async context =>
            {
                var rockClimbingWallService = rockClimbingWallScope.ServiceProvider.GetService<IRockClimbingWallService>()!;
                var loader = accessor.Context!.GetOrAddCollectionBatchLoader<int, RockClimbingWalls>("GetRockClimbingWallsByIds", rockClimbingWallService.GetRockClimbingWallsByIds);
                return loader.LoadAsync(context.Source.Id);
            })
            .Description("Rating's associated walls");

        Field<ListGraphType<RockClimbingWallType>, IEnumerable<RockClimbingWalls>>("rockClimbingWallsInMay")
            .ResolveAsync(async context =>
            {
                var rockClimbingWallService = rockClimbingWallScope.ServiceProvider.GetService<IRockClimbingWallService>()!;
                var loader = accessor.Context!.GetOrAddCollectionBatchLoader<int, RockClimbingWalls>("GetRockClimbingWallsByIds", rockClimbingWallService.GetRockClimbingWallsByIds);
                return loader.LoadAsync(context.Source.Id);
            })
            .Description("Rating's associated walls");

        Field<ListGraphType<RockClimbingWallType>, IEnumerable<RockClimbingWalls>>("rockClimbingWallsInNov")
            .ResolveAsync(async context =>
            {
                var rockClimbingWallService = rockClimbingWallScope.ServiceProvider.GetService<IRockClimbingWallService>()!;
                var loader = accessor.Context!.GetOrAddCollectionBatchLoader<int, RockClimbingWalls>("GetRockClimbingWallsByIds", rockClimbingWallService.GetRockClimbingWallsByIds);
                return loader.LoadAsync(context.Source.Id);
            })
            .Description("Rating's associated walls");

        Field<ListGraphType<RockClimbingWallType>, IEnumerable<RockClimbingWalls>>("rockClimbingWallsInOct")
            .ResolveAsync(async context =>
            {
                var rockClimbingWallService = rockClimbingWallScope.ServiceProvider.GetService<IRockClimbingWallService>()!;
                var loader = accessor.Context!.GetOrAddCollectionBatchLoader<int, RockClimbingWalls>("GetRockClimbingWallsByIds", rockClimbingWallService.GetRockClimbingWallsByIds);
                return loader.LoadAsync(context.Source.Id);
            })
            .Description("Rating's associated walls");

        Field<ListGraphType<RockClimbingWallType>, IEnumerable<RockClimbingWalls>>("rockClimbingWallsInSep")
            .ResolveAsync(async context =>
            {
                var rockClimbingWallService = rockClimbingWallScope.ServiceProvider.GetService<IRockClimbingWallService>()!;
                var loader = accessor.Context!.GetOrAddCollectionBatchLoader<int, RockClimbingWalls>("GetRockClimbingWallsByIds", rockClimbingWallService.GetRockClimbingWallsByIds);
                return loader.LoadAsync(context.Source.Id);
            })
            .Description("Rating's associated walls");
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
