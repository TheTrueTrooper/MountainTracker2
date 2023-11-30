using GraphQL.DataLoader;
using GraphQL.Types;
using MountainTracker.Server.Services;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.GraphQlApi.GraphTypes;

public class ProvinceOrStateType : ObjectGraphType<ProvincesOrStates>
{
    public ProvinceOrStateType(IDataLoaderContextAccessor accessor, ICountryService countryService, IRegionService regionService)
    {
        Name = "ProvinceOrState";
        Description = "Province Or State Type";

        Field(d => d.Id, nullable: false).Description("Database Id");
        Field(d => d.RegionCode, nullable: false).Description("Code for province or state");
        Field(d => d.EnglishFullName, nullable: false).Description("Province's Or State's english name");
        Field(d => d.CountryId, nullable: false).Description("Province's or State's country id");

        Field<CountryType, Countries>("country")
            .ResolveAsync(async context =>
            {
                var loader = accessor.Context!.GetOrAddCollectionBatchLoader<byte, Countries>("GetRegionsByIds", countryService.GetCountriesByIds);
                return loader.LoadAsync(context.Source.CountryId).Then(x => x.First());
            })
            .Description("Province or state's associated country");

        Field<ListGraphType<RegionType>, IEnumerable<Regions>>("regions")
            .ResolveAsync(context =>
            {
                var loader = accessor.Context!.GetOrAddCollectionBatchLoader<short, Regions>("GetRegionsByProvincesOrStates", regionService.GetRegionsByProvincesOrStates);
                return loader.LoadAsync(context.Source.Id);
            })
            .Description("Province's associated regions");
    }
}
