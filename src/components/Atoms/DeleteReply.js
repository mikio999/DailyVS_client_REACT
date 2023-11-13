import React from 'react';
import styled from 'styled-components';

const DeleteReply = ({ commentId, replyCount, setReplyCount }) => {
  const handleDelete = e => {
    e.preventDefault();
    const shouldDelete = window.confirm('댓글을 삭제하시겠습니까?');

    if (!shouldDelete) {
      return;
    }
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const accessToken = localStorage.getItem('access');

    if (accessToken) {
      headers.append('Authorization', `Bearer ${accessToken}`);
    }

    fetch(`${process.env.REACT_APP_HOST}/comment/${commentId}/delete`, {
      method: 'DELETE',
      headers: headers,
    })
      .then(response => response.json())
      .then(data => {
        setReplyCount(replyCount - 1);
        console.log('성공:', data);
      })
      .catch(error => {
        setReplyCount(replyCount - 1);
      });
  };

  return (
    <Container onClick={handleDelete}>
      <Delete src={require('../../assets/Buttons/CommentBtn.png')} />
    </Container>
  );
};
export default DeleteReply;

const Container = styled.div`
  margin: auto;
`;

const Delete = styled.img`
  display: flex;
  margin: auto;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
