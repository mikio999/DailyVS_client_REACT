import React, { useState } from 'react';
import styled from 'styled-components';

const ResultBtn = () => {
  const [isHovered, setIsHovered] = useState(false);

  const ShareImg = styled.img`
    margin-left: 5px;
    width: 20px;
    content: url('/images/Buttons/share.png'); // 기본 이미지
    &:hover {
      content: url('/images/Buttons/share_blue.png'); // 호버 시 이미지 변경
    }
  `;

  return (
    <Container>
      <ShareBtn>
        <ShareWord>공유하기</ShareWord>
        <ShareImg alt="share" />
      </ShareBtn>
      <CaptureBtn>캡쳐하기</CaptureBtn>
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
  margin: 10px;
  &:hover {
    border: solid #457c9e 1px;
    color: #457c9e;
    cursor: pointer;
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
  background-color: ${props => props.theme.colors.darkbluePrimaryColor};
  margin: 10px;
  &:hover {
    background-color: white;
    color: ${props => props.theme.colors.darkbluePrimaryColor};
    cursor: pointer;
  }
`;
