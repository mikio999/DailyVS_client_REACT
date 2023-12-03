import React, { useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import useClickEffect from '../../utils/hooks/useClickEffect';

const MintButtonSubmit = ({ content, link }) => {
  const makeVoteRef = useRef(null);
  const { handleBtnMD, handleBtnMU, handleBtnME, handleBtnML } =
    useClickEffect(makeVoteRef);
  return (
    <Link
      to={link}
      ref={makeVoteRef}
      onMouseDown={handleBtnMD}
      onMouseUp={handleBtnMU}
      onMouseEnter={handleBtnME}
      onMouseLeave={handleBtnML}
      style={{ transition: '0.3s' }}
    >
      <MintButtonCSS>{content}</MintButtonCSS>
    </Link>
  );
};

export const MintButton = ({ content, onClick, disabled }) => (
  <button>
    <MintButtonCSS onClick={onClick} disabled={disabled}>
      {content}
    </MintButtonCSS>
  </button>
);

const MintButtonCSS = styled.div`
  background-color: ${props =>
    props.disabled
      ? props.theme.colors.lightGrayColor
      : props.theme.colors.turquoisSecondaryColor};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  padding: 10px 20px;
  color: white;
  border-radius: 6px;
  font-size: 16px;
  text-align: center;
  transition: 0.3s;
  word-break: keep-all;
  line-height: 1.2rem;
`;

export default MintButtonSubmit;

export const ArrowLeft = ({ onClick, style, opacity = 1 }) => {
  const refSlideLeft = useRef(null);

  const { handleBtnMD, handleBtnMU, handleBtnME, handleBtnML } = useClickEffect(
    refSlideLeft,
    opacity,
  );

  return (
    <img
      src={require('../../assets/Buttons/arrowLeft.png')}
      alt="arrowLeft"
      style={{
        ...style,
        width: 40,
        height: 40,
        transition: '0.3s',
        opacity: opacity,
      }}
      ref={refSlideLeft}
      onMouseDown={handleBtnMD}
      onMouseUp={handleBtnMU}
      onMouseEnter={handleBtnME}
      onMouseLeave={handleBtnML}
      onClick={onClick}
    />
  );
};

export const ArrowRight = ({ onClick, style, opacity = 1 }) => {
  const refSlideRight = useRef(null);

  const { handleBtnMD, handleBtnMU, handleBtnME, handleBtnML } = useClickEffect(
    refSlideRight,
    opacity,
  );
  return (
    <img
      src={require('../../assets/Buttons/arrowRight.png')}
      style={{
        ...style,
        width: 40,
        height: 40,
        transition: '0.3s',
        opacity: opacity,
      }}
      ref={refSlideRight}
      onMouseDown={handleBtnMD}
      onMouseUp={handleBtnMU}
      onMouseEnter={handleBtnME}
      onMouseLeave={handleBtnML}
      onClick={onClick}
    />
  );
};
export const CommentLikeBtn = ({ onClick, liked = false }) => {
  const ref = useRef(null);

  const { handleBtnMD, handleBtnMU, handleBtnME, handleBtnML } =
    useClickEffect(ref);

  return (
    <img
      src={
        !liked
          ? require('../../assets/Buttons/likeBtn.png')
          : require('../../assets/Buttons/likeBtnRed.png')
      }
      style={{
        width: 25,
        height: 25,
        transition: '0.3s',
        cursor: 'pointer',
      }}
      ref={ref}
      onMouseDown={handleBtnMD}
      onMouseUp={handleBtnMU}
      onMouseEnter={handleBtnME}
      onMouseLeave={handleBtnML}
      onClick={onClick}
    />
  );
};

export const ChevronDown = ({ onClick }) => {
  const ref = useRef(null);

  const { handleBtnMD, handleBtnMU, handleBtnME, handleBtnML } =
    useClickEffect(ref);
  return (
    <img
      src={require('../../assets/Buttons/chevron_down.svg').default}
      style={{
        width: 30,
        height: 30,
        transition: '0.3s',
      }}
      ref={ref}
      onMouseDown={handleBtnMD}
      onMouseUp={handleBtnMU}
      onMouseEnter={handleBtnME}
      onMouseLeave={handleBtnML}
      onClick={onClick}
    />
  );
};
