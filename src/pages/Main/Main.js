import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MainCarousel from './MainCarousel/MainCarousel';
import MainGrid from './MainGrid/MainGrid';
import 'swiper/swiper-bundle.min.css';
import MintButton from '../../components/Atoms/Buttons';
import theme from '../../styles/theme';
import MainHero from './MainHero/MainHero';

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
  return (
    <Container>
      <MakeVoteBanner>
        <div>
          <span>겨루고 싶은 VS가 있다면? 👉 👉</span>
          <MintButton content="투표 만들러 가기" />
        </div>
      </MakeVoteBanner>
      <MainHero />

      {/* <MainCarousel loading={loading} /> */}
      {/* <MainGrid loading={loading} gridList={gridList} /> */}
      {/* <MainGrid loading={loading} gridList={gridList} /> */}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.blueBgColor};
`;

const MakeVoteBanner = styled.div`
  width: min(100%, 1440px);
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

const MainPage = styled.h1`
  color: black;
`;

export default Main;
