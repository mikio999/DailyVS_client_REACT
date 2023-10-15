import React from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme';
import { Link } from 'react-router-dom';
import MintButton from '../../../components/Atoms/Buttons';

function MainHero() {
  return (
    <Wrapper>
      <Container>
        <DailyVS>
          <DailyVSText>
            <h2>오늘의 VS</h2>
            <p>다시 돌아온 계절 대전!</p>
            <p>여름 vs 겨울</p>
            <MintButton content="지금 바로 투표하러 가기 👉" />
          </DailyVSText>
        </DailyVS>
        <HeroMenuContainer>
          <FortuneContainer to="/fortune" className="heroMenu">
            <div className="fortuneHeader">
              <h2>오늘의 포춘쿠키 뽑으러 가기</h2>
            </div>
            <div className="fortuneIcon">
              <img src="/images/Fortune/Cookie.png" alt="포춘쿠키" />
            </div>
          </FortuneContainer>
          <MakeVoteContainer className="heroMenu">
            <div className="makeVoteHeader">
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
  background-color: aliceblue;
  position: relative;
`;

const DailyVSText = styled.div`
  position: absolute;
  bottom: 16px;
  left: 16px;
  width: 50%;
  /* height: 60%; */
  background-color: rgba(0, 0, 0, 0.7);
  padding: 16px 16px 32px 16px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  text-align: center;
  & h2 {
    font-size: 36px;
    margin: 16px 0;
  }
  & p {
    font-size: 24px;
    margin: 8px;
  }
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
  text-decoration: none !important;
  overflow: hidden;
  transition: 0.3s;
  border-radius: 10px;
  &:hover {
    border-radius: 20px;
  }
  &:hover h2 {
    color: black;
  }

  & .fortuneHeader {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffeef0;
    height: 30%;
    & h2 {
      font-size: 20px;
    }
  }
  & .fortuneIcon {
    background-color: #ebecff;
    height: 70%;
    position: relative;

    & img {
      width: 140px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      animation: AnimatedFortune 3s ease-in-out infinite;
    }
  }

  @keyframes AnimatedFortune {
    0%,
    100% {
      transform: translate(-50%, -45%);
    }
    50% {
      transform: translate(-50%, -55%);
    }
  }
`;

const MakeVoteContainer = styled(Link)`
  background: url(/images/kakao-thumbnail.png);
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  text-decoration: none !important;
  transition: 0.3s;
  border-radius: 10px;
  &:hover {
    border-radius: 20px;
  }
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
