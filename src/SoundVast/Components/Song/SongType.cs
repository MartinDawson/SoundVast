﻿using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL.Relay.Types;
using GraphQL.Types.Relay.DataObjects;
using SoundVast.Components.Audio;
using SoundVast.Components.Genre;
using SoundVast.Components.Rating;
using SoundVast.Components.Song.Models;
using SoundVast.Components.User;

namespace SoundVast.Components.Song
{
    public class SongType : NodeGraphType<Models.Song>
    {
        public SongType()
        {
            Name = nameof(Models.Song);

            Id("audioId", x => x.Id);
            Field(x => x.Name);
            Field(x => x.CoverImageUrl).Description("The poster image for the song");
            Field(x => x.Artist, true);
            Field(x => x.Likes);
            Field(x => x.Dislikes);
            Field<UserType>("user", "The user who uploaded the song");
            Field<GenreType>("genre", "The genre the song belongs to");
            Field<ListGraphType<RatingType>>("ratings", "The ratings that have been applied by users to this song");

            Interface<AudioInterface>();
        }

        public override Models.Song GetById(string id)
        {
            throw new NotImplementedException();
        }
    }
}
