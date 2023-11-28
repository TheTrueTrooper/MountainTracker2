using GraphQL.DataLoader;
using GraphQL.Reflection;
using GraphQL.Types;
using MountainTracker.Server.Services;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.GraphQlApi.GraphTypes;

public class AreaType : ObjectGraphType<ZoneAreas>
{
    public AreaType(IDataLoaderContextAccessor accessor, IZoneService zoneService)
    {
        Name = "Area";
        Description = "Area Type";

        Field(d => d.Id, nullable: false).Description("Database Id");
        Field(d => d.AreaCode, nullable: false).Description("Code for Area or state");
        Field(d => d.EnglishFullName, nullable: false).Description("Area's english name");
        Field(d => d.DistrictZoneId, nullable: false).Description("Area's district id");
        Field(d => d.Info, nullable: true).Description("Area's english info");
        Field(d => d.ThumbPictureBytes, nullable: true).Description("Area's thumb picture in bytes");


        //Field<ListGraphType<ZoneType>, IEnumerable<DistrictZones>>("zones")
        //    .ResolveAsync(context =>
        //    {
        //        var loader = accessor.Context!.GetOrAddCollectionBatchLoader<int, DistrictZones>("GetZonesByRegions", zoneService.GetZonesByRegions);
        //        return loader.LoadAsync(context.Source.Id);
        //    })
        //    .Description("Country's associated provinces or states or offical regions");
    }
}
