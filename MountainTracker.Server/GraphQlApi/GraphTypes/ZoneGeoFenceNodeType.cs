using GraphQL.DataLoader;
using GraphQL.Types;
using Microsoft.Extensions.DependencyInjection;
using MountainTracker.Server.Services.LocalServices.Interfaces;
using MountainTracker.Shared.Model;
using System;

namespace MountainTracker.Server.GraphQlApi.GraphTypes;

public class ZoneGeoFenceNodeType : ObjectGraphType<ZoneGeoFenceNodes>
{
    public ZoneGeoFenceNodeType(IDataLoaderContextAccessor accessor, IServiceProvider serviceProvider)
    {
        Name = "ZoneGeoFenceNode";
        Description = "Zone Geo Fence Node Type";

        Field(d => d.Id, nullable: false).Description("Database Id");
        Field(d => d.ZoneId, nullable: false).Description("Database Id of parent zone");
        Field(d => d.Latitude, nullable: false).Description("Latitude of node in geo fence");
        Field(d => d.Longitude, nullable: false).Description("Longitude of node in geo fence");

        var zoneScope = serviceProvider.CreateScope();
        Field<ZoneType, Zones>("zone")
            .ResolveAsync(async context =>
            {
                var zoneService = zoneScope.ServiceProvider.GetService<IZoneService>()!;
                var loader = accessor.Context!.GetOrAddBatchLoader<int, Zones>("GetZonesByIds", zoneService.GetZonesByIds);
                return loader.LoadAsync(context.Source.ZoneId);
            })
            .Description("Zone geo fence node's associated zone");
    }
}
