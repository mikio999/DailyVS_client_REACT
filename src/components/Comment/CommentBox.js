import React, { useEffect, useState } from 'react';
import CommentElement from './CommentElement';
import ReplyInput from './ReplyInput';
import ReplyCard from './ReplyCard';

function CommentBox({ setCurrentPage, data, voteId, voteChoice, userInfo }) {
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
      />

      {!!showReply &&
        data?.reply.map(repl => (
          <CommentElement
            parentId={parentId}
            key={repl?.id}
            user={repl?.user_info}
            data={repl}
          />
        ))}
      {newreplies &&
        newreplies.map((comment, index) => (
          <ReplyCard
            key={index}
            data={comment}
            voteChoice={voteChoice.choice_text}
            user={userInfo}
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
