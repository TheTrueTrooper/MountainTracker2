using GraphQL;
using GraphQL.Types;
using MountainTracker.Server.GraphQlApi.GraphTypes;
using MountainTracker.Server.Services.LocalServices.Interfaces;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.GraphQlApi.QlQuery;

public class ZoneQuery : ObjectGraphType
{
    public ZoneQuery(IZoneService zoneService)
    {
        Name = "ZoneQuery";
        Description = "Queries for zone type";

        Field<ListGraphType<ZoneType>, IEnumerable<Zones>>("allZones")
            .ResolveAsync(async context => await zoneService.GetAllZones())
            .Description("Gets a list of all of the zones");

        Field<ZoneType, Zones>("ZoneById")
            .Argument<int>("id")
            .ResolveAsync(async context =>
            {
                int id = context.GetArgument<int>("id");
                return await zoneService.GetZoneById(id);
            })
            .Description("Gets a zone by its db id");

        Field<ZoneType, Zones>("zoneByCode")
            .Argument<StringGraphType>("zoneCode")
            .ResolveAsync(async context =>
            {
                string zoneCode = context.GetArgument<string>("zoneCode");
                return await zoneService.GetZoneByCode(zoneCode);
            })
            .Description("Gets a zone by its zone code");

        Field<ListGraphType<ZoneType>, IEnumerable<Zones>>("zonesByDistrict")
            .Argument<IntGraphType>("districtId")
            .ResolveAsync(async context =>
            {
                int districtsId = context.GetArgument<int>("districtId");
                return await zoneService.GetZonesByDistrict(districtsId);
            })
            .Description("Gets a zone by its district id");
    }
}
