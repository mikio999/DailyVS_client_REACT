import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const RankSection = ({ topUser }) => {
  const truncateText = text => {
    return text?.length > 12 ? `${text?.slice(0, 12)}...` : text;
  };

  return (
    <div>
      {topUser?.slice(0, 3)?.map((item, index) => (
        <Container key={index}>
          <MedalImg
            src={require(`../../../assets/MainSide/medal${index + 1}.png`)}
          />
          <RankRight>
            <RankNickname>{item?.nickname}</RankNickname>
            <RankPoint>
              <PointNumber>{item?.point}</PointNumber>
              <Point>VS POINT</Point>
            </RankPoint>
            <RecentVote to={`vote-detail/${item?.most_recent_poll?.id}`}>
              {truncateText(item?.most_recent_poll?.title)}
            </RecentVote>
          </RankRight>
        </Container>
      ))}
    </div>
  );
};

export default RankSection;

const Container = styled.div`
  display: flex;
  width: 300px;
  margin: 20px;
`;

const RankRight = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const RankNickname = styled.h1`
  color: #457c9e;
  font-family: 'GongGothicLight';
  font-size: 22px;
`;

const MedalImg = styled.img`
  width: 70px;
  height: 70px;
`;

const RankPoint = styled.div`
  margin-top: 5px;
  display: flex;
  font-family: 'GongGothicLight';
`;

const PointNumber = styled.div`
  font-size: 17px;
`;

const Point = styled.div`
  margin-left: 0.5rem;
  color: #ff495a;
  font-size: 14px;
`;

const RecentVote = styled(Link)`
  color: gray;
  margin-top: 5px;
  font-size: 14px;
  &:hover {
    opacity: 0.7;
  }
`;
