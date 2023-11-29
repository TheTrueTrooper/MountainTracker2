using GraphQL.DataLoader;
using GraphQL.Reflection;
using GraphQL.Types;
using MountainTracker.Server.Services;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.GraphQlApi.GraphTypes;

public class AreaType : ObjectGraphType<ZoneAreas>
{
    public AreaType(IDataLoaderContextAccessor accessor, IRockClimbingWallService rockClimbingWallService)
    {
        Name = "Area";
        Description = "Area Type";

        Field(d => d.Id, nullable: false).Description("Database Id");
        Field(d => d.AreaCode, nullable: false).Description("Code for area");
        Field(d => d.EnglishFullName, nullable: false).Description("Area's english name");
        Field(d => d.DistrictZoneId, nullable: false).Description("Area's district id");
        Field(d => d.Info, nullable: true).Description("Area's english info");
        Field(d => d.ThumbPictureBytes, nullable: true).Description("Area's thumb picture in bytes");

        Field(d => d.LatitudeStartOrCenter, nullable: true).Description("Area's latitude location by center or start");
        Field(d => d.LongitudeStartOrCenter, nullable: true).Description("Area's latitude location by center or start");

        Field<ListGraphType<RockClimbingWallType>, IEnumerable<RockClimbingWalls>>("rockWalls")
            .ResolveAsync(context =>
            {
                var loader = accessor.Context!.GetOrAddCollectionBatchLoader<int, RockClimbingWalls>("GetRockClimbingWallsByAreas", rockClimbingWallService.GetRockClimbingWallsByAreas);
                return loader.LoadAsync(context.Source.Id);
            })
            .Description("Area's associated rock climbing walls");
    }
}
