﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL.Relay.Types;
using GraphQL.Types;
using SoundVast.Components.Tag;

namespace SoundVast.Components.LiveStream
{
    public class SaveLiveStreamInput : MutationInputGraphType
    {
        public SaveLiveStreamInput()
        {
            Name = nameof(SaveLiveStreamInput);
           
            Field<NonNullGraphType<StringGraphType>>("Name");
            Field<NonNullGraphType<StringGraphType>>("LiveStreamUrl");
            Field<NonNullGraphType<StringGraphType>>("CoverImageName");
            Field<StringGraphType>("WebsiteUrl");
            Field<StringGraphType>("Country");
            Field<ListGraphType<TagInput>>("Tags");
            Field<ListGraphType<StringGraphType>>("GenreIds");
        }
    }
}
