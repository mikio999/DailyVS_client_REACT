import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Paginator from '../../../components/Molecules/Paginator';

const MypageLikeList = () => {
  const [pollLike, setPollLike] = useState([]);
  const [listCount, setListCount] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const accessToken = localStorage.getItem('access');
    if (accessToken) {
      headers.append('Authorization', `Bearer ${accessToken}`);
    }

    fetch(
      `${process.env.REACT_APP_HOST}/mypage_poll_like?page=${currentPage}`,
      {
        method: 'GET',
        headers: headers,
      },
    )
      .then(response => response.json())
      .then(result => {
        setPollLike(result.poll_like);
        setListCount(result.poll_like_count);
      });
  }, [currentPage]);

  if (!pollLike || !pollLike.length) {
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
      {pollLike?.map((poll, index) => (
        <LikeLine key={index} to={`/vote-detail/${poll.id}`}>
          <LikeImage src={`${poll.thumbnail}`} alt={poll?.title} />
          <TruncateText>
            <LikeName>{poll.title}</LikeName>
          </TruncateText>
          <LikeCreator>{poll.owner.nickname}</LikeCreator>
          <LikeDate>{poll.created_at.slice(0, 10)}</LikeDate>
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

export default MypageLikeList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  width: min(100%, 1000px);
`;

const LikeTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'GongGothicMedium';
  font-size: 24px;
  margin: 20px;
`;

const LikeLine = styled(Link)`
  display: grid;
  grid-template-columns: 10% 34% 30% 30%;
  margin-top: 10px;
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
  width: 150px;
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
  justify-content: end;
  color: gray;
  font-size: 12px;
`;

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
`;
