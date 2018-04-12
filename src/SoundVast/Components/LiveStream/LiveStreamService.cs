using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Audio;
using SoundVast.Components.Genre.Models;
using SoundVast.Components.LiveStream.Models;
using SoundVast.Repository;
using SoundVast.Validation;
using SoundVast.Storage.CloudStorage;
using SoundVast.Utilities;
using SoundVast.Components.Dirble;

namespace SoundVast.Components.LiveStream
{
    public class LiveStreamService : AudioService<Models.LiveStream>, ILiveStreamService
    {
        private IRepository<Models.LiveStream> _repository;
        private IDirble _dirble;

        public LiveStreamService(IRepository<Models.LiveStream> repository,
            IValidationProvider validationProvider, ICloudStorage cloudStorage, IDirble dirble)
            : base(repository, validationProvider, cloudStorage)
        {
            _repository = repository;
            _dirble = dirble;
        }

        public Models.LiveStream GetLiveStream(int id)
        {
            return _repository.GetAll().BuildLiveStream().SingleOrDefault(x => x.Id == id);
        }

        public void UpdateListeners(int id, int listeners)
        {
            var station = _repository.Get(id);

            station.Listeners = listeners;

            _repository.Save();
        }

        public IEnumerable<Models.LiveStream> GetLiveStreams(int count, Filter.Filter filter, string genreName, string searchQuery)
        {
            var liveStreams = GetAudios(genreName, searchQuery)
                .AsQueryable().BuildLiveStream()
                .Where(x => x.CoverImageName != null);

            if (filter.Newest)
            {
                liveStreams = liveStreams.OrderByDescending(x => x.DateAdded);
            }
            else
            {
                liveStreams = liveStreams.OrderByDescending(x => x.Listeners);
            }

            return liveStreams.Take(count);
        }
    }
}