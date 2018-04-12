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

        public override object MutateAndGetPayload(MutationInputs inputs, ResolveFieldContext<object> c)
        {
            var body = inputs.Get<string>("body");
            var originalCommentId = inputs.Get<string>("originalCommentId");
            var audioId = inputs.Get<int>("audioId");
            var context = c.UserContext.As<Task<Context>>();

            context.Wait();
            var audio = _audioService.GetAudio(audioId);
            var comment = new Models.Comment
            {
                Id = Guid.NewGuid().ToString(),
                User = context.Result.CurrentUser,
                Body = body,
                Audio = audio,
                OriginalComment = originalCommentId != null ? _commentService.AllComments.GetValueOrDefault(originalCommentId, null) : null,
            };

            _commentService.Add(comment);

            return new
            {
                comment
            };
        }
    }
}
