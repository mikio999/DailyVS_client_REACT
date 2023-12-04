import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const RankingModal = ({ isOpen, onClose, topUser }) => {
  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const truncateText = text => {
    return text?.length > 15 ? `${text?.slice(0, 15)}...` : text;
  };

  return isOpen ? (
    <ModalOverlay onClick={handleOverlayClick}>
      <Container>
        <ModalCloseButton onClick={onClose}>&times;</ModalCloseButton>
        <ModalTitle>
          <Red>VS POINT</Red>
          <span>RANKING</span>
        </ModalTitle>
        <SubTitle>Top 10</SubTitle>
        <ModalContent>
          {topUser.map((user, index) => (
            <ModalTop key={index}>
              <ModalGrid>
                <ModalRank>{`${index + 1}등`}</ModalRank>
                <ModalNickname>{user?.nickname}</ModalNickname>
                <RankPoint>
                  <PointNumber>{user?.point}</PointNumber>
                  <Point>PT</Point>
                </RankPoint>
                <ModalEmail>{user?.email}</ModalEmail>
              </ModalGrid>
              <ModalRecent to={`vote-detail/${user?.most_recent_poll?.id}`}>
                {truncateText(user?.most_recent_poll?.title) ||
                  'No recent poll'}
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
  right: 0;
  bottom: 0;
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
  width: 70vw;
  height: 90vh;
  @media screen and (max-width: 800px) {
    width: 500px;
    height: 95vh;
  }
  @media screen and (max-width: 500px) {
    height: 95vh;
    width: 90vw;
  }
`;

const ModalTitle = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.2rem;
  margin: 1rem;
  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: row;
  }
`;

const SubTitle = styled.div`
  font-family: 'GongGothicMedium';
  font-size: 0.6rem;
  color: #17355a;
  display: flex;
  justify-content: center;
  font-size: 20px;
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
  margin-top: 1rem;
  border-bottom: solid 1px #bdbdbd;
  padding-bottom: 2px;
  @media screen and (max-width: 900px) {
    flex-direction: column;
    margin-top: 0.5rem;
  }
  @media screen and (max-width: 500px) {
    flex-direction: column;
    margin-top: 0.2rem;
  }
`;

const ModalGrid = styled.div`
  display: grid;
  grid-template-columns: 35px 100px 150px 100px;
  @media screen and (max-width: 900px) {
    grid-template-columns: 30px 100px 150px 100px;
    font-size: 14px;
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: 25px 50px 100px 100px;
    font-size: 12px;
  }
`;

const ModalRank = styled.h1`
  display: flex;
  justify-content: left;
  align-items: center;
  color: #ff495a;
  font-family: 'GongGothicMedium';
  @media screen and (max-width: 900px) {
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 500px) {
    justify-content: center;
    align-items: center;
  }
`;

const ModalNickname = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  color: #17355a;
  font-family: 'GongGothicMedium';
`;

const ModalRecent = styled(Link)`
  display: flex;
  justify-content: left;
  align-items: center;
  margin-top: 5px;
  margin-left: 2.2rem;
  font-size: 14px;
  white-space: nowrap;
  &:hover {
    opacity: 0.8;
  }
  @media screen and (max-width: 500px) {
    word-break: keep-all;
    font-size: 13px;
  }
  @media screen and (max-width: 330px) {
    font-size: 10px;
  }
`;

const RankPoint = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'GongGothicLight';
  font-size: 10px;
  margin-left: 2.2rem;
`;

const PointNumber = styled.div`
  font-size: 12px;
`;

const Point = styled.div`
  margin-left: 0.5rem;
  color: #ff495a;
  font-size: 10px;
  @media screen and (max-width: 800px) {
    font-size: 10px;
    margin-top: 1rem;
  }
`;

const ModalEmail = styled.div`
  display: flex;
  align-items: center;
  font-size: 10px;
  color: gray;
  @media screen and (max-width: 500px) {
    font-size: 8px;
  }
  @media screen and (max-width: 350px) {
    display: none;
  }
`;
