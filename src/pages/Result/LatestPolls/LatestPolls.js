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
              style={{ backgroundColor: '#D9D9D9' }}
            >
              <LikeImage src={`${poll?.thumbnail}`} alt={poll.poll?.title} />
              <TruncateText>
                <LikeName style={{ fontWeight: 'bold', color: 'black' }}>
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
  align-items: center;
  justify-content: center;
  font-family: 'GongGothicLight';
  font-size: 24px;
  color: #457c9e;
`;

const LikeLine = styled(Link)`
  display: grid;
  align-items: center;
  grid-template-columns: 10% 60% 30%;
  margin: 0.7rem 1.5rem;
  height: 2.2rem;
  font-family: 'GongGothicLight';
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.15);
  &:hover {
    cursor: pointer;
    opacity: 0.8;
    background-color: #d9d9d9;
  }
`;

const TruncateText = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 295px;
`;

const LikeName = styled.h1`
  color: #17355a;
  font-size: 18px;
  margin: 5px;
`;

const LikeImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
  margin-left: 5px;
`;

const LikeCreator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #457c9e;
  font-size: 14px;
  font-family: 'NEXON Lv1 Gothic OTF';
`;
