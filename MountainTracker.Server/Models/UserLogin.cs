﻿using System.ComponentModel.DataAnnotations;

namespace MountainTracker.Server.Models;

public class UserLogin
{
    [Required(ErrorMessage = "Email is required.")]
    public string? Email { get; set; }

    [Required(ErrorMessage = "Password is required")]
    public string? Password { get; set; }

    public bool? RememberMe { get; set; } = false;
}
