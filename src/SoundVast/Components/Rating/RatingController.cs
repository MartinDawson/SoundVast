using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using SoundVast.Components.Audio;
using SoundVast.Components.Audio.Models;
using SoundVast.Components.Radio;
using SoundVast.Components.Rating.Models;
using SoundVast.Components.Song;
using SoundVast.Components.User;

namespace SoundVast.Components.Rating
{
    [Authorize]
    public class RatingController : Controller
    {
        private readonly IAudioService<AudioModel> _audioService;
        private readonly UserManager<ApplicationUser> _userManager;

        public RatingController(IAudioService<AudioModel> audioService, UserManager<ApplicationUser> userManager)
        {
            _audioService = audioService;
            _userManager = userManager;
        }

        [HttpPost]
        public IActionResult RateAudio([FromBody] RateAudioModel model)
        {
            var userId = _userManager.GetUserId(User);
            var rating = _audioService.RateAudio(model.AudioId, model.Liked, userId);

            return Ok(new
            {
                rating
            });
        }
    }
}