﻿using GraphQL.DataLoader;
using GraphQL.Types;
using MountainTracker.Server.Services;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.GraphQlApi.GraphTypes;

public class ZoneGeoFenceNodeType : ObjectGraphType<ZoneGeoFenceNodes>
{
    public ZoneGeoFenceNodeType(IDataLoaderContextAccessor accessor, IZoneService zoneService)
    {
        Name = "ZoneGeoFenceNode";
        Description = "Zone Geo Fence Node Type";

        Field(d => d.Id, nullable: false).Description("Database Id");
        Field(d => d.ZoneId, nullable: false).Description("Database Id of parent zone");
        Field(d => d.Latitude, nullable: false).Description("Latitude of node in geo fence");
        Field(d => d.Longitude, nullable: false).Description("Longitude of node in geo fence");

        Field<ZoneType, Zones>("zone")
            .ResolveAsync(async context =>
            {
                var loader = accessor.Context!.GetOrAddCollectionBatchLoader<int, Zones>("GetZonesByIds", zoneService.GetZonesByIds);
                return loader.LoadAsync(context.Source.ZoneId).Then(x => x.First());
            })
            .Description("ZoneGeoFenceNode's associated zone");
    }
}
