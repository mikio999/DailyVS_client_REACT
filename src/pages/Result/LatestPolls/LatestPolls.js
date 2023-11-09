import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LatestPolls = ({ voteList }) => {
  function truncateString(str, maxLength) {
    if (str?.length > maxLength) {
      return str?.slice(0, maxLength) + '...';
    }
    return str;
  }

  return (
    <Container>
      <LatestTitle>이런 투표도 있어요!</LatestTitle>

      {voteList?.map((poll, index) => (
        <LikeLine key={index} to={`/vote-detail/${poll?.id}`}>
          <LikeImage
            src={`${process.env.REACT_APP_HOST}` + poll?.thumbnail}
            alt={poll.poll?.title}
          />
          <TruncateText>
            <LikeName>{truncateString(poll?.title, 18)}</LikeName>
          </TruncateText>
          <LikeCreator>{poll.owner?.nickname}</LikeCreator>
          <LikeDate>{poll.created_at?.slice(0, 10)}</LikeDate>
        </LikeLine>
      ))}
    </Container>
  );
};
export default LatestPolls;

const Container = styled.div`
  margin: 1rem auto;
  width: min(100%, 1100px);
`;

const LatestTitle = styled.h1`
  display: flex;
  justify-content: center;
  font-family: 'GongGothicLight';
  font-size: 24px;

  color: #457c9e;
`;

const LikeLine = styled(Link)`
  display: grid;
  grid-template-columns: 10% 50% 20% 20%;
  width: min(100%, 1000px);
  margin-top: 10px;
  margin-left: 5rem;
  min-width: 400px;
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
  color: #457c9e;
`;

const LikeDate = styled.div`
  display: flex;
  align-items: center;
  color: gray;
`;
