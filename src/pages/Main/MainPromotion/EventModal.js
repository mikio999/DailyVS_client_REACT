import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const EventModal = ({ isOpen, onClose }) => {
  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
      console.log('click');
    }
  };

  return isOpen ? (
    <ModalOverlay onClick={handleOverlayClick}>
      <Container>
        <ModalCloseButton onClick={onClose}>&times;</ModalCloseButton>
        <ModalTitle>
          <Red>Daily VS</Red>
          <span>Event</span>
        </ModalTitle>
        <ModalContent>
          <img src={require('../../../assets/MainSide/C33.png')} />
          <div>
            <p>
              본인 계정으로 업로드한 투표에 투표 데이터가 쌓일 때마다 VS POINT
              획득!
            </p>
            <div>사이트 첫 500, 1000, 50000 포인트 달성 시 차등 보상! </div>
            <ul>
              <li>500 포인트 (5명) - 4500원 기프티콘</li>{' '}
              <li>1000 포인트 (3명) - 10000원 기프티콘</li>
              <li> 20000 포인트 (1명) - 5만원 현금 지급</li>
            </ul>
          </div>
          <div>본인의 포인트는 마이페이지에서 확인 가능합니다!</div>
        </ModalContent>
      </Container>
    </ModalOverlay>
  ) : null;
};

export default EventModal;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

const Container = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  width: 70vw;
  margin-bottom: 4rem;
`;

const ModalTitle = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.5rem;
  margin: 1rem;
`;

const ModalCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  z-index: 99;
`;

const Red = styled.span`
  color: #ff495a;
  font-family: 'GongGothicMedium';
  margin-right: 10px;
`;

const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  & div {
    margin-top: 1rem;
    font-size: 18px;
  }

  & img {
    width: 50vw;
  }

  & p {
    font-size: 20px;
    font-family: 'GongGothicLight';
  }

  & ul {
    margin-top: 2rem;
  }

  & ul li {
    margin-top: 1rem;
  }
  @media screen and (max-width: 800px) {
    & div {
      margin-top: 1rem;
      font-size: 14px;
      word-break: keep-all;
    }

    & img {
      width: 50vw;
    }

    & p {
      font-size: 15px;
      font-family: 'GongGothicLight';
      word-break: keep-all;
    }

    & ul {
      margin-top: 2rem;
    }

    & ul li {
      margin-top: 1rem;
    }
  }
`;
