import React, { useState } from 'react';
import styled from 'styled-components';
import RankSection from './RankSection';
import EventSection from './EventSection';
import EventModal from './EventModal';
import RankingModal from './RankingModal';

const MainPromotion = () => {
  const [isRankOpen, setIsRankOpen] = useState(false);
  const [isEventOpen, setIsEventOpen] = useState(false);
  console.log(isEventOpen);
  const openRank = () => {
    setIsRankOpen(true);
  };

  const closeRank = () => {
    setIsRankOpen(false);
  };

  const openEvent = e => {
    e.stopPropagation();
    setIsEventOpen(true);
  };

  const closeEvent = e => {
    e.preventDefault();
    e.stopPropagation();
    setIsEventOpen(false);
  };

  return (
    <Container>
      <EventContainer onClick={openEvent}>
        <EventTitle>
          <EnglishTitle>VS Event</EnglishTitle>
          <EventImg src={require('../../../assets/MainSide/confetti.png')} />
          <EventBtn>더보기</EventBtn>
        </EventTitle>
        <EventSection />
        <EventModal isOpen={isEventOpen} onClose={closeEvent} />
      </EventContainer>
      <RankContainer>
        <RankTitle onClick={openRank}>
          VS Rank
          <RankImg src={require('../../../assets/MainSide/trophy.png')} />
          <EventBtn>더보기</EventBtn>
        </RankTitle>
        <RankSection />
        <RankingModal isOpen={isRankOpen} onClose={closeRank} />
      </RankContainer>
    </Container>
  );
};
export default MainPromotion;

const Container = styled.div`
  display: grid;
  grid-template-columns: 650px 500px;
  grid-gap: 50px;
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;

const EventContainer = styled.div`
  display: flex;
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    width: 100vw;
  }
`;

const EventTitle = styled.div`
  font-family: 'GongGothicMedium';
  background-color: #fff9f9;
  padding: 1rem;
  width: 100px;
  height: 300px;
  font-size: 22px;
  line-height: 1.5;
  @media screen and (max-width: 800px) {
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;
    & img {
      display: none;
    }
  }
`;

const EnglishTitle = styled.h1``;

const EventImg = styled.img`
  margin-top: 1rem;
  width: 70px;
`;

const RankImg = styled.img`
  margin-top: 1rem;
  width: 70px;
`;

const RankContainer = styled.div`
  display: flex;
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;

const RankTitle = styled.h1`
  font-family: 'GongGothicMedium';
  font-size: 22px;
  line-height: 1.5;
  background-color: #f8f8ff;
  padding: 1rem;
  width: 100px;
  @media screen and (max-width: 800px) {
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;
    & img {
      display: none;
    }
  }
`;

const EventBtn = styled.button`
  margin-top: 80px;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
