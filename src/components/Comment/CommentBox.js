import React, { useEffect, useState } from 'react';
import CommentElement from './CommentElement';
import ReplyInput from './ReplyInput';
import ReplyElement from './ReplyElement';

function CommentBox({
  setCurrentPage,
  data,
  voteId,
  commentsCount,
  setCommentsCount,
  replyCount,
  setReplyCount,
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
      />

      {!!showReply &&
        data?.reply.map(repl => (
          <ReplyElement
            parentId={parentId}
            key={repl?.id}
            user={repl?.user_info}
            data={repl}
            voteId={voteId}
            replyCount={replyCount}
            setReplyCount={setReplyCount}
          />
        ))}

      {!!showReply && (
        <ReplyInput
          parentId={parentId}
          onCommentSubmit={addReply}
          voteId={voteId}
          setCurrentPage={setCurrentPage}
        />
      )}
    </>
  );
}

export default CommentBox;
