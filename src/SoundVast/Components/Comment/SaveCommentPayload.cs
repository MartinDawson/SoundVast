using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL;
using GraphQL.Relay.Types;
using GraphQL.Types;
using SoundVast.Components.GraphQl;
using Microsoft.AspNetCore.Identity;
using SoundVast.Components.User;
using SoundVast.Components.Audio;

namespace SoundVast.Components.Comment
{
    public class SaveCommentPayload : MutationPayloadGraphType
    {
        private readonly ICommentService _commentService;
        private readonly IAudioService<Audio.Models.Audio> _audioService;

        public SaveCommentPayload(ICommentService commentService, IAudioService<Audio.Models.Audio> audioService)
        {
            _commentService = commentService;
            _audioService = audioService;

            Name = nameof(SaveCommentPayload);
           
            Field<NonNullGraphType<CommentPayload>>("comment");
        }

        public override object MutateAndGetPayload(MutationInputs inputs, ResolveFieldContext<object> context)
        {
            var body = inputs.Get<string>("body");
            var originalCommentId = inputs.Get<int?>("originalCommentId");
            var audioId = inputs.Get<int>("audioId");
            var user = context.UserContext.As<Context>().CurrentUser;
            var comment = new Models.Comment
            {
                User = user,
                Body = body,
                Audio = _audioService.GetAudio(audioId),
                OriginalComment = originalCommentId.HasValue ? _commentService.AllComments.GetValueOrDefault(originalCommentId.Value, null) : null,
            };

            _commentService.Add(comment);

            return new
            {
                comment
            };
        }
    }
}
