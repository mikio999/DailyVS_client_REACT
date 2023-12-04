import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MypageInformation from './MypageInformation';
import MypageVoteList from './MypageVoteList/MypageVoteList';
import MypageLikeList from './MypageLikeList/MypageLikeList';
import theme from '../../styles/theme';
import { logout, kakao_logout } from '../../actions/auth';
import MypageCreateList from './MypageCreateList/MypageCreateList';
import { useSelector, useDispatch } from 'react-redux';

const Mypage = () => {
  const [userInformation, setUserInformation] = useState('');
  const [loading, setLoading] = useState(true);
  const [redirect, setRedirect] = useState(false);
  const dispatch = useDispatch();

  const selectedKakaoAuth = localStorage.getItem('isKakao');

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

    fetch(`${process.env.REACT_APP_HOST}/mypage`, requestOptions)
      .then(response => response.json())
      .then(result => {
        setUserInformation(result);
        setLoading(false);
      });
  }, []);

  const logout_user = () => {
    const shouldLogout = window.confirm('로그아웃 하시겠습니까?');
    if (shouldLogout) {
      localStorage.removeItem('isKakao');
      if (selectedKakaoAuth) {
        dispatch(kakao_logout());
        setRedirect(true);
      } else {
        logout();
        setRedirect(true);
      }
    }
  };

  if (loading) return;
  return (
    <Container>
      <InformationTitle>나의 정보</InformationTitle>

      <MypageInformation userInformation={userInformation} />
      <MypageVoteList />
      <MypageCreateList />
      <MypageLikeList />

      <LogoutContainer>
        <LogOut onClick={logout_user} style={{ cursor: 'pointer' }}>
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
  background-color: ${props => props.theme.colors.blueBgColor};
`;

const InformationTitle = styled.h1`
  font-family: 'GongGothicMedium';
  font-size: 28px;
  margin: 20px auto;
`;

const LogoutContainer = styled.div`
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
