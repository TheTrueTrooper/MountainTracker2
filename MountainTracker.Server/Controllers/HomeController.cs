using Microsoft.AspNetCore.Mvc;
using MountainTracker.Server.Config.Client;
using MountainTracker.Server.Models;
using System.Diagnostics;
using System.Text.Json;

namespace MountainTracker.Server.Controllers;


public class HomeController : Controller
{
    private readonly ILogger<HomeController> Logger;
    private readonly IClientConfig ClientConfig;

    public HomeController(ILogger<HomeController> logger, IClientConfig clientConfig)
    {
        Logger = logger;
        ClientConfig = clientConfig;
    }

    public IActionResult Index()
    {
        ViewBag.ClientConfig = JsonSerializer.Serialize(ClientConfig).Replace('\n', ' ');
        return View();
    }

    [Route("Error")]
    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}