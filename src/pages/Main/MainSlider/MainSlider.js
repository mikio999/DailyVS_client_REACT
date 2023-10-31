import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ArrowLeft, ArrowRight } from '../../../components/Atoms/Buttons';
import MainSliderCard from './MainSliderCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ReactModal from 'react-modal';
import DeleteBtn from '../../../components/Atoms/DeleteBtn';
import SeeAll from './SeeAll';

function MainSlider({ title, list }) {
  const [gridList, setGridList] = useState([]);
  const [allList, setAllList] = useState([]);

  const [modalOpened, setModalOpened] = useState(false);

  useEffect(() => {
    if (list.length > 0) {
      setAllList(list);
      const slicedList = list.slice(0, 10);
      setGridList(slicedList);
    }
  }, [list]);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 4,
      slidesToSlide: 3,
    },
    mobile: {
      breakpoint: { max: 767, min: 400 },
      items: 3,
      slidesToSlide: 1,
    },
    mobile2: {
      breakpoint: { max: 399, min: 200 },
      items: 2,
      slidesToSlide: 1,
    },
  };

  const MovingContainer = () => {
    console.log('card', gridList);
    return (
      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={3000}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
        partialVisible={false}
        pauseOnHover
        arrows={false}
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside
        customButtonGroup={<CustomButtonGroupAsArrows />}
        style={{ paddingTop: 20, paddingBottom: 20 }}
      >
        {gridList.length > 0 &&
          gridList.map(card => (
            <MainSliderCard
              key={card.id}
              id={card.id}
              title={card.title}
              thumbnail={card.thumbnail}
            />
          ))}
      </Carousel>
    );
  };
  const CustomButtonGroupAsArrows = ({ next, previous }) => (
    <div
      style={{
        position: 'absolute',
        right: 20,
        bottom: '100%',
        display: 'flex',
        gap: 5,
      }}
    >
      <ArrowLeft onClick={() => previous()} />
      <ArrowRight onClick={() => next()} />
    </div>
  );
  const closeModal = () => {
    setModalOpened(false);
  };
  return (
    <>
      <ReactModal
        isOpen={modalOpened}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        onRequestClose={closeModal}
        preventScroll={true}
        style={{
          overlay: {
            zIndex: 2000,
          },
        }}
      >
        <DeleteBtn onClick={closeModal} />
        <SeeAll data={allList} />
      </ReactModal>
      <Header>
        <div>
          <h2 style={{ fontSize: 24, fontWeight: 900 }}>{title}</h2>
          <span
            onClick={() => {
              setModalOpened(true);
            }}
          >
            전체보기
          </span>
        </div>
      </Header>

      <div
        style={{
          position: 'relative',
        }}
      >
        <MovingContainer />
      </div>
    </>
  );
}

const Header = styled.div`
  display: flex;
  padding: 20px 20px 0 20px;
  margin-top: 20px;
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

    padding-left: 20px;
  }
  & > div:hover span {
    font-size: 18px;
  }
`;

export default MainSlider;
