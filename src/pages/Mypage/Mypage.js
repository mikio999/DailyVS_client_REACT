import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MypageInformation from './MypageInformation';
import MypageVoteList from './MypageVoteList/MypageVoteList';
import MypageLikeList from './MypageLikeList/MypageLikeList';
import theme from '../../styles/theme';

const Mypage = ({ logout }) => {
  const [userInformation, setUserInformation] = useState('');
  const [loading, setLoading] = useState(true);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const accessToken = localStorage.getItem('access');
    if (accessToken) {
      headers.append('Authorization', `Bearer ${accessToken}`);
    }

    const requestOptions = {
      method: 'GET',
      headers: headers,
    };

    fetch(`http://127.0.0.1:8000/mypage`, requestOptions)
      .then(response => response.json())
      .then(result => {
        setUserInformation(result);
        console.log(result);
        setLoading(false);
      });
  }, []);
  const logout_user = () => {
    const shouldLogout = window.confirm('로그아웃 하시겠습니까?');
    if (shouldLogout) {
      logout();
      setRedirect(true);
    }
  };

  if (loading) return;
  return (
    <Container>
      <MypageInformation userInformation={userInformation} />
      <MypageVoteList voteList={userInformation?.uservote} />
      <MypageLikeList pollLike={userInformation.poll_like} />
      <LogoutContainer>
        <LogOut href="/login" onClick={logout_user}>
          로그아웃
        </LogOut>
      </LogoutContainer>
    </Container>
  );
};

export default Mypage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 136px - 200px);
  background-color: ${props => props.theme.colors.blueBgColor};
`;
const LogoutContainer = styled.div`
  width: min(100%, 460px);
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
  @media screen and (min-width: 600px) {
    display: none;
  }
`;

const LogOut = styled.div`
  background-color: ${theme.colors.redpinkPrimaryColor};
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: white;
    border: 1px solid ${theme.colors.redpinkPrimaryColor};
    color: ${theme.colors.redpinkPrimaryColor};
  }
`;
