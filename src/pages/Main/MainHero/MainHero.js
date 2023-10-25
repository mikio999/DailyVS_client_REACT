import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme';
import { Link } from 'react-router-dom';
import useClickEffect from '../../../utils/hooks/useClickEffect';

function MainHero() {
  const [btnLeftIdx, setBtnLeftIdx] = useState(0);
  const [btnRightIdx, setBtnRightIdx] = useState(0);
  const buttonLeft = [
    '/images/TodayVS/buttonBlue.png',
    '/images/TodayVS/buttonBlue_pressed.png',
  ];
  const buttonRight = [
    '/images/TodayVS/buttonRed_pressed.png',
    '/images/TodayVS/buttonRed.png',
  ];
  const handleBtnLeftChange = () => {
    setBtnLeftIdx(prev => (prev === 0 ? 1 : 0));
  };
  const handleBtnRightChange = () => {
    setBtnRightIdx(prev => (prev === 0 ? 1 : 0));
  };
  useEffect(() => {
    const Linterval = setInterval(handleBtnLeftChange, 1000);
    return () => clearInterval(Linterval);
  }, []);
  useEffect(() => {
    const Rinterval = setInterval(handleBtnRightChange, 1000);
    return () => clearInterval(Rinterval);
  }, []);
  const btnLeft = useRef(null);
  const btnRight = useRef(null);
  const {
    handleBtnMD: handleLBtnMD,
    handleBtnMU: handleLBtnMU,
    handleBtnME: handleLBtnME,
    handleBtnML: handleLBtnML,
  } = useClickEffect(btnLeft);
  const {
    handleBtnMD: handleRBtnMD,
    handleBtnMU: handleRBtnMU,
    handleBtnME: handleRBtnME,
    handleBtnML: handleRBtnML,
  } = useClickEffect(btnRight);
  return (
    <Wrapper>
      <Container>
        <DailyVS>
          <div className="tag">오늘의 VS</div>
          <Title>다시 돌아온 계절 대전!</Title>
          <VS>
            <div>
              <img src="/images/Letters/v.svg" alt="V of VS" />
            </div>
            <div>
              <img src="/images/Letters/s.svg" alt="S of VS" />
            </div>
          </VS>
          <ButtonPress>
            <div
              className="buttonLeft"
              ref={btnLeft}
              onMouseDown={handleLBtnMD}
              onMouseUp={handleLBtnMU}
              onMouseEnter={handleLBtnME}
              onMouseLeave={handleLBtnML}
            >
              <img src={buttonLeft[btnLeftIdx]} />
            </div>
            <div
              className="buttonRight"
              ref={btnRight}
              onMouseDown={handleRBtnMD}
              onMouseUp={handleRBtnMU}
              onMouseEnter={handleRBtnME}
              onMouseLeave={handleRBtnML}
            >
              <img src={buttonRight[btnRightIdx]} />
            </div>
          </ButtonPress>
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
          <MakeVoteContainer to="/create" className="heroMenu">
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 30%;
    bottom: 0;
    left: 0;
    background-color: ${theme.colors.mintSecondaryColor};
  }
  & > .tag {
    position: absolute;
    background-color: ${theme.colors.lightGrayColor};
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom-right-radius: 15px;
    padding: 10px 20px;
    font-weight: 900;
  }
`;
const Title = styled.div`
  padding: 5px 20px;
  margin-bottom: 100px;
  background-color: ${theme.colors.darkbluePrimaryColor};
  border-radius: 10px;
  border: 2px solid ${theme.colors.mintSecondaryColor};
  color: white;
  text-align: center;
  font-size: 20px;
`;
const ButtonPress = styled.div`
  display: flex;
  cursor: pointer;
  z-index: 10;
  & div {
    transition: 0.1s;
  }
  & img {
    width: 130px;
    z-index: 100;
  }
`;
const VS = styled.div`
  position: relative;
  width: 160px;
  height: 160px;

  & > div {
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: absolute;
  }
  & > div:first-child {
    top: 0;
    left: 0;
  }
  & > div:last-child {
    right: 0;
    bottom: 0;
  }
  & > div::before {
    position: absolute;
    content: '';
    background-color: rgba(167, 220, 221, 0.5);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  & > div:last-child:before {
    background-color: rgba(69, 124, 158, 0.65);
  }
  & > div > img {
    z-index: 5;
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
  @media screen and (max-width: 800px) {
    display: none;
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
