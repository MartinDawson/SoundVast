﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SoundVast.Components.Audio;
using SoundVast.Components.Audio.Models;
using SoundVast.Components.Genre;
using SoundVast.Components.Genre.Models;
using SoundVast.Components.Song.Models;
using SoundVast.Repository;
using SoundVast.Validation;

namespace SoundVast.Components.Song
{
    public class SongService : AudioService<Models.Song>, ISongService
    {
        private readonly IRepository<Models.Song> _repository;

        public SongService(IRepository<Models.Song> repository, IValidationProvider validationProvider) : 
            base(repository, validationProvider)
        {
            _repository = repository;
        }

        public override Models.Song GetAudio(int id)
        {
            var song = _repository.GetAll().BuildSong().BuildAudio().Single(x => x.Id == id);

            return song;
        }

        public override IEnumerable<Models.Song> GetAudios(string genreName, string searchQuery, Filter.Filter filter)
        {
            var songs = base.GetAudios(genreName, searchQuery, filter).AsQueryable().BuildSong();

            if (filter.DateFrom.HasValue && filter.DateTo.HasValue)
            {
                songs = songs.Where(x => x.ReleaseDate > filter.DateFrom && x.ReleaseDate < filter.DateTo);
            }

            if (filter.Newest)
            {
                songs = songs.OrderByDescending(x => x.ReleaseDate);
            }

            return songs;
        }

        public override Models.Song Edit(int existingAudioId, Models.Song newModel)
        {
            var song = base.Edit(existingAudioId, newModel);

            song.ArtistSongs = newModel.ArtistSongs;
            song.Free = newModel.Free;

            _repository.Save();

            return song;
        }
    }
}
