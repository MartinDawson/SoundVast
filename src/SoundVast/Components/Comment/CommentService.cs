using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using SoundVast.Repository;
using Microsoft.EntityFrameworkCore;
using SoundVast.Components.Comment.Models;
using SoundVast.Components.Rating;
using SoundVast.Components.User;
using SoundVast.Validation;
using System.Reactive.Subjects;
using System.Collections.Concurrent;
using System.Reactive.Linq;

namespace SoundVast.Components.Comment
{
    public class CommentService : ICommentService
    {
        private readonly ISubject<Models.Comment> _commentStream = new ReplaySubject<Models.Comment>();
        private readonly IValidationProvider _validationProvider;
        public ConcurrentDictionary<int, Models.Comment> AllComments { get; }

        public CommentService(IValidationProvider validationProvider)
        {
            _validationProvider = validationProvider;
        }

        public void Add(Models.Comment comment)
        {
            _validationProvider.Validate(comment);

            if (!_validationProvider.HasErrors)
            {
                if (comment.OriginalComment != null)
                {
                    var originalComment = AllComments.GetValueOrDefault(comment.OriginalComment.Id);

                    comment.OriginalComment = originalComment;
                }

                AllComments.TryAdd(comment.Id, comment);
                _commentStream.OnNext(comment);
            }
        }

        public IObservable<Models.Comment> Comments()
        {
            return _commentStream.AsObservable();
        }

        public void Edit(int commentId, string body)
        {
            if (!_validationProvider.HasErrors)
            {
                var comment = AllComments.GetValueOrDefault(commentId);

                comment.Body = body;
            }
        }

        public void Delete(int commentId)
        {
            if (!_validationProvider.HasErrors)
            {
                var removedComment = new Models.Comment();

                AllComments.Remove(commentId, out removedComment);
            }
        }

        public void AddError(Exception exception)
        {
            _commentStream.OnError(exception);
        }
    }
}