using GraphQL.DataLoader;
using GraphQL.Reflection;
using GraphQL.Types;
using MountainTracker.Server.Services;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.GraphQlApi.GraphTypes;

public class DistrictType : ObjectGraphType<Districts>
{
    public DistrictType(IDataLoaderContextAccessor accessor, IZoneService zoneService)
    {
        Name = "District";
        Description = "District Type";

        Field(d => d.Id, nullable: false).Description("Database Id");
        Field(d => d.DistrictCode, nullable: false).Description("Code for District or state");
        Field(d => d.EnglishFullName, nullable: false).Description("District's english name");
        Field(d => d.RegionId, nullable: false).Description("District's province or state id");
        Field(d => d.Info, nullable: true).Description("District's english info");
        Field(d => d.ThumbPictureBytes, nullable: true).Description("District's thumb picture in bytes");


        Field<ListGraphType<ZoneType>, IEnumerable<DistrictZones>>("zones")
            .ResolveAsync(context =>
            {
                var loader = accessor.Context!.GetOrAddCollectionBatchLoader<int, DistrictZones>("GetZonesByRegions", zoneService.GetZonesByRegions);
                return loader.LoadAsync(context.Source.Id);
            })
            .Description("District's associated zones");
    }
}
