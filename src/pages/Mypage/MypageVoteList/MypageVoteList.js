import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Paginator from '../../../components/Molecules/Paginator';

const MypageVoteList = () => {
  const [voteList, setVoteList] = useState([]);
  const [listCount, setListCount] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const accessToken = localStorage.getItem('access');
    if (accessToken) {
      headers.append('Authorization', `Bearer ${accessToken}`);
    }

    fetch(`${process.env.REACT_APP_HOST}/mypage_uservote?page=${currentPage}`, {
      method: 'GET',
      headers: headers,
    })
      .then(response => response.json())
      .then(result => {
        setVoteList(result.uservote);

        setListCount(result.uservote_count);
      });
  }, [currentPage]);

  return (
    <Container>
      <VoteListTitle>내가 투표한 VOTE</VoteListTitle>
      {voteList.map((poll, index) => (
        <LikeLine key={index} to={`/vote-detail/${poll.poll.id}`}>
          <LikeImage
            src={`${process.env.REACT_APP_HOST}` + poll.poll.thumbnail}
            alt={poll.poll?.title}
          />
          <TruncateText>
            <LikeName>{poll.poll?.title}</LikeName>
          </TruncateText>
          <LikeCreator>{poll.choice.choice_text}</LikeCreator>
          <LikeDate>{poll.poll.created_at?.slice(0, 10)}</LikeDate>
        </LikeLine>
      ))}
      <PageContainer>
        <Paginator
          count={listCount}
          onPageChange={setCurrentPage}
          currentPage={currentPage}
        />
      </PageContainer>
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
  display: flex;
  font-family: 'GongGothicMedium';
  font-size: 24px;
  margin: 20px;
`;

const LikeLine = styled(Link)`
  display: grid;
  grid-template-columns: 7% 34% 30% 30%;
  margin-top: 10px;
  width: 100%;
  max-width: 1200px;
  font-family: 'GongGothicLight';
  font-size: 15px;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  @media (min-width: 768px) {
    grid-template-columns: 10% 50% 20% 20%;
    width: 100%;
    grid-gap: 5px;
    font-size: 16px;
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
  margin: 5px;
  font-size: 15px;
  @media (min-width: 768px) {
    width: 100%;
    font-size: 18px;
  }
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
  font-size: 12px;
`;

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
`;
