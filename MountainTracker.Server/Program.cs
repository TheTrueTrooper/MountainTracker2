using MountainTracker.Server.StartupExtensions;

var builder = WebApplication.CreateBuilder(new WebApplicationOptions
{
    ApplicationName = typeof(Program).Assembly.FullName,
    ContentRootPath = Path.GetFullPath(Directory.GetCurrentDirectory()),
    WebRootPath = "wwwroot/browser",
    Args = args
});

// Add services to the container.
builder.Services.AddControllersWithViews();

builder.Services.AddCorsConfig(builder.Configuration);

builder.Services.AddMountainTrackerServices(builder.Configuration);

builder.Services.AddAuthenticationAndAuthorization(builder.Configuration);

builder.Services.AddGraphQl(builder.Configuration);

builder.Services.AddClientConfig(builder.Configuration);

builder.Services.AddLogging(builder => builder.AddConsole());

var app = builder.Build();

app.UseCorsConfig(app.Configuration);

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

app.MapFallbackToController("Index", "Home");
app.MapControllers();

app.AddGraphQl(app.Configuration);

app.Run();
