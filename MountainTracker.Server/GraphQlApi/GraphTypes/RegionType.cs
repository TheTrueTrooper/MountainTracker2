using GraphQL.DataLoader;
using GraphQL.Reflection;
using GraphQL.Types;
using MountainTracker.Server.Services;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.GraphQlApi.GraphTypes;

public class RegionType : ObjectGraphType<Regions>
{
    public RegionType(IDataLoaderContextAccessor accessor, IDistrictService districtService)
    {
        Name = "Region";
        Description = "Region Type";

        Field(d => d.Id, nullable: false).Description("Database Id");
        Field(d => d.RegionCode, nullable: false).Description("Code for Region or state");
        Field(d => d.EnglishFullName, nullable: false).Description("Region's english name");
        Field(d => d.ProvinceOrStateId, nullable: false).Description("Region's province or state id");
        Field(d => d.Info, nullable: true).Description("Region's english info");
        Field(d => d.ThumbPictureBytes, nullable: true).Description("Region's thumb picture in bytes");

        Field<ListGraphType<DistrictType>, IEnumerable<Districts>>("Districts")
            .ResolveAsync(context =>
            {
                var loader = accessor.Context!.GetOrAddCollectionBatchLoader<int, Districts>("GetDistrictsByRegions", districtService.GetDistrictsByRegions);
                return loader.LoadAsync(context.Source.Id);
            })
            .Description("Region's associated districts");
    }
}
