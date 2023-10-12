import React, { useRef } from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import { Link } from 'react-router-dom';

const MintButton = ({ content, link }) => (
  <Link to={link}>
    <MintButtonCSS>{content}</MintButtonCSS>
  </Link>
);

const MintButtonCSS = styled.div`
  background-color: ${theme.colors.turquoisSecondaryColor};
  padding: 10px 20px;
  cursor: pointer;
  color: white;
  border-radius: 6px;
  &:hover {
    background-color: ${theme.colors.turquoisSecondaryColorHover};
  }
`;
export default MintButton;

export const ArrowLeft = () => {
  const refSlideLeft = useRef(null);

  const handleSlideBtnMD = () => {
    if (refSlideLeft.current) {
      refSlideLeft.current.style.transform = 'scale(0.9)';
    }
  };
  const handleSlideBtnMU = () => {
    if (refSlideLeft.current) {
      refSlideLeft.current.style.transform = 'scale(1)';
    }
  };
  return (
    <img
      src="/images/Buttons/arrowLeft.png"
      style={{ width: 40, height: 40 }}
      ref={refSlideLeft}
      onMouseDown={handleSlideBtnMD}
      onMouseUp={handleSlideBtnMU}
    />
  );
};

export const ArrowRight = () => {
  const refSlideRight = useRef(null);
  const handleSlideBtnMD = () => {
    if (refSlideRight.current) {
      refSlideRight.current.style.transform = 'scale(0.9)';
    }
  };
  const handleSlideBtnMU = () => {
    if (refSlideRight.current) {
      refSlideRight.current.style.transform = 'scale(1)';
    }
  };
  return (
    <img
      src="/images/Buttons/arrowRight.png"
      style={{ width: 40, height: 40 }}
      ref={refSlideRight}
      onMouseDown={handleSlideBtnMD}
      onMouseUp={handleSlideBtnMU}
    />
  );
};
