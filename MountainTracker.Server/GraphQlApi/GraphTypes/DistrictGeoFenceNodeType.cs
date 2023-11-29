using GraphQL.DataLoader;
using GraphQL.Types;
using MountainTracker.Server.Services;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.GraphQlApi.GraphTypes;

public class DistrictGeoFenceNodeType : ObjectGraphType<DistrictGeoFenceNodes>
{
    public DistrictGeoFenceNodeType()
    {
        Name = "DistrictGeoFenceNode";
        Description = "District Geo Fence Node Type";

        Field(d => d.Id, nullable: false).Description("Database Id");
        Field(d => d.DistrictId, nullable: false).Description("Database Id of parent district");
        Field(d => d.Latitude, nullable: false).Description("Latitude of node in geo fence");
        Field(d => d.Longitude, nullable: false).Description("Longitude of node in geo fence");
    }
}
