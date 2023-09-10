import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LoginNav = () => {
  return (
    <LoginNavContainer>
      <NavBackLogo to="/">
        <BackImg src="/images/LoginNav/left_page.png" />
      </NavBackLogo>
    </LoginNavContainer>
  );
};

export default LoginNav;

const LoginNavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 10vh;
  margin: 0 auto;
  background-color: ${props => props.theme.colors.pinkBgColor};
`;

const BackImg = styled.img`
  width: 40px;
`;

const NavBackLogo = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: auto;
  margin-left: 30px;
  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }
`;
