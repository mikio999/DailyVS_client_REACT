import React, { useRef } from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import { Link } from 'react-router-dom';

const MintButtonSubmit = ({ content, link }) => (
  <Link to={link}>
    <MintButtonCSS>{content}</MintButtonCSS>
  </Link>
);

export const MintButton = ({ content, onClick }) => (
  <div>
    <MintButtonCSS onClick={onClick}>{content}</MintButtonCSS>
  </div>
);

const MintButtonCSS = styled.div`
  background-color: ${theme.colors.turquoisSecondaryColor};
  padding: 10px 20px;
  cursor: pointer;
  color: white;
  border-radius: 6px;
  font-size: 16px;
  text-align: center;
  transition: 0.3s;
  &:hover {
    background-color: ${theme.colors.turquoisSecondaryColorHover};
  }
`;
export default MintButtonSubmit;

export const ArrowLeft = ({ onClick, style, opacity = 1 }) => {
  const refSlideLeft = useRef(null);

  const handleSlideBtnMD = () => {
    if (refSlideLeft.current && opacity === 1) {
      refSlideLeft.current.style.transform = 'scale(1)';
    }
  };
  const handleSlideBtnMU = () => {
    if (refSlideLeft.current && opacity === 1) {
      refSlideLeft.current.style.transform = 'scale(1.1)';
    }
  };

  return (
    <img
      src="/images/Buttons/arrowLeft.png"
      alt="arrowLeft"
      style={{
        ...style,
        width: 40,
        height: 40,
        transition: '0.3s',
        opacity: opacity,
      }}
      ref={refSlideLeft}
      onMouseDown={handleSlideBtnMD}
      onMouseUp={handleSlideBtnMU}
      onMouseEnter={() =>
        (refSlideLeft.current.style.transform =
          opacity === 1 ? 'scale(1.1)' : 'scale(1)')
      }
      onMouseLeave={() => (refSlideLeft.current.style.transform = 'scale(1)')}
      onClick={onClick}
    />
  );
};

export const ArrowRight = ({ onClick, style, opacity = 1 }) => {
  const refSlideRight = useRef(null);
  const handleSlideBtnMD = () => {
    if (refSlideRight.current && opacity === 1) {
      refSlideRight.current.style.transform = 'scale(1)';
    }
  };
  const handleSlideBtnMU = () => {
    if (refSlideRight.current && opacity === 1) {
      refSlideRight.current.style.transform = 'scale(1.1)';
    }
  };
  return (
    <img
      src="/images/Buttons/arrowRight.png"
      style={{
        ...style,
        width: 40,
        height: 40,
        transition: '0.3s',
        opacity: opacity,
      }}
      ref={refSlideRight}
      onMouseDown={handleSlideBtnMD}
      onMouseUp={handleSlideBtnMU}
      onMouseEnter={() =>
        (refSlideRight.current.style.transform =
          opacity === 1 ? 'scale(1.1)' : 'scale(1)')
      }
      onMouseLeave={() => (refSlideRight.current.style.transform = 'scale(1)')}
      onClick={onClick}
    />
  );
};
