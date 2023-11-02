import React, { useEffect, useState } from 'react';
import CommentElement from './CommentElement';
import CommentInput from './CommentInput';

function CommentBox({ data }) {
  const [reply, setReply] = useState({});
  const [user, setUser] = useState({});
  const [showReply, setShowReply] = useState(false);

  useEffect(() => {
    setUser(data.user_info);
    setReply(data.reply);
  }, [data.user_info, data.reply]);

  return (
    <>
      <CommentElement
        user={user}
        data={data}
        reply={reply}
        setShowReply={setShowReply}
      />
      {!!showReply &&
        reply.map(re => (
          <CommentElement key={re.id} user={re.user_info} data={re} />
        ))}
      {!!showReply && <CommentInput />}
    </>
  );
}

export default CommentBox;
