﻿using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL.Relay.Types;
using SoundVast.Components.Account;
using SoundVast.Components.Audio;
using SoundVast.Components.Comment;
using SoundVast.Components.Genre;
using SoundVast.Components.Rating;
using SoundVast.Components.User;
using SoundVast.Storage.CloudStorage;
using Microsoft.WindowsAzure.Storage.Blob;
using SoundVast.Components.LiveStream.Models;
using Microsoft.Extensions.Configuration;
using System.Net.Http;
using System.IO;
using Newtonsoft.Json;
using SoundVast.Utilities;

namespace SoundVast.Components.LiveStream
{
    public class LiveStreamPayload : GraphQL.Relay.Types.Temp.NodeGraphType<Models.LiveStream>
    {
        private readonly ILiveStreamService _liveStreamService;
        private readonly ICloudStorage _cloudStorage;

        public LiveStreamPayload(ILiveStreamService liveStreamService, ICloudStorage cloudStorage)
        {
            _liveStreamService = liveStreamService;
            _cloudStorage = cloudStorage;

            Name = nameof(Models.LiveStream);

            Id("audioId", x => x.Id);
            Field(x => x.Name);
            Field(x => x.WebsiteUrl, nullable: true);
            Field(x => x.Likes);
            Field(x => x.Dislikes);
            Field(x => x.Country);
            Field<StringGraphType>("coverImageUrl", "The cover image url", resolve: GetCoverImageUrl);
            Field<DateGraphType>("dateAdded", "The date the user added the live stream");
            Field<ListGraphType<GenrePayload>>("genres", "The genre the live stream belongs to", resolve: c => c.Source.AudioGenres.Select(x => x.Genre));
            Field<ListGraphType<RatingPayload>>("ratings", "The ratings that have been applied by users to this live stream");
            Field<ListGraphType<StreamDataPayload>>("streamDatas");
            Connection<CommentPayload>()
                .Name("comments")
                .Description("The comments for the live stream")
                .Resolve(c =>
                {
                    var comments = c.Source.Comments.Reverse();

                    return ConnectionUtils.ToConnection(comments, c);
                });

            Interface<AudioInterface>();
        }

        public override Models.LiveStream GetById(string id)
        {
            return _liveStreamService.GetLiveStream(int.Parse(id));
        }

        private object GetCoverImageUrl(ResolveFieldContext<Models.LiveStream> c)
        {
            if (c.Source.CoverImageName == null) return null;

            return $"{_cloudStorage.CloudBlobContainers[CloudStorageType.Image].Uri.AbsoluteUri}/{c.Source.CoverImageName}";
        }
    }
}
