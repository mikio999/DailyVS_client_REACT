import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MypageLikeList = pollLike => {
  if (!pollLike?.pollLike || !pollLike?.pollLike.length) {
    // Handle the case when pollLike is empty or not defined
    return (
      <Container>
        <LikeTitle>나의 좋아요 VOTE</LikeTitle>
        <p>'좋아요'한 투표가 존재하지 않습니다. </p>
      </Container>
    );
  }

  return (
    <Container>
      <LikeTitle>나의 좋아요 VOTE</LikeTitle>
      {pollLike?.pollLike.map((poll, index) => (
        <LikeLine key={index} to={`/vote-detail/${poll.id}`}>
          <LikeImage
            src={'http://127.0.0.1:8000' + poll.thumbnail}
            alt={poll?.title}
          />
          <TruncateText>
            <LikeName>{poll.title}</LikeName>
          </TruncateText>
          <LikeCreator>{poll.owner.nickname}</LikeCreator>
          <LikeDate>{poll.created_at.slice(0, 10)}</LikeDate>
        </LikeLine>
      ))}
    </Container>
  );
};

export default MypageLikeList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const LikeTitle = styled.h1`
  font-family: 'GongGothicMedium';
  font-size: 24px;
  margin: 20px;
`;

const LikeLine = styled(Link)`
  display: grid;
  grid-template-columns: 40px 300px 100px 100px;
  margin-top: 10px;
  font-family: 'GongGothicLight';
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

const TruncateText = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 295px;
`;

const LikeName = styled.h1`
  font-family: 'GongGothicLight';
  color: #17355a;
  font-size: 18px;
  margin: 5px;
`;

const LikeImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
`;

const LikeCreator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LikeDate = styled.div`
  display: flex;
  align-items: center;
  color: gray;
`;
