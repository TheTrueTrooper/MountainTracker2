using GraphQL;
using GraphQL.Types;
using MountainTracker.Server.GraphQlApi.GraphTypes;
using MountainTracker.Server.Services.LocalServices.Interfaces;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.GraphQlApi.GraphQueries;

public static class DistrictQuery
{
    public static void AddDistrictQuery(this ObjectGraphType This, IDistrictService districtService)
    {
        This.Field<ListGraphType<DistrictType>, IEnumerable<Districts>>("allDistricts")
            .ResolveAsync(async context => await districtService.GetAllDistricts())
            .Description("Gets a list of all of the districts");

        This.Field<DistrictType, Districts>("districtById")
            .Argument<int>("id")
            .ResolveAsync(async context =>
            {
                int id = context.GetArgument<int>("id");
                return await districtService.GetDistrictById(id);
            })
            .Description("Gets a district by its db id");

        This.Field<DistrictType, Districts>("districtByCode")
            .Argument<StringGraphType>("districtCode")
            .ResolveAsync(async context =>
            {
                string districtCode = context.GetArgument<string>("districtCode");
                return await districtService.GetDistrictByCode(districtCode);
            })
            .Description("Gets a district by its district code");

        This.Field<ListGraphType<DistrictType>, IEnumerable<Districts>>("districtsByRegion")
            .Argument<IntGraphType>("regionId")
            .ResolveAsync(async context =>
            {
                int regionId = context.GetArgument<int>("regionId");
                return await districtService.GetDistrictsByRegion(regionId);
            })
            .Description("Gets a districts by its region id");
    }
}
