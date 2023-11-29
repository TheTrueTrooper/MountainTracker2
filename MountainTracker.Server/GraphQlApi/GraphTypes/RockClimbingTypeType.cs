using GraphQL.Types;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.GraphQlApi.GraphTypes;

public class RockClimbingTypeType : ObjectGraphType<RockClimbingTypes>
{
    public RockClimbingTypeType()
    {
        Field(d => d.Id, nullable: false).Description("Database Id");
        Field(d => d.ShortHand, nullable: false).Description("Code for country");
        Field(d => d.EnglishFullName, nullable: false).Description("Country's english name");
    }
}
