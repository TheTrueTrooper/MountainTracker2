using GraphQL.Types;
using MountainTracker.Shared.Model;

namespace MountainTracker.Server.GraphQlApi.GraphTypes;

public class CountryType : ObjectGraphType<Countries>
{
    public CountryType()
    {
        Name = "Country";
        Description = "Country Type";

        Field(d => d.Id, nullable: false).Description("Database Id");
        Field(d => d.CountryCode, nullable: false).Description("Code for country");
        Field(d => d.EnglishFullName, nullable: false).Description("Country's first name.");
    }
}
