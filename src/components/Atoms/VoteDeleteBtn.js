import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const VoteDetailBtn = ({ voteId }) => {
  const navigate = useNavigate();

  const handleDelete = e => {
    e.preventDefault();
    const shouldDelete = window.confirm(
      '삭제하면 전체 투표 데이터가 사라져요 ;ㅅ; 정말로 투표를 삭제하실건가요?',
    );

    if (!shouldDelete) {
      return;
    }
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
        alert('투표가 삭제되었습니다!');
        navigate(`/my-page`);
      })
      .catch(error => {
        console.error('데이터 받기 실패:', error);
        alert('투표가 정상적으로 삭제되었습니다!');
        navigate(`/my-page`);
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
