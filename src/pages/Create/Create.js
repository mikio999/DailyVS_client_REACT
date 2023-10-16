import React, { useState } from 'react';
import { useAuth } from '../../AuthContext';
import DetailCard from '../Detail/Detail/DetailCard';
import styled from 'styled-components';
import CreateTTC from './CreateTTC';
import Carousel from 'react-multi-carousel';
import MintButtonSubmit, { MintButton } from '../../components/Atoms/Buttons';
import axios from 'axios';
import CreateChoice from './CreateChoice';
import CreateCat from './CreateCat';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 1,
  },
};

function Create() {
  // 넘겨줄 데이터: title, content, thumbnail, category, choice, owner
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    thumbnail: '',
    category: '',
    choice: {},
  });
  const handleSubmit = e => {
    e.preventDefault();
    console.log('제출:', formData);
    // axios
    //   .post('http://localhost:3000/create', formData)
    //   .then(response => {
    //     console.log(response.data);
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
  };
  const CustomButtonGroup = ({ next, previous, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <ButtonGroup>
        {currentSlide === 0 ? null : (
          <MintButton content={'이전으로'} onClick={() => previous()} />
        )}
        {currentSlide === 2 ? (
          <MintButton as="button" content={'제출하기'} type="submit" />
        ) : (
          <MintButton content={'다음으로'} onClick={() => next()} />
        )}
      </ButtonGroup>
    );
  };
  return (
    <Container onSubmit={handleSubmit}>
      <Carousel
        responsive={responsive}
        autoPlay={false}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={false}
        partialVisible={false}
        arrows={false}
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside
        customButtonGroup={<CustomButtonGroup />}
      >
        <CreateTTC formData={formData} setFormData={setFormData} />
        <CreateChoice formData={formData} setFormData={setFormData} />
        <CreateCat formData={formData} setFormData={setFormData} />
      </Carousel>
    </Container>
  );
}

const Container = styled.form`
  width: min(100%, 1200px);
  margin: 0 auto 100px;
  position: relative;
`;
const ButtonGroup = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -70px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: min(100%, 400px);
  height: 56px;
  & > div,
  & > button {
    flex: 1;
  }
`;
export default Create;
