import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LatestPolls = ({ voteList, current_poll_index }) => {
  function truncateString(str, maxLength) {
    if (str?.length > maxLength) {
      return str?.slice(0, maxLength) + '...';
    }
    return str;
  }

  return (
    <Container>
      <LatestTitle>이런 투표도 있어요!</LatestTitle>

      {voteList?.map((poll, index) => {
        if (index === current_poll_index) {
          // current_poll_index와 일치하는 경우에만 추가적인 처리
          return (
            <LikeLine
              key={index}
              to={`/vote-detail/${poll?.id}`}
              style={{ backgroundColor: 'lightgray' }}
            >
              <LikeImage src={`${poll?.thumbnail}`} alt={poll.poll?.title} />
              <TruncateText>
                <LikeName style={{ fontWeight: 'bold', color: 'red' }}>
                  {truncateString(poll?.title, 18)}
                </LikeName>
              </TruncateText>
              <LikeCreator>{poll.owner?.nickname}</LikeCreator>
            </LikeLine>
          );
        } else {
          // current_poll_index와 일치하지 않는 경우 기존의 LikeLine 컴포넌트 유지
          return (
            <LikeLine key={index} to={`/vote-detail/${poll?.id}`}>
              <LikeImage src={`${poll?.thumbnail}`} alt={poll.poll?.title} />
              <TruncateText>
                <LikeName>{truncateString(poll?.title, 18)}</LikeName>
              </TruncateText>
              <LikeCreator>{poll.owner?.nickname}</LikeCreator>
            </LikeLine>
          );
        }
      })}
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
  grid-template-columns: 10% 60% 30%;
  margin: 1rem 2rem;
  font-family: 'GongGothicLight';
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
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
