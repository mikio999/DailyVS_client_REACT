import React from 'react';
import styled from 'styled-components';

const EventModal = ({ isOpen, onClose, event }) => {
  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      onClose(e);
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
        <ModalImg src={require('../../../assets/MainSide/C33.png')} />
        <ModalContent>{event}</ModalContent>
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

const ModalImg = styled.img`
  width: 80%;
`;

const ModalContent = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  line-height: 1.2em;
  height: 3.6em;
`;
