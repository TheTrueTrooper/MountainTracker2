﻿using GraphQL.DataLoader;
using GraphQL.Reflection;
using GraphQL.Types;
using MountainTracker.Server.Services;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.GraphQlApi.GraphTypes;

public class ZoneType : ObjectGraphType<DistrictZones>
{
    public ZoneType(IDataLoaderContextAccessor accessor, IAreaService areaService)
    {
        Name = "Zone";
        Description = "Zone Type";

        Field(d => d.Id, nullable: false).Description("Database Id");
        Field(d => d.ZoneCode, nullable: false).Description("Code for Zone or state");
        Field(d => d.EnglishFullName, nullable: false).Description("Zone's english name");
        Field(d => d.DistrictId, nullable: false).Description("Zone's district id");
        Field(d => d.Info, nullable: true).Description("Zone's english info");
        Field(d => d.ThumbPictureBytes, nullable: true).Description("Zone's thumb picture in bytes");

        Field<ListGraphType<AreaType>, IEnumerable<ZoneAreas>>("areas")
            .ResolveAsync(context =>
            {
                var loader = accessor.Context!.GetOrAddCollectionBatchLoader<int, ZoneAreas>("GetAreasByZones", areaService.GetAreasByZones);
                return loader.LoadAsync(context.Source.Id);
            })
            .Description("Zone's associated areas");
    }
}