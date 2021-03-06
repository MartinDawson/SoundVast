﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Filter;
using SoundVast.Components.Genre;
using SoundVast.Components.Genre.Models;
using SoundVast.Components.Rating;
using SoundVast.Components.Rating.Models;
using SoundVast.Components.User;

namespace SoundVast.Components.Audio.Models
{
    public abstract class Audio : IRatable
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public string CoverImageName { get; set; }
        [Required]
        public DateTimeOffset DateAdded { get; set; }
        public string Description { get; set; }
        public int Likes => Ratings.Count(x => x.Liked);
        public int Dislikes => Ratings.Count(x => !x.Liked);
        public virtual ICollection<AudioTag> AudioTags { get; set; } = new List<AudioTag>();
        public virtual ICollection<AudioGenre> AudioGenres { get; set; } = new List<AudioGenre>();
        public virtual ICollection<ApplicationUser> Contributors { get; set; } = new List<ApplicationUser>();
        public virtual ICollection<Rating.Models.Rating> Ratings { get; set; } = new List<Rating.Models.Rating>();
        [NotMapped]
        public virtual ICollection<Comment.Models.Comment> Comments { get; set; } = new List<Comment.Models.Comment>();
    }
}
