import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import 'swiper/swiper-bundle.min.css';
import theme from '../../styles/theme';
import MainHero from './MainHero/MainHero';
import { MainSliderSideLeft, MainSliderSideRight } from './MainSlider/MainSide';
import MainSlider from './MainSlider/MainSlider';
import MainPromotion from './MainPromotion/MainPromotion';

const Main = () => {
  const [loading, setLoading] = useState(true);
  const [newPolls, setNewPolls] = useState([]);
  const [hotPolls, setHotPolls] = useState([]);
  const [agePolls, setAgePolls] = useState([]);
  const [genderPolls, setGenderPolls] = useState([]);
  const [mbtiPolls, setMbtiPolls] = useState([]);
  const [todayPoll, setTodayPoll] = useState({});

  useEffect(() => {
    //메타 태그
    document.title = 'Daily VS';
    const ogUrlTag = document.querySelector('meta[property="og:url"]');
    if (ogUrlTag) {
      ogUrlTag.content = `https://daily-vs.com/`;
    }
    const ogImageTag = document.querySelector('meta[property="og:image"]');
    ogImageTag.content = 'https://ifh.cc/v-hbs61J.png'; // 여기에 적절한 이미지 URL을 가져와 설정
    const ogTitleTag = document.querySelector('meta[property="og:title"]');
    if (ogTitleTag) {
      ogTitleTag.content = 'DAILY VS';
    }
    const ogDescriptionTag = document.querySelector(
      'meta[property="og:description"]',
    );
    if (ogDescriptionTag) {
      ogDescriptionTag.content =
        'INTP인 그 사람은 뭘 골랐을까? MBTI에 따른 밸런스 게임 통계 사이트'; // 여기에 적절한 이미지 URL을 가져와 설정
    }
    fetch(`${process.env.REACT_APP_HOST}/`)
      .then(response => response.json())
      .then(result => {
        setNewPolls(result?.polls);
        setHotPolls(result?.hot_polls);
        setAgePolls(result?.age_polls);
        setGenderPolls(result?.gender_polls);
        setMbtiPolls(result?.mbti_polls);
        setTodayPoll(result?.today_poll);
        setLoading(false);
      })
      .catch(error => {
        console.log('client: 값 받기 실패', error);
      });
  }, []);

  const [width, setWidth] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    setWidth(ref.current.clientWidth);
  }, [width]);

  return (
    <Container style={{ overflowX: 'hidden' }}>
      <MainPromotion />
      <MainHero data={todayPoll} />
      <MainSliderContainer>
        {width < 1200 ? null : <MainSliderSideLeft />}
        <div className="mainSlider-wrapper" ref={ref}>
          {newPolls.length > 0 && (
            <MainSlider title="NEW! 새로 올라온 VS" list={newPolls} />
          )}
          {hotPolls.length > 0 && (
            <MainSlider title="요즘 핫🔥한 VS" list={hotPolls} />
          )}
          {mbtiPolls.length > 0 && (
            <MainSlider title="MBTI가 있는" list={mbtiPolls} />
          )}
          {agePolls.length > 0 && <MainSlider title="나이" list={agePolls} />}
          {genderPolls.length > 0 && (
            <MainSlider title="성별" list={genderPolls} />
          )}
        </div>
        {width < 1200 ? null : <MainSliderSideRight />}
      </MainSliderContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.blueBgColor};
`;

const MakeVoteBanner = styled.div`
  width: min(100%, 1200px);
  background-color: ${theme.colors.lightGrayColor};
  display: flex;
  justify-content: center;
  border-bottom: 1px solid ${theme.colors.placeholder};

  & > div {
    padding: 10px 20px;
    width: min(100%, 500px);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media screen and (min-width: 800px) {
    display: none;
  }
`;

const MainSliderContainer = styled.div`
  display: flex;
  margin: 0 auto;
  width: 100%;

  & > .mainSlider-wrapper {
    width: min(100%, 1200px);
  }
  & > .mainSlider-side {
    flex: 1;
    position: relative;
    & img {
      position: absolute;
    }
  }
  & > .mainSlider-side img {
    transition: 5s;
    z-index: 20;
  }
  & > .mainSlider-side img:hover {
    scale: 2;
  }
  & > .mainSlider-left img:nth-child(1),
  & > .mainSlider-right img:nth-child(4) {
    animation: SideFloating1 30s ease-in-out infinite;
  }
  & > .mainSlider-left img:nth-child(2) {
    animation: SideFloating2 30s ease-in-out infinite;
  }
  & > .mainSlider-left img:nth-child(3) {
    animation: SideFloating3 30s ease-in-out infinite;
  }
  & > .mainSlider-left img:nth-child(4) {
    animation: SideFloating4 30s ease-in-out infinite;
  }
  & > .mainSlider-right img:nth-child(1) {
    animation: SideFloating5 30s ease-in-out infinite;
  }
  & > .mainSlider-right img:nth-child(2) {
    animation: SideFloating6 30s ease-in-out infinite;
  }
  & > .mainSlider-right img:nth-child(3) {
    animation: SideFloating7 30s ease-in-out infinite;
  }
  & > .mainSlider-right img:nth-child(5) {
    animation: SideFloating8 30s ease-in-out infinite;
  }
  @keyframes SideFloating1 {
    0%,
    100% {
      width: 50px;
      left: 50%;
      top: 30%;
    }
    20%,
    80% {
      width: 60px;
      left: 10%;
      top: 40%;
    }
    40% {
      width: 50px;
      left: 70%;
      top: 45%;
    }
    60% {
      width: 60px;
      left: 40%;
      top: 40%;
    }
  }
  @keyframes SideFloating2 {
    0%,
    100% {
      width: 80px;
      left: 20%;
      top: 55%;
      transform: rotate(40deg);
    }
    20%,
    80% {
      width: 70px;
      left: 60%;
      top: 60%;
    }
    40% {
      width: 60px;
      left: 40%;
      top: 65%;
    }
    60% {
      width: 50px;
      left: 50%;
      top: 55%;
    }
  }
  @keyframes SideFloating3 {
    0%,
    100% {
      width: 30px;
      left: 10%;
      top: 10%;
    }
    20%,
    80% {
      width: 30px;
      left: 20%;
      top: 15%;
    }
    40%,
    60% {
      width: 20px;
      left: 40%;
      top: 20%;
    }
    50% {
      width: 20px;
      left: 60%;
      top: 25%;
    }
  }
  @keyframes SideFloating4 {
    0%,
    100% {
      width: 30px;
      left: 70%;
      top: 70%;
    }
    20%,
    80% {
      width: 30px;
      left: 65%;
      top: 75%;
    }
    40%,
    60% {
      width: 40px;
      left: 60%;
      top: 80%;
    }
    50% {
      width: 40px;
      left: 55%;
      top: 85%;
    }
  }
  @keyframes SideFloating5 {
    0%,
    100% {
      width: 30px;
      left: 70%;
      top: 35%;
    }
    20%,
    80% {
      width: 30px;
      left: 65%;
      top: 30%;
    }
    40%,
    60% {
      width: 40px;
      left: 60%;
      top: 25%;
    }
    50% {
      width: 40px;
      left: 55%;
      top: 20%;
    }
  }
  @keyframes SideFloating6 {
    0%,
    100% {
      width: 45px;
      left: 10%;
      top: 50%;
    }
    20%,
    80% {
      width: 50px;
      left: 14%;
      top: 53%;
    }
    40%,
    60% {
      width: 50px;
      left: 18%;
      top: 56%;
    }
    50% {
      width: 45px;
      left: 22%;
      top: 60%;
    }
  }
  @keyframes SideFloating7 {
    0%,
    100% {
      width: 45px;
      left: 10%;
      top: 5%;
      transform: rotate(20deg);
    }
    20%,
    80% {
      width: 50px;
      left: 14%;
      top: 7%;
    }
    40%,
    60% {
      width: 50px;
      left: 18%;
      top: 10%;
    }
    50% {
      width: 45px;
      left: 22%;
      top: 15%;
    }
  }
  @keyframes SideFloating8 {
    0%,
    100% {
      width: 60px;
      left: 70%;
      top: 90%;
      transform: rotate(50deg);
    }
    20%,
    80% {
      width: 65px;
      left: 66%;
      top: 86%;
    }
    40%,
    60% {
      width: 67px;
      left: 60%;
      top: 83%;
    }
    50% {
      width: 70px;
      left: 56%;
      top: 80%;
    }
  }
`;

const MainPage = styled.h1`
  color: black;
`;

export default Main;
