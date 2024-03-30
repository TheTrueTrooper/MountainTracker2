using GraphQL;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.WebUtilities;
using MountainTracker.Server.Models;
using System.Text.Encodings.Web;
using System.Text;

namespace MountainTracker.Server.Controllers;

public class AccountsController : Controller
{
    private readonly UserManager<IdentityUser> UserManager;
    private readonly SignInManager<IdentityUser> SignInManager;
    private readonly ILogger<AccountsController> Logger;
    public AccountsController(UserManager<IdentityUser> userManager, SignInManager<IdentityUser> signInManager, ILogger<AccountsController> logger)
    {
        UserManager = userManager;
        SignInManager = signInManager;
        Logger = logger;
    }

    [Route("/Accounts/Registration")]
    [HttpPost]
    public async Task<IActionResult> Registration([FromBody]UserForRegistration userForRegistration, [FromQuery]string returnUrl = null)
    {
        returnUrl = returnUrl ?? Url.Content("~/");
        var ExternalLogins = (await SignInManager.GetExternalAuthenticationSchemesAsync()).ToList();

        if (ModelState.IsValid)
        {
            var user = new IdentityUser { UserName = userForRegistration.Email, Email = userForRegistration.Email };
            var result = await UserManager.CreateAsync(user, userForRegistration.Password!);
            if (result.Succeeded)
            {
                Logger.LogInformation("User created a new account with password.");

                var code = await UserManager.GenerateEmailConfirmationTokenAsync(user);
                code = WebEncoders.Base64UrlEncode(Encoding.UTF8.GetBytes(code));
                var callbackUrl = Url.Page(
                    "/Account/ConfirmEmail",
                pageHandler: null,
                values: new { userId = user.Id, code = code },
                protocol: Request.Scheme);

                //await _emailSender.SendEmailAsync(Input.Email, "Confirm your email",
                //    $"Please confirm your account by <a href='{HtmlEncoder.Default.Encode(callbackUrl)}'>clicking here</a>.");

                if (UserManager.Options.SignIn.RequireConfirmedAccount)
                {
                    return RedirectToPage("RegisterConfirmation",
                                          new { email = userForRegistration.Email });
                }
                else
                {
                    await SignInManager.SignInAsync(user, isPersistent: false);
                    return LocalRedirect(returnUrl);
                }
            }
            foreach (var error in result.Errors)
            {
                ModelState.AddModelError(string.Empty, error.Description);
            }
        }

        // If we got this far, something failed, redisplay form
        return LocalRedirect(returnUrl);
    }

    [Route("/Accounts/Login")]
    [HttpPost]
    public async Task<IActionResult> Login([FromBody] UserLogin userLogin, [FromQuery] string returnUrl = null)
    {
        returnUrl = returnUrl ?? Url.Content("~/");
        var ExternalLogins = (await SignInManager.GetExternalAuthenticationSchemesAsync()).ToList();

        if (ModelState.IsValid)
        {
            var result = -880userLoginuserLoginuserLoginuserLog
            if (result.Succeeded)
            {
                Logger.LogInformation("User created a new account with password.");

                var code = await UserManager.GenerateEmailConfirmationTokenAsync(user);
                code = WebEncoders.Base64UrlEncode(Encoding.UTF8.GetBytes(code));
                var callbackUrl = Url.Page(
                    "/Dashboard",
                pageHandler: null,
                values: new { userId = user.Id, code = code },
                protocol: Request.Scheme);

                //await _emailSender.SendEmailAsync(Input.Email, "Confirm your email",
                //    $"Please confirm your account by <a href='{HtmlEncoder.Default.Encode(callbackUrl)}'>clicking here</a>.");

                if (UserManager.Options.SignIn.RequireConfirmedAccount)
                {
                    return RedirectToPage("RegisterConfirmation",
                                          new { email = userForRegistration.Email });
                }
                else
                {
                    await SignInManager.SignInAsync(user, isPersistent: false);
                    return LocalRedirect(returnUrl);
                }
            }
            foreach (var error in result.Errors)
            {
                ModelState.AddModelError(string.Empty, error.Description);
            }
        }

        // If we got this far, something failed, redisplay form
        return LocalRedirect(returnUrl);
    }
}
