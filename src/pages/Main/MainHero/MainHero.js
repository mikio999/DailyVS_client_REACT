import React from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme';
import { Link } from 'react-router-dom';

function MainHero() {
  return (
    <Wrapper>
      <Container>
        <DailyVS />
        <HeroMenuContainer>
          <FortuneContainer to="/fortune" class="heroMenu">
            <div class="fortuneHeader">
              <h2>오늘의 포춘쿠키 뽑으러 가기</h2>
            </div>
            <div class="fortuneIcon">
              <img src="/images/Fortune/Cookie.png" alt="포춘쿠키" />
            </div>
          </FortuneContainer>
          <MakeVoteContainer class="heroMenu">
            <div class="makeVoteHeader">
              <h2>투표 만들러 가기</h2>
            </div>
          </MakeVoteContainer>
        </HeroMenuContainer>
      </Container>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #bbdcf1;
`;
const Container = styled.div`
  width: min(100%, 1200px);
  height: 500px;
  display: flex;
`;
const DailyVS = styled.div`
  flex: 1;
  background-color: blue;
`;

const HeroMenuContainer = styled.div`
  width: 350px;
  background-color: ${theme.colors.darkbluePrimaryColor};
  padding: 16px;
  grid-gap: 16px;
  display: grid;
  grid-template-rows: 1fr 1fr;
  & > .heroMenu {
    width: 100%;
    cursor: pointer;
  }
`;
const FortuneContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  /* text-decoration: none; */
  &:hover h2 {
    text-decoration: none !important;
    color: black;
  }
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & .fortuneHeader {
    background-color: #ffeef0;
    height: 30%;
    & h2 {
      font-size: 20px;
    }
  }
  & .fortuneIcon {
    background-color: #ebecff;
    height: 70%;
    & img {
      width: 140px;
    }
  }
`;
const MakeVoteContainer = styled(Link)`
  background: url(/images/kakao-thumbnail.png);
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  & .makeVoteHeader {
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
  }
  &:hover h2 {
    color: black;
  }
`;
export default MainHero;
