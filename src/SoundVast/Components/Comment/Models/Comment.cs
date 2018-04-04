using System;
using System.Linq;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using SoundVast.Components.Rating;
using SoundVast.Components.Rating.Models;
using SoundVast.Components.User;

namespace SoundVast.Components.Comment.Models
{
    public class Comment
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public string Body { get; set; }
        [Required]
        public Audio.Models.Audio Audio { get; set; }
        [Required]
        public ApplicationUser User { get; set; }
        public Comment OriginalComment { get; set; }
    }
}
