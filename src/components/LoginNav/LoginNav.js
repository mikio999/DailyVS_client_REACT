import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LoginNav = () => {
  return (
    <Container>
      <LoginNavContainer>
        <NavBackLogo to="/">
          <BackImg src={require('../../assets/LoginNav/left_page.png')} />
        </NavBackLogo>
      </LoginNavContainer>
    </Container>
  );
};

export default LoginNav;
const Container = styled.div`
  background-color: ${props => props.theme.colors.pinkBgColor};
`;

const LoginNavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 10vh;
  margin: 0 auto;
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
