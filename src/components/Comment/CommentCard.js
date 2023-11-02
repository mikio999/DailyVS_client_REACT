import React, { useEffect, useState } from 'react';
import CommentElement from './CommentElement';
import CommentInput from './CommentInput';

function CommentCard({ data, voteChoice }) {
  const [reply, setReply] = useState({});
  const [userInfo, setUserInfo] = useState({});
  const [showReply, setShowReply] = useState(false);

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

    fetch(`http://127.0.0.1:8000/accounts/user_info/`, {
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
  console.log(FakeData);
  console.log(userInfo);
  return (
    <>
      <CommentElement
        user={userInfo}
        data={FakeData}
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

export default CommentCard;
