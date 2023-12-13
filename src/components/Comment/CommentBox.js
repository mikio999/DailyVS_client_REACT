import React, { useEffect, useState } from 'react';
import CommentElement from './CommentElement';
import ReplyInput from './ReplyInput';
import ReplyElement from './ReplyElement';

function CommentBox({
  setCurrentPage,
  data,
  voteId,
  voteChoice,
  commentsCount,
  setCommentsCount,
  replyCount,
  setReplyCount,
  commentCategory,
}) {
  const [reply, setReply] = useState({});
  const [user, setUser] = useState({});
  const [showReply, setShowReply] = useState(false);
  const [newreplies, setNewreplies] = useState([]);
  const addReply = newReply => {
    setNewreplies([...newreplies, newReply]);
  };

  useEffect(() => {
    setUser(data.user_info);
    setReply(data.reply);
  }, [data.user_info, data.reply]);

  const parentId = data.id;

  return (
    <>
      <CommentElement
        user={user}
        data={data}
        reply={reply}
        setShowReply={setShowReply}
        voteId={voteId}
        commentsCount={commentsCount}
        setCommentsCount={setCommentsCount}
        replyCount={replyCount}
        setReplyCount={setReplyCount}
        commentCategory={commentCategory}
      />

      {!!showReply &&
        data?.reply.map(repl => (
          <ReplyElement
            parentId={parentId}
            key={repl?.id}
            user={repl?.user_info}
            data={repl}
            voteId={voteId}
            voteChoice={voteChoice}
            replyCount={replyCount}
            setReplyCount={setReplyCount}
            commentCategory={commentCategory}
          />
        ))}

      {!!showReply && (
        <ReplyInput
          data={data}
          parentId={parentId}
          onCommentSubmit={addReply}
          voteId={voteId}
          voteChoice={voteChoice}
          setCurrentPage={setCurrentPage}
          setReplyCount={setReplyCount}
          replyCount={replyCount}
          commentCategory={commentCategory}
        />
      )}
    </>
  );
}

export default CommentBox;
