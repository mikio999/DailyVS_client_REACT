import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import { MintButton } from '../Atoms/Buttons';

function CommentInput({ voteId }) {
  const [comment, setComment] = useState('');

  const handleChange = e => {
    const newComment = e.target.value;
    setComment(newComment);
    console.log(comment);
  };
  const handleSubmit = () => {
    const sendData = { content: comment, poll: voteId };
    console.log(sendData);
    if (comment.length > 0) {
      fetch(`http://127.0.0.1:8000/${voteId}/comment`, {
        method: 'POST',
        body: sendData,
      })
        .then(response => response.json())
        .then(data => {
          console.log('성공:', data);
        })
        .catch(error => {
          console.error('데이터 받기 실패:', error);
        });
    }

    setComment('');
  };
  return (
    <Container>
      <Info>
        <div className="name">Nickname</div>
        <div className="mbti">MBTI</div>
        <div className="gender">W</div>
        <div className="result">Choice</div>
      </Info>
      <CommentText
        value={comment}
        onChange={handleChange}
        placeholder="댓글을 입력하세요"
      />
      <div style={{ width: '30%', marginLeft: 'auto' }}>
        <MintButton content={'댓글 달기'} onClick={handleSubmit} />
      </div>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
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
  height: 30px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${theme.colors.placeholder};
  }
`;

export default CommentInput;
