﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL;
using GraphQL.Relay.Types;
using GraphQL.Types;
using SoundVast.Components.GraphQl;

namespace SoundVast.Components.Song
{
    public class SaveSongPayload : MutationPayloadGraphType<SongPayload, SongPayload>
    {
        private readonly ISongService _songService;
        private static string GetUserId(ResolveFieldContext<object> context) => context.UserContext.As<Context>().ApplicationUser.Id;

        public SaveSongPayload(ISongService songService)
        {
            _songService = songService;

            Name = nameof(SaveSongPayload);
           
            Field(
                name: "song",
                type: typeof(SongType)
            );
        }

        public override SongPayload MutateAndGetPayload(MutationInputs inputs, ResolveFieldContext<object> context)
        {
            var song = inputs.As<Models.Song>();
        
            song.UserId = GetUserId(context);
            _songService.Add(song);

            return new SongPayload {Song = song};
        }
    }
}
