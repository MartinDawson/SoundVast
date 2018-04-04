using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SoundVast.Components.Comment
{
    public interface ICommentService
    {
        ConcurrentDictionary<int, Models.Comment> AllComments { get; }
        IObservable<Models.Comment> Comments();
        void Add(Models.Comment comment);
        void Edit(int commentId, string body);
        void Delete(int commentId);
        void AddError(Exception exception);
    }
}
