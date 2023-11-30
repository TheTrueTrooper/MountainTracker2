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
        Description = "Queries for region zone type";

        Field<ListGraphType<ZoneType>, IEnumerable<Zones>>("allZones")
            .ResolveAsync(async context => await zoneService.GetAllZones())
            .Description("Gets a list of all of the countries");
        Field<ZoneType, Zones>("ZoneById")
            .Argument<int>("id")
            .ResolveAsync(async context =>
            {
                int id = context.GetArgument<int>("id");
                return await zoneService.GetZoneById(id);
            })
            .Description("Gets a country by its db id");
        //to do sort the code system out
        //Field<ZoneType>("countryByCode")
        //    .Argument<StringGraphType>("countryCode")
        //    .ResolveAsync(async context =>
        //    {
        //        string countryCode = context.GetArgument<string>("countryCode");
        //        return await countryService.GetCountryByCode(countryCode);
        //    })
        //    .Description("Gets a country by its iso country code");
    }
}
