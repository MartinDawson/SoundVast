﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Audio.Models;
using SoundVast.Storage.CloudStorage;

namespace SoundVast.Components.Upload
{
    public interface IUploadService
    {
        Task UploadCoverImage(ICloudBlob blob, Stream stream, string contentType);
        void Add(AudioModel model);
    }
}