﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace SoundVast.Components.Audio
{
    public static class AudioBuilder
    {
        public static IQueryable<T> BuildAudio<T>(this IQueryable<T> query) where T : Models.Audio
        {
            return query
                .Include(x => x.AudioGenres).ThenInclude(x => x.Genre)
                .Include(x => x.Ratings);
        }
    }
}
