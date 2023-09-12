import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MainCarousel from './MainCarousel/MainCarousel';
import MainGrid from './MainGrid/MainGrid';
import 'swiper/swiper-bundle.min.css';

const Main = () => {
  const [loading, setLoading] = useState(true);
  const [apiList, setApiList] = useState('');

  useEffect(() => {
    fetch('/data/vote_list.json')
      .then(response => response.json())
      .then(result => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/`)
      .then(response => response.json())
      .then(result => {
        setApiList(result);
        console.log(result);
      });
  }, []);

  return (
    <Container>
      <MainPage>
        <MainCarousel loading={loading} />
        <MainGrid loading={loading} />
        {/* <MainApi>{apiList}</MainApi> */}
      </MainPage>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  margin: 30px auto 30px auto;
`;

const MainPage = styled.h1`
  color: black;
`;

const MainApi = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  margin: 30px auto 30px auto;
`;

export default Main;
