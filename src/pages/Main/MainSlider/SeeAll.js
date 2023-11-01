import React from 'react';
import styled from 'styled-components';
import MainSliderCard from './MainSliderCard';

function SeeAll({ data }) {
  return (
    <Container>
      {data.length > 0 &&
        data.map(card => (
          <MainSliderCard
            key={card.id}
            id={card.id}
            title={card.title}
            thumbnail={card.thumbnail}
          />
        ))}
    </Container>
  );
}
const Container = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-gap: 16px;
  padding-top: 20px;
  @media screen and (max-width: 950px) {
    grid-template-columns: repeat(4, auto);
  }
  @media screen and (max-width: 830px) {
    grid-template-columns: repeat(3, auto);
  }
  @media screen and (max-width: 550px) {
    grid-template-columns: repeat(2, auto);
  }
`;
export default SeeAll;
