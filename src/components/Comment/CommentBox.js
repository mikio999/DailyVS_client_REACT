import React, { useEffect, useState } from 'react';
import ParentComment from './ParentComment';

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
      <ParentComment
        user={user}
        data={data}
        reply={reply}
        setShowReply={setShowReply}
      />
      {!!showReply &&
        reply.map(re => (
          <ParentComment key={re.id} user={re.user_info} data={re} />
        ))}
    </>
  );
}

export default CommentBox;
