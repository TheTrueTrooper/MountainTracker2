using GraphQL.DataLoader;
using GraphQL.Types;
using MountainTracker.Server.Services;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.GraphQlApi.GraphTypes;

public class RegionGeoFenceNodeType : ObjectGraphType<RegionGeoFenceNodes>
{
    public RegionGeoFenceNodeType()
    {
        Name = "RegionGeoFenceNode";
        Description = "Region Geo Fence Node Type";

        Field(d => d.Id, nullable: false).Description("Database Id");
        Field(d => d.RegionId, nullable: false).Description("Database Id of parent region");
        Field(d => d.Latitude, nullable: false).Description("Latitude of node in geo fence");
        Field(d => d.Longitude, nullable: false).Description("Longitude of node in geo fence");
    }
}
