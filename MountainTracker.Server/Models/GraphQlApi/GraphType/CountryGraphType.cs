using GraphQL.Types;
using MountainTracker.Server.Models.GraphQlApi.GraphType;

namespace MountainTracker.Shared.Model;

public class CountryGraphType : BaseObjectGraphType<Countries>
{
    public CountryGraphType(): base()
    {
        this.Field<IntGraphType>("id", nullable: false);
        this.Field<StringGraphType>("EnglishFullName", nullable: false);
        this.Field<StringGraphType>("CountryCode", nullable: false);
    }
}
