import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const RankingModal = ({ isOpen, onClose, topUser }) => {
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
          {topUser.map((user, index) => (
            <ModalTop key={index}>
              <ModalRank>{`${index + 1}등`}</ModalRank>
              <ModalNickname>{user.nickname}</ModalNickname>
              <RankPoint>
                <PointNumber>{user.point}</PointNumber>
                <Point>VS POINT</Point>
              </RankPoint>
              <ModalRecent to={`vote-detail/${user?.most_recent_poll?.id}`}>
                {user.most_recent_poll?.title || 'No recent poll'}
              </ModalRecent>
            </ModalTop>
          ))}
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
  @media screen and (max-width: 800px) {
    width: 500px;
    height: 70vh;
  }
  @media screen and (max-width: 500px) {
    width: 320px;
    height: 70vh;
  }
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
  display: grid;
  grid-template-columns: 50px 100px 150px 300px;
  font-size: 18px;
  margin-top: 1rem;
  @media screen and (max-width: 900px) {
    grid-template-columns: 30px 100px 100px 200px;
    font-size: 14px;
    margin-top: 1rem;
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: 15px 50px 80px 200px;
    font-size: 12px;
    margin-top: 10px;
  }
`;

const ModalRank = styled.h1`
  display: flex;
  justify-content: left;
  align-items: center;
  color: #ff495a;
  font-family: 'GongGothicMedium';
`;

const ModalNickname = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  color: #17355a;
  font-family: 'GongGothicMedium';
  margin-left: 1rem;
`;

const ModalRecent = styled(Link)`
  display: flex;
  justify-content: left;
  align-items: center;
  margin-top: 5px;
  margin-left: 2.2rem;
  &:hover {
    opacity: 0.8;
  }
`;

const RankPoint = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'GongGothicLight';
  margin-left: 2.2rem;
`;

const PointNumber = styled.div``;

const Point = styled.div`
  margin-left: 0.5rem;
  color: #ff495a;
  font-size: 12px;
  @media screen and (max-width: 800px) {
    font-size: 10px;
    margin-top: 1rem;
  }
`;
