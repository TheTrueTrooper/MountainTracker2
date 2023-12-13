﻿using GraphQL;
using GraphQL.Types;
using MountainTracker.Server.GraphQlApi.GraphTypes;
using MountainTracker.Server.Services.LocalServices.Interfaces;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.GraphQlApi.GraphQueries;

public class RockClimbingTypeQuery : ObjectGraphType
{
    public RockClimbingTypeQuery(IRockClimbingTypeService rockClimbingTypeService)
    {
        Name = "RockClimbingTypeQuery";
        Description = "Queries for rock climbing type query type";

        Field<ListGraphType<RockClimbingTypeType>, IEnumerable<RockClimbingTypes>>("allRockClimbingTypes")
            .ResolveAsync(async context => await rockClimbingTypeService.GetAllRockClimbingTypes())
            .Description("Gets a list of all of the climbing quality ratings");

        Field<RockClimbingTypeType, RockClimbingTypes>("rockClimbingTypeById")
            .Argument<byte>("id")
            .ResolveAsync(async context =>
            {
                byte id = context.GetArgument<byte>("id");
                return await rockClimbingTypeService.GetRockClimbingTypeById(id);
            })
            .Description("Gets a climbing quality rating by its db id");
    }
}
