using GraphQL.DataLoader;
using GraphQL.Reflection;
using GraphQL.Types;
using MountainTracker.Server.Services.LocalServices.Interfaces;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.GraphQlApi.GraphTypes;

public class AreaGeoFenceNodeType : ObjectGraphType<AreaGeoFenceNodes>
{
    public AreaGeoFenceNodeType(IDataLoaderContextAccessor accessor, IAreaService areaService)
    {
        Name = "AreaGeoFenceNode";
        Description = "Area Geo Fence Node Type";

        Field(d => d.Id, nullable: false).Description("Database Id");
        Field(d => d.AreaId, nullable: false).Description("Database Id of parent area");
        Field(d => d.Latitude, nullable: false).Description("Latitude of node in geo fence");
        Field(d => d.Longitude, nullable: false).Description("Longitude of node in geo fence");

#pragma warning disable CS1998 // The lib handels but does not suppress when method Then is called (but requires async)
        Field<AreaType, Areas>("area")
            .ResolveAsync(async context =>
            {
                var loader = accessor.Context!.GetOrAddCollectionBatchLoader<int, Areas>("GetAreasByIds", areaService.GetAreasByIds);
                return loader.LoadAsync(context.Source.AreaId).Then(x => x.First());
            })
            .Description("Area geo fence node's associated area");
#pragma warning restore CS1998 // Async method lacks 'await' operators and will run synchronously
    }
}
