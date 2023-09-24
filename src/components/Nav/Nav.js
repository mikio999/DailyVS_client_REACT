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
          <NavLink to="/" onClick={logout}>
            로그아웃
          </NavLink>
        ) : (
          <NavLink to="/login">로그인</NavLink>
        )}
        <NavLogo to="/">
          <LogoImg src="/images/Nav/Row.png" />
        </NavLogo>
        <NavFortune to="/fortune">포춘쿠키</NavFortune>
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

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    opacity: 0.6;
    cursor: pointer;
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
    opacity: 0.6;
    cursor: pointer;
  }
`;
