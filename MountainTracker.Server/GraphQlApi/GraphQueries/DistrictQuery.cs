using GraphQL;
using GraphQL.Types;
using MountainTracker.Server.GraphQlApi.GraphTypes;
using MountainTracker.Server.Services.LocalServices.Interfaces;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.GraphQlApi.QlQuery;

public class DistrictQuery : ObjectGraphType
{
    public DistrictQuery(IDistrictService districtService)
    {
        Name = "DistrictQuery";
        Description = "Queries for region district dype";

        Field<ListGraphType<DistrictType>, IEnumerable<Districts>>("allDistricts")
            .ResolveAsync(async context => await districtService.GetAllDistricts())
            .Description("Gets a list of all of the countries");

        Field<DistrictType, Districts>("districById")
            .Argument<int>("id")
            .ResolveAsync(async context =>
            {
                int id = context.GetArgument<int>("id");
                return await districtService.GetDistrictById(id);
            })
            .Description("Gets a country by its db id");

        Field<DistrictType, Districts>("districtByCode")
            .Argument<StringGraphType>("districtCode")
            .ResolveAsync(async context =>
            {
                string districtCode = context.GetArgument<string>("districtCode");
                return await districtService.GetDistrictByCode(districtCode);
            })
            .Description("Gets a country by its iso country code");
    }
}
