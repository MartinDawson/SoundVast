using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SoundVast.Components.Comment
{
    public interface ICommentService
    {
        ConcurrentDictionary<string, Models.Comment> AllComments { get; }
        IObservable<Models.Comment> Comments();
        void Add(Models.Comment comment);
        void Edit(string commentId, string body);
        void Delete(string commentId);
        void AddError(Exception exception);
    }
}
