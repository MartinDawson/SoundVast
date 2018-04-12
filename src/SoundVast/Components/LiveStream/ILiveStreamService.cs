using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Audio;
using SoundVast.Components.LiveStream.Models;

namespace SoundVast.Components.LiveStream
{
    public interface ILiveStreamService : IAudioService<Models.LiveStream>
    {
        Models.LiveStream GetLiveStream(int id);
        IEnumerable<Models.LiveStream> GetLiveStreams(int count, Filter.Filter filter, string genreName, string searchQuery);
        void UpdateListeners(int id, int listeners);
    }
}
