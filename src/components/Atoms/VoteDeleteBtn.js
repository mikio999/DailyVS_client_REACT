import React from 'react';
import styled from 'styled-components';

const VoteDetailBtn = ({ voteId }) => {
  const handleDelete = () => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const accessToken = localStorage.getItem('access');

    if (accessToken) {
      headers.append('Authorization', `Bearer ${accessToken}`);
    }

    fetch(`${process.env.REACT_APP_HOST}/${voteId}`, {
      method: 'DELETE',
      headers: headers,
    })
      .then(response => response.json())
      .then(data => {
        console.log('성공:', data);
      })
      .catch(error => {
        console.error('데이터 받기 실패:', error);
      });
  };

  return (
    <Container>
      <DeleteButton onClick={handleDelete}>삭제하기</DeleteButton>
    </Container>
  );
};
export default VoteDetailBtn;

const Container = styled.div``;

const DeleteButton = styled.button`
  border: solid 1px #457c9e;
  font-size: 16px;
  width: 100px;
  height: 25px;
  font-family: 'GongGothicLight';
  color: #457c9e;
  background-color: white;
  border-radius: 5px;
  &:hover {
    color: white;
    background-color: #457c9e;
    cursor: pointer;
  }
`;
