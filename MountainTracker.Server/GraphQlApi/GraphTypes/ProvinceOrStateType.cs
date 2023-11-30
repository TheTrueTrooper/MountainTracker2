using GraphQL.DataLoader;
using GraphQL.Types;
using MountainTracker.Server.Services.LocalServices.Interfaces;
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

#pragma warning disable CS1998 // The lib handels but does not suppress when method Then is called (but requires async)
        Field<CountryType, Countries>("country")
            .ResolveAsync(async context =>
            {
                var loader = accessor.Context!.GetOrAddCollectionBatchLoader<byte, Countries>("GetRegionsByIds", countryService.GetCountriesByIds);
                return loader.LoadAsync(context.Source.CountryId).Then(x => x.First());
            })
            .Description("Province or state's associated country");
#pragma warning restore CS1998 // Async method lacks 'await' operators and will run synchronously

        Field<ListGraphType<RegionType>, IEnumerable<Regions>>("regions")
            .ResolveAsync(context =>
            {
                var loader = accessor.Context!.GetOrAddCollectionBatchLoader<short, Regions>("GetRegionsByProvincesOrStates", regionService.GetRegionsByProvincesOrStates);
                return loader.LoadAsync(context.Source.Id);
            })
            .Description("Province's associated regions");
    }
}
