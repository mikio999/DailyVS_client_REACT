import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <NavContainer>
      <NavList>
        <NavLogin to="/login">로그인</NavLogin>
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
  background-color: ${props => props.theme.colors.blueBgColor};
`;

const NavList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  font-size: 15px;
`;

const NavLogin = styled(Link)`
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
