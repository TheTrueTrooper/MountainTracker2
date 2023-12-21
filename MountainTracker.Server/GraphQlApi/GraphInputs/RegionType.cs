using GraphQL.Types;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.GraphQlApi.GraphInputs;

public class RegionInput : InputObjectGraphType<Regions>
{
    public RegionInput()
    {
        Name = "RegionInput";
        Description = "Region Input Type";

        Field(d => d.Id, nullable: true).Description("Database Id");
        Field(d => d.RegionCode, nullable: false).Description("Code for region");
        Field(d => d.EnglishFullName, nullable: false).Description("Region's english name");
        Field(d => d.ProvinceOrStateId, nullable: false).Description("Region's province or state id");
        Field(d => d.Info, nullable: true).Description("Region's english info");
        Field(d => d.ThumbPictureBytes, nullable: true).Description("Region's thumb picture in bytes");

        Field(d => d.LatitudeStartOrCenter, nullable: true).Description("Region's thumb picture in bytes");
        Field(d => d.LongitudeStartOrCenter, nullable: true).Description("Region's thumb picture in bytes");
    }
}
