import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';

const ResultBtn = ({ onCapture }) => {
  const location = useLocation();
  const params = useParams();
  const baseUrl = 'https://daily-vs.com';
  const text = `${baseUrl}/vote-detail/${params.id}`;

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
        onClick={() => handleCopyClipBoard(`${baseUrl}${location.pathname}`)}
      >
        <ShareWord>투표 url 복사</ShareWord>
        <ShareImg alt="share" />
      </ShareBtn>
      <CaptureBtn onClick={onCapture}>
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
`;

const ShareBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 50px;
  border-radius: 5px;
  border: solid black 1px;
  font-size: 16px;
  margin: 10px;
  transition: box-shadow 0.3s;
  &:hover {
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.25);
    border: solid #457c9e 1px;
    color: #457c9e;
    cursor: pointer;
  }
`;

const ShareImg = styled.img`
  margin-left: 5px;
  width: 20px;
  content: url('/images/Buttons/share.png');
  &:hover {
    content: url('/images/Buttons/share_blue.png');
  }
`;

const ShareWord = styled.div``;

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
  &:hover {
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }
`;

const CaptureWord = styled.div``;
const CaptureImg = styled.img`
  margin-left: 5px;
  width: 20px;
  content: url('/images/Buttons/capture.png');
`;
