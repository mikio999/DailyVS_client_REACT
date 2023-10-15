import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ArrowLeft, ArrowRight } from '../../../components/Atoms/Buttons';
import MainSliderCard from './MainSliderCard';

function MainSlider({ title, list }) {
  const [gridList, setGridList] = useState([]);

  const containerWidth = 200 * list.length + 10 * (list.length - 1) + 20;
  let slideUnit;
  if (containerWidth === 1200) {
    slideUnit = Math.floor(containerWidth / 2);
  } else {
    slideUnit = Math.floor(containerWidth / 3);
  }

  useEffect(() => {
    if (list.length > 0) {
      setGridList(list);
    }
  }, [list]);

  // slider 구현
  const [slidepx, setSlidepx] = useState(0);
  const toPrev = () => {
    if (slidepx < 0) setSlidepx(slidepx + slideUnit);
  };
  const toNext = () => {
    slidepx > -1200 && setSlidepx(slidepx - slideUnit);
  };
  useEffect(() => {}, [slidepx]);

  const MovingContainer = () => {
    return (
      <InnerContents slidepx={slidepx} listNum={list.length}>
        {gridList.length > 0 &&
          gridList.map(card => (
            <MainSliderCard
              key={card.id}
              title={card.title}
              thumbnail={card.thumbnail}
            />
          ))}
      </InnerContents>
    );
  };
  return (
    <>
      <Header>
        <div>
          <h2 style={{ fontSize: 24, fontWeight: 900 }}>{title}</h2>
          <span>더보기</span>
        </div>
        <div>
          <ArrowLeft onClick={toPrev} opacity={slidepx === 0 ? 0.5 : 1} />
          <ArrowRight
            onClick={toNext}
            opacity={slidepx === -containerWidth ? 0.5 : 1}
          />
        </div>
      </Header>
      <Contents>
        <div>
          <MovingContainer />
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
`;
const Contents = styled.div`
  width: 100%;
  height: 180px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s;
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
    padding: 10px 20px;
    /* overflow-x: scroll; */
    transition: all 0.3s;
  }
`;
const InnerContents = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.listNum}, 200px);
  height: 100%;
  grid-gap: 10px;
  transition: all 0.3s;
  transform: translateX(${props => props.slidepx}px);
`;

export default MainSlider;
