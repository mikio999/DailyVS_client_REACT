import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import SearchBox from './SearchBox';
import { setKakao } from '../../actions/actions';
import { connect } from 'react-redux';
import {
  checkAuthenticated,
  load_user,
  logout,
  kakao_logout,
} from '../../actions/auth';
import { useDispatch } from 'react-redux';

const Nav = ({ checkAuthenticated, load_user, logout, isAuthenticated }) => {
  const dispatch = useDispatch();
  const [redirect, setRedirect] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleDispatch = selectedKakao => {
    dispatch(setKakao(selectedKakao));
  };

  handleDispatch(userInfo?.is_kakao);

  useEffect(() => {
    checkAuthenticated();
    load_user();
  }, []);

  useEffect(() => {
    setLoading(true);
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

    fetch(`${process.env.REACT_APP_HOST}/mypage`, {
      headers: config.headers,
    })
      .then(response => {
        if (response.status === 403) {
          window.location.reload();
          return;
        }
        return response.json();
      })
      .then(result => {
        setUserInfo(result.user);
        setLoading(false);
      });
  }, []);

  const logout_user = () => {
    const is_kakao = localStorage.getItem('isKakao');

    const shouldLogout = window.confirm('로그아웃 하시겠습니까?');
    if (shouldLogout) {
      document.cookie =
        'sessionid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

      localStorage.removeItem('isKakao');
      if (is_kakao) {
        localStorage.removeItem('token');
        dispatch(kakao_logout());

        setRedirect(true);
      } else {
        logout();
        setRedirect(true);
      }
    }
  };

  return (
    <>
      <Marquee
        style={{
          background: 'linear-gradient(135deg, #e0e9ff, #f5e8fc, #ffdbe3)',
          cursor: 'unset',
        }}
      >
        <InnerMarquee>
          <span>매일매일의 즐거움 Daily VS</span>
          {userInfo && userInfo?.mbti ? (
            <span>{`${userInfo?.mbti}인 당신은 무엇을 골랐을까?`}</span>
          ) : (
            <span>INFP인 그녀는 무엇을 골랐을까?</span>
          )}
          <span>매일매일의 즐거움 Daily VS</span>
          <span>INFP인 그녀는 무엇을 골랐을까?</span>
          <span>매일매일의 즐거움 Daily VS</span>
          {userInfo && userInfo.mbti ? (
            <span>{`${userInfo.mbti}인 당신은 무엇을 골랐을까?`}</span>
          ) : (
            <span>INFP인 그녀는 무엇을 골랐을까?</span>
          )}
          <span>매일매일의 즐거움 Daily VS</span>
        </InnerMarquee>
      </Marquee>
      <NavContainer>
        <NavList>
          {isAuthenticated ? (
            <Logout onClick={logout_user}>로그아웃</Logout>
          ) : null}
          <NavLogo to="/">
            <LogoImg src={require('../../assets/Nav/Row.png')} alt="로고" />
          </NavLogo>
          {isAuthenticated ? (
            <Logout2 onClick={logout_user}>로그아웃</Logout2>
          ) : null}
          <SearchMyPage>
            {isAuthenticated ? (
              <NavLink2 to="/my-page">
                <img
                  src={require('../../assets/Nav/Logged.png')}
                  alt="마이페이지"
                />
                <UserNickNameContainer>
                  {userInfo && <UserNickName>{userInfo.nickname}</UserNickName>}
                  님
                </UserNickNameContainer>
              </NavLink2>
            ) : (
              <NavLink1 to="/login">
                <img
                  src={require('../../assets/Nav/Unlogged.png')}
                  alt="로그인"
                />
                로그인
              </NavLink1>
            )}
          </SearchMyPage>
        </NavList>
      </NavContainer>
      <NavSearch>
        <SearchBox />
      </NavSearch>
    </>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {
  checkAuthenticated,
  load_user,
  logout,
})(Nav);

const InnerMarquee = styled.div`
  padding: 10px 0;
  display: flex;
  gap: 70px;
  padding-right: 70px;
  span {
    cursor: unset;
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: min(100%, 1200px);
  height: 10vh;
  margin: 0 auto;
`;

const NavList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 15px;
  position: relative;
  margin: 0 20px;
`;

const SearchMyPage = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  & img {
    width: 30px;
    margin-right: 5px;
  }
`;

const NavLink1 = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'GongGothicLight';
  font-size: 14px;
  color: #ff495a !important;
  &:hover {
    opacity: 0.9;
    cursor: pointer;
    text-decoration: none;
  }
`;

const NavLink2 = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  /* flex-direction: column; */
  font-family: 'GongGothicLight';
  font-size: 16px;
  color: #ff495a;
  &:hover {
    opacity: 0.9;
    cursor: pointer;
    text-decoration: none;
  }
`;

const UserNickNameContainer = styled.div`
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const UserNickName = styled.span`
  color: #457c9e;
  margin-top: 2px;
  font-size: 14px;
`;

const NavLogo = styled(Link)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
`;

const LogoImg = styled.img`
  width: 150px;
`;

const NavFortune = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }

  & img {
    width: 60px;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const NavSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.8;
  }
`;

const Logout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'GongGothicLight';
  font-size: 14px;
  color: #17355a;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const Logout2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'GongGothicLight';
  font-size: 13px;
  color: #17355a;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }

  @media screen and (min-width: 600px) {
    display: none;
  }
`;
