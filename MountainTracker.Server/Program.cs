using Microsoft.AspNetCore.Server.Kestrel.Core;
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

builder.Services.AddGraphQl(builder.Configuration);

builder.Services.AddLogging(builder => builder.AddConsole());
builder.Services.AddHttpContextAccessor();

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

app.AddGraphQl(app.Configuration);

app.Run();
