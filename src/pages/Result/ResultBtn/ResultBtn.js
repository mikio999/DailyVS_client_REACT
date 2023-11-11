import React, { useRef } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';
import shareImg from '../../../assets/Buttons/share.png';
import captureImg from '../../../assets/Buttons/capture.png';
import useClickEffect from '../../../utils/hooks/useClickEffect';

const ResultBtn = ({ onCapture }) => {
  const location = useLocation();
  const params = useParams();
  const baseUrl = 'https://daily-vs.com';
  const text = `${baseUrl}/vote-detail/${params.id}`;

  const refShare = useRef(null);
  const refCapture = useRef(null);

  const {
    handleBtnMD: handleShareBtnMD,
    handleBtnMU: handleShareBtnMU,
    handleBtnME: handleShareBtnME,
    handleBtnML: handleShareBtnML,
  } = useClickEffect(refShare);
  const {
    handleBtnMD: handleCaptureBtnMD,
    handleBtnMU: handleCaptureBtnMU,
    handleBtnME: handleCaptureBtnME,
    handleBtnML: handleCaptureBtnML,
  } = useClickEffect(refCapture);

  const handleCopyClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      alert('클립보드에 링크가 복사되었어요.');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      <ShareBtn
        ref={refShare}
        onMouseDown={handleShareBtnMD}
        onMouseUp={handleShareBtnMU}
        onMouseEnter={handleShareBtnME}
        onMouseLeave={handleShareBtnML}
        onClick={() => handleCopyClipBoard(`${baseUrl}${location.pathname}`)}
      >
        <ShareWord>투표 url 복사</ShareWord>
        <ShareImg alt="share" />
      </ShareBtn>
      <CaptureBtn
        onClick={onCapture}
        ref={refCapture}
        onMouseDown={handleCaptureBtnMD}
        onMouseUp={handleCaptureBtnMU}
        onMouseEnter={handleCaptureBtnME}
        onMouseLeave={handleCaptureBtnML}
      >
        <CaptureWord>그래프 캡쳐</CaptureWord>
        <CaptureImg alt="capture" />
      </CaptureBtn>
    </Container>
  );
};

export default ResultBtn;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  font-size: 20px;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-left: 50px;
    margin-right: auto;
  }
`;

const ShareBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 50px;
  border-radius: 5px;
  font-size: 16px;
  margin: 10px;
  border: none;
  transition: box-shadow 0.3s;
  background-color: #457c9e;
  cursor: pointer;
`;

const ShareImg = styled.img`
  margin-left: 5px;
  width: 20px;
  content: url(${shareImg});
`;

const ShareWord = styled.div`
  color: white;
  font-family: 'GongGothicLight';
`;

const CaptureBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 50px;
  border: solid #17355a 1px;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  background-color: ${props =>
    props.disabled ? '#bdbdbd' : props.theme.colors.darkbluePrimaryColor};
  margin: 10px;
  transition: box-shadow 0.3s;
  cursor: pointer;
`;

const CaptureWord = styled.div`
  font-family: 'GongGothicLight';
`;
const CaptureImg = styled.img`
  margin-left: 5px;
  width: 20px;
  content: url(${captureImg});
`;
