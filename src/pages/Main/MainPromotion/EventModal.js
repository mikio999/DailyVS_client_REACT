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
        <ContentTitle>{event?.event_title}</ContentTitle>
        <ContentSubTitle>{event?.event_sub_title}</ContentSubTitle>
        <ModalImg src={require('../../../assets/MainSide/C33.png')} />
        <ModalContent>
          {event?.event_description.map(desc => (
            <EventDescription key={desc.id}>{desc.text}</EventDescription>
          ))}
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
  padding: 30px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  word-break: keep-all;
  line-height: 1.2;
  margin-bottom: 10px;
  @media screen and (max-width: 800px) {
    width: 60vw;
  }
  @media screen and (max-width: 500px) {
    width: 80vw;
  }
  @media screen and (max-width: 300px) {
    width: 90vw;
  }
`;

const ModalTitle = styled.h1`
  display: flex;
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
  width: 500px;
  @media screen and (max-width: 800px) {
    width: 50vw;
  }
  @media screen and (max-width: 500px) {
    width: 40vw;
  }
  @media screen and (max-width: 300px) {
    width: 30vw;
  }
`;

const ModalContent = styled.p``;

const ContentTitle = styled.h1`
  font-family: 'GongGothicMedium';
  font-size: 16px;
`;

const ContentSubTitle = styled.h2`
  margin-top: 0.5rem;
  font-family: 'GongGothicLight';
  color: #17355a;
  font-size: 14px;
`;

const EventDescription = styled.div`
  margin: 0.5rem 0;
  line-height: 1.5;
  @media screen and (max-width: 800px) {
    font-size: 14px;
  }
  @media screen and (max-width: 500px) {
    font-size: 12px;
  }
`;
