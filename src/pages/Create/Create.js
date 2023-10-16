import React, { useState } from 'react';
import { useAuth } from '../../AuthContext';
import DetailCard from '../Detail/Detail/DetailCard';
import styled from 'styled-components';
import CreateTTC from './CreateTTC';
import Carousel from 'react-multi-carousel';
import MintButtonSubmit, { MintButton } from '../../components/Atoms/Buttons';

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
    choice: '',
  });

  const CustomButtonGroup = ({ next, previous }) => (
    <ButtonGroup>
      <MintButton content={'이전'} onClick={() => previous()} />
      <MintButton content={'다음'} onClick={() => next()} />
    </ButtonGroup>
  );
  return (
    <Container>
      <Carousel
        responsive={responsive}
        autoPlay={false}
        swipeable={false}
        draggable={false}
        showDots={true}
        infinite={false}
        partialVisible={false}
        arrows={false}
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside
        customButtonGroup={<CustomButtonGroup />}
      >
        <CreateTTC formData={formData} setFormData={setFormData} />
        <CreateTTC formData={formData} setFormData={setFormData} />
        <CreateTTC formData={formData} setFormData={setFormData} />
      </Carousel>
    </Container>
  );
}

const Container = styled.div`
  width: min(100%, 1200px);
  height: 500px;
  margin: 0 auto 150px;
  position: relative;
`;
const ButtonGroup = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -120px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: min(100%, 400px);
  height: 56px;
  & > div {
    flex: 1;
  }
`;
export default Create;
