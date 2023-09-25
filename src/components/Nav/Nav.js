import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useAuth } from '../../AuthContext';

const Nav = () => {
  const { user, logout } = useAuth();
  return (
    <NavContainer>
      <NavList>
        {user ? (
          <NavLink2 to="/">
            <img src="images/Nav/Unlogged.png" />
            마이페이지
          </NavLink2>
        ) : (
          <NavLink1 to="/login">
            {' '}
            <img src="images/Nav/Logged.png" />
            로그인
          </NavLink1>
        )}
        <NavLogo to="/">
          <LogoImg src="/images/Nav/Row.png" />
        </NavLogo>
        <NavFortune to="/fortune">
          <img src="/images/Fortune/Cookie.png" />
        </NavFortune>
      </NavList>
    </NavContainer>
  );
};

export default Nav;

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 10vh;
  margin: 0 auto;
  background: linear-gradient(135deg, #e0e9ff, #f5e8fc, #ffdbe3);
`;

const NavList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  font-size: 15px;
`;

const NavLink1 = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'GongGothicLight';
  font-size: 18px;
  color: #17355a;
  &:hover {
    opacity: 0.9;
    cursor: pointer;
    text-decoration: none;
  }

  & img {
    width: 30px;
    margin-right: 10px;
  }
`;

const NavLink2 = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'GongGothicLight';
  font-size: 18px;
  color: #ff495a;
  &:hover {
    opacity: 0.9;
    cursor: pointer;
    text-decoration: none;
  }

  & img {
    width: 30px;
    margin-right: 10px;
  }
`;

const NavLogo = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
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
`;
