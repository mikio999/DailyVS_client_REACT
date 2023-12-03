import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const EventSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Container>
      <StyledSlider {...settings}>
        <div>
          <img src={require('../../../assets/MainSide/C11.png')} />
        </div>
        <div>
          <img src={require('../../../assets/MainSide/C33.png')} />
        </div>
        <div>
          {' '}
          <img src={require('../../../assets/MainSide/C22.png')} />
        </div>
      </StyledSlider>
    </Container>
  );
};
export default EventSection;

const Container = styled.div`
  display: flex;
`;

const StyledSlider = styled(Slider)`
  width: 600px;
  & img {
    width: 600px;
    height: 300px;
    object-fit: cover;
  }
  .slick-prev {
    z-index: 1;
    left: 30px;
  }

  .slick-next {
    right: 20px;
  }

  .slick-prev:before,
  .slick-next:before {
    font-size: 30px;
    opacity: 0.5;
    color: white;
  }
  @media screen and (max-width: 800px) {
    width: 100vw;
    & img {
      width: 100vw;

      object-fit: cover;
    }
  }
`;
