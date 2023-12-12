import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <FooterContainer>
      <FirstSection>
        <Paragraph>@2023 project Daily VS.</Paragraph>
        <Paragraph>
          - Daily VS는 고려대, 중앙대, 이화여대, 연세대 학생들이 만든 투표 통계
          사이트입니다.
        </Paragraph>
        <Paragraph>
          - 본 서비스는 피로그래밍 19기 공식 프로젝트에서 파생되었습니다.
        </Paragraph>
        <Paragraph>
          - 서비스 이용 문의는 공식 인스타그램, 카카오톡을 통해 문의 바랍니다.
        </Paragraph>
        <Terminology>
          <TermLink
            to="https://uneven-tern-bb3.notion.site/22113e080e344ae6ada2d11e5883a363"
            target="_blank"
          >
            서비스 이용약관
          </TermLink>
          |
          <TermLink
            to="https://uneven-tern-bb3.notion.site/22113e080e344ae6ada2d11e5883a363"
            target="_blank"
          >
            개인정보처리방침
          </TermLink>
        </Terminology>
      </FirstSection>
      <SecondSection>
        <FooterMenuSection>presented by</FooterMenuSection>
        <FooterTeamLogo src={require('../../assets/Footer/team_logo.png')} />
        <SnsSection>
          <SnsLink to="https://pirogramming.com/" target="_blank">
            <SnsImg src={require('../../assets/Footer/pirologoF.png')} />
          </SnsLink>
          |
          <SnsLink
            to="https://www.instagram.com/dailyvs_official/"
            target="_blank"
          >
            <SnsImg src={require('../../assets/Footer/instagramF.png')} />
          </SnsLink>
          |
          <SnsLink to="https://open.kakao.com/o/ssCgwwXf" target="_blank">
            <SnsImg src={require('../../assets/Footer/kakao-talkF.png')} />
          </SnsLink>
        </SnsSection>
      </SecondSection>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  justify-content: center;
  align-items: center;
  width: 100vw;
  color: gray;
  padding: 20px;
  background-color: ${props => props.theme.colors.pinkBgColor};
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

const FooterTeamLogo = styled.img`
  width: 80px;
`;

const FooterMenuSection = styled.div`
  font-size: 16px;
`;

const FirstSection = styled.div`
  font-size: 13px;
  margin-left: 10px;
  word-wrap: break-word;
`;

const SecondSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Paragraph = styled.div`
  margin-top: 5px;
`;

const SnsSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
`;

const SnsImg = styled.img`
  width: 25px;
  margin: 10px;
`;

const SnsLink = styled(Link)``;

const Terminology = styled.div`
  margin-top: 20px;
`;

const TermLink = styled(Link)`
  margin-left: 10px;
  margin-right: 10px;
`;
