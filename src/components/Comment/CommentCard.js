import React, { useEffect, useState } from 'react';
import CommentElement from './CommentElement';
import CommentInput from './CommentInput';
import ReplyCard from './ReplyCard';
import ReplyInput from './ReplyInput';
import ReplyElement from './ReplyElement';

function CommentCard({ voteId, data, voteChoice }) {
  const [reply, setReply] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [showReply, setShowReply] = useState(false);
  const [newreplies, setNewreplies] = useState([]);

  const addReply = newReply => {
    setNewreplies([...newreplies, newReply]);
  };

  const parentId = data.id;

  useEffect(() => {
    const accessToken = localStorage.getItem('access');
    if (!accessToken) {
      return;
    }

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
        Accept: 'application/json',
      },
    };

    fetch(`${process.env.REACT_APP_HOST}/accounts/user_info/`, {
      headers: config.headers,
    })
      .then(response => response.json())
      .then(result => {
        setUserInfo(result);
      });
  }, []);

  const FakeData = {
    choice: voteChoice?.choice_text,
    time_difference: '방금 전',
    content: data,
  };

  return (
    <>
      <CommentElement
        user={userInfo}
        data={FakeData}
        reply={reply}
        setShowReply={setShowReply}
      />
      {!!showReply &&
        reply?.map(re => (
          <ReplyElement
            parentId={parentId}
            key={re.id}
            user={re.user_info}
            data={re}
          />
        ))}
      {newreplies &&
        newreplies?.map((comment, index) => (
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
        />
      )}
    </>
  );
}

export default CommentCard;