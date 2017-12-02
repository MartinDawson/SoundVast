﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL;
using GraphQL.Relay.Types;
using GraphQL.Types;
using SoundVast.Components.GraphQl;

namespace SoundVast.Components.LiveStream
{
    public class SaveLiveStreamPayload : MutationPayloadGraphType
    {
        private readonly ILiveStreamService _liveStreamService;

        public SaveLiveStreamPayload(ILiveStreamService liveService)
        {
            _liveStreamService = liveService;

            Name = nameof(SaveLiveStreamPayload);

            Field<LiveStreamPayload>("liveStream");
        }

        public override object MutateAndGetPayload(MutationInputs inputs, ResolveFieldContext<object> context)
        {
            var coverImageUrl = inputs.Get<string>("coverImageUrl");
            var name = inputs.Get<string>("name");
            var liveStreamUrl = inputs.Get<string>("liveStreamUrl");
            var genreId = inputs.Get<int>("genreId");
            var user = context.UserContext.As<Context>().CurrentUser;
            var liveStream = new Models.LiveStream
            {
                CoverImageUrl = coverImageUrl,
                Name = name,
                LiveStreamUrl = liveStreamUrl,
                GenreId = genreId,
                UserId = user.Id
            };

            _liveStreamService.Add(liveStream);

            return new
            {
                liveStream
            };
        }
    }
}