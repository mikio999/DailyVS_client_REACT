import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Paginator from '../../../components/Molecules/Paginator';

const MypageCreateList = () => {
  const [listCount, setListCount] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [createList, setCreateList] = useState([]);

  useEffect(() => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const accessToken = localStorage.getItem('access');
    if (accessToken) {
      headers.append('Authorization', `Bearer ${accessToken}`);
    }

    fetch(`${process.env.REACT_APP_HOST}/mypage_my_poll?page=${currentPage}`, {
      method: 'GET',
      headers: headers,
    })
      .then(response => response.json())
      .then(result => {
        setCreateList(result.my_poll);
        setListCount(result.my_poll_count);
      });
  }, [currentPage]);

  if (!createList || !createList.length) {
    return (
      <Container>
        <VoteListTitle>내가 투표한 VOTE</VoteListTitle>
        <p>내가 만든 투표가 존재하지 않습니다. </p>
      </Container>
    );
  }

  return (
    <Container>
      <VoteListTitle>내가 만든 VOTE</VoteListTitle>
      {createList.map((poll, index) => (
        <LikeLine key={index} to={`/vote-detail/${poll?.id}`}>
          <LikeImage src={`${poll?.thumbnail}`} alt={poll.poll?.title} />
          <TruncateText>
            <LikeName>{poll?.title}</LikeName>
          </TruncateText>
          <LikeCreator>{poll.owner?.nickname}</LikeCreator>
          <LikeDate>{poll.created_at?.slice(0, 10)}</LikeDate>
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

export default MypageCreateList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  @media (min-width: 768px) {
    min-width: 100%;
  }
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
  margin-left: 1rem;
  margin-right: 1rem;
  width: 90%;
  max-width: 1200px;
  font-family: 'GongGothicLight';
  font-size: 15px;
  border-bottom: 1px solid #d9d9d9;
  padding-bottom: 5px;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  @media (min-width: 890px) {
    grid-template-columns: 10% 60% 20% 10%;
    width: 95%;
    grid-gap: 10px;
    font-size: 16px;
    margin-left: 30px;
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
  font-size: 15px;
  margin: 5px;
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
