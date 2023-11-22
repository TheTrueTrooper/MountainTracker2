using GraphQL;
using MountainTracker.Server.Models.GraphQlApi;
using MountainTracker.Server.Services;
using MountainTracker.Server.Startup;

var builder = WebApplication.CreateBuilder(new WebApplicationOptions
{
    ApplicationName = typeof(Program).Assembly.FullName,
    ContentRootPath = Path.GetFullPath(Directory.GetCurrentDirectory()),
    WebRootPath = "wwwroot/browser",
    Args = args
});

// Add services to the container.
builder.Services.AddControllersWithViews();

builder.Services.AddMountainTrackerServices(builder.Configuration);
builder.Services.AddScoped<ICountryService, CountryService>();

builder.Services.AddGraphQL(b => b
    .AddSchema<MountainTrackerSchema>()
    .AddAutoClrMappings()  // schema
    .AddSystemTextJson()); 

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthentication();
app.UseAuthorization();
app.UseWebSockets();

//app.MapFallbackToController("Index", "Home");
app.MapControllers();

const string ApiGraphEndpoint = "/api/graphql";

app.UseGraphQL(ApiGraphEndpoint);
app.UseGraphQLPlayground("/graphql", new GraphQL.Server.Ui.Playground.PlaygroundOptions
{
    GraphQLEndPoint = ApiGraphEndpoint,
});

app.Run();
