﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL;
using GraphQL.Relay.Types;
using GraphQL.Types;
using Microsoft.AspNetCore.Identity;
using SoundVast.Components.Audio;
using SoundVast.Components.GraphQl;
using SoundVast.Components.User;

namespace SoundVast.Components.Rating
{
    public class RateAudioPayload : MutationPayloadGraphType<Task<object>>
    {
        private readonly IAudioService<Audio.Models.Audio> _audioService;

        public RateAudioPayload(IAudioService<Audio.Models.Audio> audioService)
        {
            _audioService = audioService;

            Name = nameof(RateAudioPayload);
           
            Field<RatingPayload>("rating");
        }

        public override async Task<object> MutateAndGetPayload(MutationInputs inputs, ResolveFieldContext<object> c)
        {
            var id = inputs.Get<int>("id");
            var liked = inputs.Get<bool>("liked");
            var context = await c.UserContext.As<Task<Context>>();
            var rating = _audioService.Rate(id, context.CurrentUser.Id, liked);

            return new
            {
                rating
            };
        }
    }
}
