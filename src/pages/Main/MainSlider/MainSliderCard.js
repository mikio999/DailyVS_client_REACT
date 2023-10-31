import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import theme from '../../../styles/theme';

function MainSliderCard({ id, thumbnail, title }) {
  const navigate = useNavigate();
  const onClickDetailButton = () => {
    navigate(`/vote-detail/${id}`);
  };
  return (
    <Container onClick={onClickDetailButton}>
      <ThumbnailContainer>
        <Thumbnail src={thumbnail} />
        <Thumbnail src={thumbnail} />
        <Thumbnail src={thumbnail} />
      </ThumbnailContainer>
      <Name>
        <span>{title}</span>
      </Name>
    </Container>
  );
}
const Container = styled.div`
  height: 200px;
  margin: 10px;
  border-radius: 10px;
  transition: 0.3s;
  overflow: hidden;
  position: relative;
  background-color: ${theme.colors.lightGrayColor};
  cursor: pointer;
  &:hover {
    scale: 1.05;
  }
`;
const ThumbnailContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Thumbnail = styled.img`
  width: 100%;
`;

const Name = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 100;
  justify-content: center;
  align-items: center;
  padding: 20px;
  & span {
    font-size: 20px;
    font-weight: 900;
    color: white;
    z-index: 500;
    text-align: center;
    word-break: keep-all;
    line-height: 1.5rem;
  }
  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export default MainSliderCard;
