import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const UserOut = () => {
  const navigate = useNavigate();
  const handleOutClick = event => {
    event.preventDefault();
    const shouldDelete = window.confirm('정말로 탈퇴하시겠습니까?');

    if (!shouldDelete) {
      return;
    }

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const accessToken = localStorage.getItem('access');

    if (accessToken) {
      headers.append('Authorization', `Bearer ${accessToken}`);
    }

    const requestOptions = {
      method: 'DELETE',
      headers: headers,
    };

    fetch(`${process.env.REACT_APP_HOST}/accounts/delete/`, requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log('서버 응답:', result);

        if (result) {
          navigate(`/my-page`);
        }
      })
      .catch(error => {
        console.error('POST 요청 오류:', error);
      });
  };

  return <Container onClick={handleOutClick}>탈퇴하기</Container>;
};
export default UserOut;

const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 5px;
  margin-left: 10px;
  font-size: 15px;
  width: 120px;
  height: 40px;
  color: white;
  background-color: #ff495a;
  &:hover {
    cursor: pointer;
    color: #ff495a;
    background-color: white;
    border: 1px solid #ff495a;
  }
`;
