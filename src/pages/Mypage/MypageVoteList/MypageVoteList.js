import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MypageVoteList = ({ voteList }) => {
  console.log(voteList);
  return (
    <Container>
      <VoteListTitle>나의 VOTE LIST</VoteListTitle>
      {voteList.map((poll, index) => (
        <LikeLine key={index} to={`/vote-detail/${poll.poll.id}`}>
          <LikeImage
            src={'http://127.0.0.1:8000' + poll.poll.thumbnail}
            alt={poll.poll?.title}
          />
          <TruncateText>
            <LikeName>{poll.poll?.title}</LikeName>
          </TruncateText>
          <LikeCreator>{poll.poll.nickname}</LikeCreator>
          <LikeDate>{poll.poll.created_at?.slice(0, 10)}</LikeDate>
        </LikeLine>
      ))}
    </Container>
  );
};

export default MypageVoteList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const VoteListTitle = styled.h1`
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
