import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterMenuSection>presented by</FooterMenuSection>
      <FooterTeamLogo src={require('../../assets/Footer/team_logo.png')} />
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 20vh;
  margin: 0 auto;
  padding: 100px 0;
  color: gray;
  background-color: ${props => props.theme.colors.pinkBgColor};
`;

const FooterTeamLogo = styled.img`
  width: 100px;
`;

const FooterMenuSection = styled.div`
  font-size: 20px;
`;
