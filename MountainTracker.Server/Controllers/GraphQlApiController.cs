using GraphQL.Transport;
using GraphQL.Types;
using GraphQL;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using MountainTracker.Server.Config;
using MountainTracker.Server.Contexts.GraphApiContext;
using GraphQL.Instrumentation;
using MountainTracker.Server.Misc;

namespace MountainTracker.Server.Controllers;

[ApiController]
public class GraphQlApiController : Controller
{
    private readonly IDocumentExecuter _documentExecuter;
    private readonly ISchema _schema;
    private readonly IOptions<GraphQlConfig> _graphQLOptions;

    public GraphQlApiController(IDocumentExecuter documentExecuter, ISchema schema, IOptions<GraphQlConfig> options)
    {
        _documentExecuter = documentExecuter;
        _schema = schema;
        _graphQLOptions = options;
    }

    [HttpPost("graphql")]
    public async Task<IActionResult> GraphQLAsync([FromBody] GraphQLRequest request)
    {
        var startTime = DateTime.UtcNow;

        var result = await _documentExecuter.ExecuteAsync(s =>
        {
            s.Schema = _schema;
            s.Query = request.Query;
            s.Variables = request.Variables;
            s.OperationName = request.OperationName;
            s.RequestServices = HttpContext.RequestServices;
            s.UserContext = new GraphQlUserContext
            {
                User = HttpContext.User,
            };
            s.CancellationToken = HttpContext.RequestAborted;
        });

        if (_graphQLOptions.Value.EnableMetrics)
        {
            result.EnrichWithApolloTracing(startTime);
        }

        return new ExecutionResultActionResult(result);
    }
}
