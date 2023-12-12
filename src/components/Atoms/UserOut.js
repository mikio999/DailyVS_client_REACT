import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const UserOut = () => {
  const selectedKakaoAuth = localStorage.getItem('isKakao');

  const navigate = useNavigate();
  const handleOutClick = event => {
    event.preventDefault();

    const shouldDelete = window.confirm('정말로 탈퇴하시겠습니까?');

    if (shouldDelete) {
      const shouldDelete2 = window.confirm(
        '지금까지 Daily VS와 함께한 모든 추억이 사라져요 ;ㅅ;',
      );

      if (shouldDelete2) {
        const shouldDelete3 = window.confirm(
          '마지막입니다.. 이제 안붙잡을래요..',
        );

        if (shouldDelete3) {
          const headers = new Headers();
          headers.append('Content-Type', 'application/json');

          const accessToken = localStorage.getItem('access');

          if (accessToken) {
            headers.append('Authorization', `Bearer ${accessToken}`);
          }

          if (!selectedKakaoAuth) {
            const requestOptions = {
              method: 'DELETE',
              headers: headers,
            };

            fetch(
              `${process.env.REACT_APP_HOST}/accounts/delete/`,
              requestOptions,
            )
              .then(response => response.json())
              .then(result => {
                console.log('서버 응답:', result);

                if (result) {
                  localStorage.removeItem('access');
                  localStorage.removeItem('refresh');

                  navigate(`/`);
                  window.location.reload();
                }
              })
              .catch(error => {
                console.error('POST 요청 오류:', error);
              });
          } else {
            const accessToken = localStorage.getItem('access');
            const requestOptions = {
              method: 'DELETE',
              headers: headers,
            };
            const data = { access_kakao: accessToken };
            fetch(
              `${process.env.REACT_APP_HOST}/accounts/delete/`,
              requestOptions,
              data,
            )
              .then(response => response.json())
              .then(result => {
                console.log('서버 응답:', result);

                if (result) {
                  localStorage.removeItem('access');
                  localStorage.removeItem('refresh');
                  localStorage.removeItem('isKakao');

                  navigate(`/`);
                  window.location.reload();
                }
              })
              .catch(error => {
                console.error('POST 요청 오류:', error);
              });
          }
        }
      }
    }
  };

  return <Container onClick={handleOutClick}>탈퇴하기</Container>;
};
export default UserOut;

const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ff495a;
  border-radius: 5px;
  margin-right: 2rem;
  font-size: 15px;
  width: 120px;
  height: 40px;
  color: #ff495a;
  background-color: white;
  &:hover {
    cursor: pointer;
    color: white;
    background-color: #ff495a;
    border: 1px solid #ff495a;
  }
`;
