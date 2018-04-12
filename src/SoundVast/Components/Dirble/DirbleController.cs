using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SoundVast.Utilities;
using SoundVast.Components.LiveStream;

namespace SoundVast.Components.Dirble
{
    public class DirbleController : Controller
    {
        private readonly IDirble _dirble;
        private readonly ILiveStreamService _liveStreamService;

        public DirbleController(IDirble dirble, ILiveStreamService liveStreamService)
        {
            _dirble = dirble;
            _liveStreamService = liveStreamService;
        }

        [HttpGet]
        public async Task<IActionResult> GetListenersForStation(int id)
        {
            var station = await _dirble.GetStation(id, TimeSpan.FromMinutes(20));

            _liveStreamService.UpdateListeners(id, station.TotalListeners);

            return Ok(new
            {
                listeners = station.TotalListeners
            });
        }
    }
}