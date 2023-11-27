using GraphQL;
using GraphQL.DataLoader;
using GraphQL.Types;
using Microsoft.EntityFrameworkCore.Metadata;
using MountainTracker.Server.Services;
using MountainTracker.Shared.Model;
using static GraphQL.Validation.Rules.OverlappingFieldsCanBeMerged;
using System.Reflection.Metadata;
using System;

namespace MountainTracker.Server.GraphQlApi.GraphTypes;

public class CountryType : ObjectGraphType<Countries>
{
    public CountryType(IDataLoaderContextAccessor accessor, IProvinceOrStateService provinceOrStateService)
    {
        Name = "Country";
        Description = "Country Type";

        Field(d => d.Id, nullable: false).Description("Database Id");
        Field(d => d.CountryCode, nullable: false).Description("Code for country");
        Field(d => d.EnglishFullName, nullable: false).Description("Country's english name");

        Field<ListGraphType<ProvinceOrStateType>, IEnumerable<ProvincesOrStates>>("provincesOrStates")
            .ResolveAsync(context =>
            {
                var loader = accessor.Context.GetOrAddCollectionBatchLoader<int, ProvincesOrStates>("GetProvincesOrStatesByCountries", provinceOrStateService.GetProvincesOrStatesByCountries);
                return loader.LoadAsync(context.Source.Id);
            });
    }
}
