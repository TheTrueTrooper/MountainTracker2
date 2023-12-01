using GraphQL.DataLoader;
using GraphQL.Types;
using MountainTracker.Server.Services.LocalServices.Interfaces;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.GraphQlApi.GraphTypes;

public class ProvinceOrStateType : ObjectGraphType<ProvincesOrStates>, IDisposable
{
    private List<IServiceScope> scopes = new List<IServiceScope>(2);

    public ProvinceOrStateType(IDataLoaderContextAccessor accessor, IServiceProvider serviceProvider)
    {
        Name = "ProvinceOrState";
        Description = "Province Or State Type";

        Field(d => d.Id, nullable: false).Description("Database Id");
        Field(d => d.RegionCode, nullable: false).Description("Code for province or state");
        Field(d => d.EnglishFullName, nullable: false).Description("Province's Or State's english name");
        Field(d => d.CountryId, nullable: false).Description("Province's or State's country id");

        var countryScope = CreateScope(serviceProvider);
        Field<CountryType, Countries>("country")
            .ResolveAsync(async context =>
            {
                var countryService = countryScope.ServiceProvider.GetService<ICountryService>()!;
                var loader = accessor.Context!.GetOrAddBatchLoader<byte, Countries>("GetRegionsByIds", countryService.GetCountriesByIds);
                return loader.LoadAsync(context.Source.CountryId);
            })
            .Description("Province or state's associated country");

        var geoFenceNodesScope = CreateScope(serviceProvider);
        Field<ListGraphType<RegionType>, IEnumerable<Regions>>("regions")
            .ResolveAsync(context =>
            {
                var regionService = geoFenceNodesScope.ServiceProvider.GetService<IRegionService>()!;
                var loader = accessor.Context!.GetOrAddCollectionBatchLoader<short, Regions>("GetRegionsByProvincesOrStates", regionService.GetRegionsByProvincesOrStates);
                return loader.LoadAsync(context.Source.Id);
            })
            .Description("Province's associated regions");
    }

    private IServiceScope CreateScope(IServiceProvider serviceProvider)
    {
        var scope = serviceProvider.CreateScope();
        scopes.Add(scope);
        return scope;
    }

    public void Dispose()
    {
        foreach (var scope in scopes)
        {
            scope.Dispose();
        }
    }
}
