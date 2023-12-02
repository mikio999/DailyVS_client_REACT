import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import { MintButton } from '../Atoms/Buttons';
import { useSelector } from 'react-redux';
import Sending from '../Atoms/Sending';

function CommentInput({
  setCurrentPage,
  voteId,
  voteChoice,
  onCommentSubmit,
  userInfo,
  setCommentsCount,
  setFilter,
  commentsCount,
}) {
  const [comment, setComment] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleChange = e => {
    const newComment = e.target.value;
    setComment(newComment);
  };

  const handleSubmit = () => {
    if (comment.length > 200) {
      alert('댓글은 200자 이하로 입력해주세요.');
      return;
    }
    setIsSending(true);
    onCommentSubmit(comment);

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const accessToken = localStorage.getItem('access');

    if (accessToken) {
      headers.append('Authorization', `Bearer ${accessToken}`);
    }

    fetch(`${process.env.REACT_APP_HOST}/${voteId}/comment`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        content: comment,
        user_info: userInfo,
        poll: voteId,
      }),
    })
      .then(response => response.json())
      .then(data => {
        setFilter('newest');
        setCommentsCount(commentsCount + 1);
        setCurrentPage(1);
        setIsSending(false);
      })
      .catch(error => {
        setIsSending(false);
        console.error('데이터 받기 실패:', error);
      });

    setComment('');
  };

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  function truncateString(str, maxLength) {
    if (str?.length > maxLength) {
      return str.slice(0, maxLength) + '...';
    }
    return str;
  }

  return (
    <Container>
      {isAuthenticated ? (
        <>
          <Info>
            <div className="name">{userInfo?.nickname}</div>
            <div className="mbti">{userInfo?.mbti}</div>
            <div className="gender">{userInfo?.gender}</div>
            <div className="result">
              {truncateString(voteChoice?.choice_text, 8)}
            </div>
          </Info>
          <CommentText
            value={comment}
            onChange={handleChange}
            placeholder="댓글을 입력하세요"
          />
          <div style={{ width: '30%', marginLeft: 'auto' }}>
            {!isSending ? (
              <MintButton
                content={'댓글 달기'}
                onClick={handleSubmit}
                disabled={comment?.length === 0}
              />
            ) : (
              <DataSending>
                <Sending />
              </DataSending>
            )}
          </div>
        </>
      ) : (
        <div>로그인 후 이용해주세요</div>
      )}
    </Container>
  );
}
const Container = styled.div`
  width: min(100%, 1000px);
  margin: 0rem auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 10px;
  border: 2px solid ${theme.colors.turquoisSecondaryColor};
  background-color: white;
`;

const Info = styled.div`
  display: flex;
  align-items: flex-end;

  & .name {
    font-weight: 900;
    font-size: 20px;
    margin-right: 10px;
  }
  & .gender {
    margin: 0 5px;
  }
  & .result {
    color: ${theme.colors.turquoisSecondaryColor};
  }
`;
const CommentText = styled.textarea`
  resize: none;
  border: none;
  box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.25);
  font-size: 16px;
  padding: 7px 12px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${theme.colors.placeholder};
    transition: color 0.3s;
  }

  &:focus::placeholder {
    color: ${theme.colors.turquoisSecondaryColor};
  }
`;

const DataSending = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default CommentInput;
