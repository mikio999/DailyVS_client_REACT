import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme';
import { ArrowLeft, ArrowRight } from '../../../components/Atoms/Buttons';

function MainSlider({ title }) {
  return (
    <>
      <Header>
        <div>
          <h2 style={{ fontSize: 24, fontWeight: 900 }}>{title}</h2>
          <span>더보기</span>
        </div>
        <div>
          <ArrowLeft />
          <ArrowRight />
        </div>
      </Header>
      <Contents>
        <div>
          <div>
            <MainSliderCard />
            <MainSliderCard />
            <MainSliderCard />
            <MainSliderCard />
            <MainSliderCard />
            <MainSliderCard />
            <MainSliderCard />
            <MainSliderCard />
            <MainSliderCard />
            <MainSliderCard />
            <div />
            <div />
          </div>
        </div>
      </Contents>
    </>
  );
}

const Header = styled.div`
  display: flex;
  padding: 20px 20px 10px 20px;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  & > div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  & > div span {
    transition: 0.3s;
    opacity: 0;
    visibility: hidden;
    padding-left: 20px;
  }
  & > div:hover span {
    opacity: 1;
    visibility: visible;
  }
  & img {
    transition: 0.3s;
  }
  & img:hover {
    scale: 1.1;
  }
`;
const Contents = styled.div`
  width: 100%;
  height: 180px;
  position: relative;
  overflow: hidden;
  &::before {
    z-index: 10;
    width: 20px;
    height: 100%;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }
  &::after {
    z-index: 10;
    width: 20px;
    height: 100%;
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    background: linear-gradient(
      to left,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }
  & > div {
    flex: 1;
    height: 100%;
    overflow-x: scroll;
    padding: 10px 20px;
  }
  & > div > div {
    display: grid;
    grid-template-columns: repeat(12, 200px);
    height: 100%;
    grid-gap: 10px;
  }
`;
const MainSliderCard = styled.div`
  height: 100%;
  background-color: ${theme.colors.lightGrayColor};
  border-radius: 10px;
  transition: 0.3s;
  &:hover {
    scale: 1.05;
  }
`;

export default MainSlider;
