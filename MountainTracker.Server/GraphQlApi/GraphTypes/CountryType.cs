using GraphQL.DataLoader;
using GraphQL.Types;
using Microsoft.Extensions.DependencyInjection;
using MountainTracker.Server.Services.LocalServices.Interfaces;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.GraphQlApi.GraphTypes;

public class CountryType : ObjectGraphType<Countries>
{
    public CountryType(IDataLoaderContextAccessor accessor, IServiceProvider serviceProvider)
    {
        Name = "Country";
        Description = "Country Type";

        Field(d => d.Id, nullable: false).Description("Database Id");
        Field(d => d.CountryCode, nullable: false).Description("Code for country");
        Field(d => d.EnglishFullName, nullable: false).Description("Country's english name");

        var provincesOrStatesScope = serviceProvider.CreateScope();
        Field<ListGraphType<ProvinceOrStateType>, IEnumerable<ProvincesOrStates>>("provincesOrStates")
        .ResolveAsync(context =>
            {
                var provinceOrStateService = provincesOrStatesScope.ServiceProvider.GetService<IProvinceOrStateService>()!;
                var loader = accessor.Context!.GetOrAddCollectionBatchLoader<byte, ProvincesOrStates>("GetProvincesOrStatesByCountries", provinceOrStateService.GetProvincesOrStatesByCountries);
                return loader.LoadAsync(context.Source.Id);
            })
            .Description("Country's associated provinces or states or offical regions");
    }
}
