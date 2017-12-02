﻿using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Genre;
using SoundVast.Components.Song.Models;

namespace SoundVast.Components.User
{
    public class UserPayload : ObjectGraphType<ApplicationUser>
    {
        public UserPayload()
        {
            Name = "User";

            Field<IdGraphType>("id");
            Field(x => x.UserName);
            Field(x => x.Email);
            Field(x => x.EmailConfirmed);
        }
    }
}