import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import MainCarousel from './MainCarousel/MainCarousel';
import MainGrid from './MainGrid/MainGrid';
import 'swiper/swiper-bundle.min.css';
import MintButton from '../../components/Atoms/Buttons';
import theme from '../../styles/theme';
import MainHero from './MainHero/MainHero';
import { MainSliderSideLeft, MainSliderSideRight } from './MainSlider/MainSide';
import MainSlider from './MainSlider/MainSlider';

const Main = () => {
  const [loading, setLoading] = useState(true);
  const [gridList, setGridList] = useState('');

  // useEffect(() => {
  //   fetch(`http://127.0.0.1:8000/api/`)
  //     .then(response => response.json())
  //     .then(result => {
  //       setLoading(false);
  //     });
  // }, []);

  // useEffect(() => {
  //   fetch(`http://127.0.0.1:8000/api/`)
  //     .then(response => response.json())
  //     .then(result => {
  //       setApiList(result);
  //       console.log(result);
  //     });
  // }, []);

  useEffect(() => {
    fetch('/data/vote_list.json')
      .then(response => response.json())
      .then(result => {
        setLoading(false);
        setGridList(result);
      });
  }, []);

  const [width, setWidth] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    setWidth(ref.current.clientWidth);
  }, [width]);

  return (
    <Container>
      <MakeVoteBanner>
        <div>
          <span>겨루고 싶은 VS가 있다면? 👉 👉</span>
          <MintButton content="투표 만들러 가기" />
        </div>
      </MakeVoteBanner>
      <MainHero />
      <MainSliderContainer>
        {width < 1200 ? null : <MainSliderSideLeft />}
        <div className="mainSlider-wrapper" ref={ref}>
          <MainSlider title="새로 올라온 VS" />
          <MainSlider title="ISTP가 주목하는 VS" />
          <MainSlider title="막상막하! 요즘 핫한 VS" />
          <MainSlider title="MZ가 주목하는 VS" />
        </div>
        {width < 1200 ? null : <MainSliderSideRight />}
      </MainSliderContainer>

      {/* <MainCarousel loading={loading} /> */}
      {/* <MainGrid loading={loading} gridList={gridList} /> */}
      {/* <MainGrid loading={loading} gridList={gridList} /> */}
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
  & > div {
    padding: 10px 20px;
    width: min(100%, 500px);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
const MainSliderContainer = styled.div`
  display: flex;
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
  & > .mainSlider-left img:nth-child(2),
  & > .mainSlider-right img:nth-child(2) {
    animation: SideFloating2 30s ease-in-out infinite;
  }
  & > .mainSlider-left img:nth-child(3),
  & > .mainSlider-right img:nth-child(3) {
    animation: SideFloating3 30s ease-in-out infinite;
  }
  & > .mainSlider-left img:nth-child(4),
  & > .mainSlider-right img:nth-child(1) {
    animation: SideFloating4 30s ease-in-out infinite;
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
`;

const MainPage = styled.h1`
  color: black;
`;

export default Main;
