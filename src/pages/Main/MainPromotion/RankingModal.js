import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const RankingModal = ({ isOpen, onClose }) => {
  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return isOpen ? (
    <ModalOverlay onClick={handleOverlayClick}>
      <Container>
        <ModalCloseButton onClick={onClose}>&times;</ModalCloseButton>
        <ModalTitle>
          <Red>VS POINT</Red>
          <span>RANKING</span>
        </ModalTitle>
        <ModalContent>
          <ModalTop>
            <ModalRank>1등</ModalRank>
            <ModalNickname>서판교칼바람</ModalNickname>
          </ModalTop>
          <RankPoint>
            <PointNumber>20500</PointNumber>
            <Point>VS POINT</Point>
          </RankPoint>
          <ModalRecent>민초 vs 반민초</ModalRecent>
        </ModalContent>
      </Container>
    </ModalOverlay>
  ) : null;
};

export default RankingModal;

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
  width: 65vw;
  height: 70vh;
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
`;

const Red = styled.span`
  color: #ff495a;
  font-family: 'GongGothicMedium';
  margin-right: 10px;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;

const ModalTop = styled.div`
  display: flex;
  font-size: 18px;
`;

const ModalRank = styled.h1`
  color: #ff495a;
  font-family: 'GongGothicMedium';
`;

const ModalNickname = styled.div`
  color: #17355a;
  font-family: 'GongGothicMedium';
  margin-left: 1rem;
`;

const ModalRecent = styled.div`
  margin-top: 5px;
  margin-left: 2.2rem;
  &:hover {
    opacity: 0.8;
  }
`;

const RankPoint = styled.div`
  margin-top: 5px;
  display: flex;
  font-family: 'GongGothicLight';
  margin-left: 2.2rem;
`;

const PointNumber = styled.div`
  font-size: 17px;
`;

const Point = styled.div`
  margin-left: 0.5rem;
  color: #ff495a;
  font-size: 14px;
`;
