﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Security.Claims;
using System.Security.Policy;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Antiforgery;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using SoundVast.Components.Account.ViewModels;
using SoundVast.Components.FileStream;
using SoundVast.Components.User;
using SoundVast.CustomHelpers;
using SoundVast.Services;
using SoundVast.Validation;

namespace SoundVast.Components.Account
{
    [Authorize]
    public class AccountController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly ILogger _logger;
        private readonly IValidationProvider _validationProvider;
        private const string ModelError = "_error";

        public AccountController(
            UserManager<ApplicationUser> userManager,
            SignInManager<ApplicationUser> signInManager,
            ILoggerFactory loggerFactory, 
            IValidationProvider validationProvider)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _validationProvider = validationProvider;
            _logger = loggerFactory.CreateLogger<AccountController>();
        }

        [HttpPost]
        [AllowAnonymous]
        public IActionResult ExternalLogin(string provider, string returnUrl)
        {
            // Request a redirect to the external login provider.
            var redirectUrl = Url.Action(nameof(ExternalLoginCallback), new { returnUrl });
            var properties = _signInManager.ConfigureExternalAuthenticationProperties(provider, redirectUrl);
      
            return Challenge(properties, provider);
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> ExternalLoginCallback(string returnUrl, string remoteError = null)
        {
            if (remoteError != null)
            {
                _validationProvider.AddError(ModelError, $"Error from external provider: {remoteError}");

                return StatusCode((int)HttpStatusCode.BadRequest, _validationProvider.ValidationErrors);
            }
            var info = await _signInManager.GetExternalLoginInfoAsync();
            if (info == null)
            {
                return StatusCode((int)HttpStatusCode.BadRequest);
            }

            // Sign in the user with this external login provider if the user already has a login.
            var result = await _signInManager.ExternalLoginSignInAsync(info.LoginProvider, info.ProviderKey, true);
            if (result.Succeeded)
            {
                _logger.LogInformation(5, $"User logged in with {info.LoginProvider} provider.");

                return LocalRedirect(returnUrl);
            }

            // If the user does not have an account, then ask the user to create an account.
            var email = info.Principal.FindFirstValue(ClaimTypes.Email);
            var redirectUrl = Url.RouteUrl("externalLoginConfirmation", new
            {
                loginProvider = info.LoginProvider,
                returnUrl,
                email
            });

            return LocalRedirect(redirectUrl);
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> ConfirmEmail(ConfirmEmailViewModel model)
        {
            var user = await _userManager.FindByIdAsync(model.UserId);

            if (user == null)
            {
                return LocalRedirect("/Error");
            }
            var result = await _userManager.ConfirmEmailAsync(user, model.Code);

            return LocalRedirect(result.Succeeded ? "/Account/SuccessfullyConfirmedEmail" : "/Error");
        }

        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> GeneratePasswordResetLink(ForgotPasswordViewModel model)
        {
            if (ModelState.IsValid)
            {
                var user = await _userManager.FindByEmailAsync(model.Email);

                if (user == null)
                {
                    ModelState.AddModelError(ModelError, "We couldn't find that email address");

                    return StatusCode((int)HttpStatusCode.BadRequest, ModelState.ConvertErrorsToJson());
                }

                // For more information on how to enable account confirmation and password reset please visit http://go.microsoft.com/fwlink/?LinkID=532713
                // Send an email with this link
                var code = await _userManager.GeneratePasswordResetTokenAsync(user);
                var resetPasswordLink = Url.Action(nameof(ResetPassword), "Account", new
                {
                    userId = user.Id,
                    code
                }, HttpContext.Request.Scheme);

                return Ok(new
                {
                    email = model.Email,
                    resetPasswordLink
                });
            }

            return StatusCode((int)HttpStatusCode.BadRequest, ModelState.ConvertErrorsToJson());
        }

        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> ResetPassword(ResetPasswordViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return StatusCode((int)HttpStatusCode.BadRequest, ModelState.ConvertErrorsToJson());
            }
            var user = await _userManager.FindByIdAsync(model.UserId);
            var result = await _userManager.ResetPasswordAsync(user, model.Code, model.Password);

            if (result.Succeeded)
            {
                return Ok();
            }

            AddErrors(result);

            return StatusCode((int)HttpStatusCode.BadRequest, ModelState.ConvertErrorsToJson());
        }

        private void AddErrors(IdentityResult result)
        {
            foreach (var error in result.Errors)
            {
                ModelState.AddModelError(ModelError, error.Description);
            }
        }
    }
}
