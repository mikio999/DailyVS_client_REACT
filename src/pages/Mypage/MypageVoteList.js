import React from 'react';
import styled from 'styled-components';

const MypageVoteList = () => {
  return (
    <Container>
      <VoteListTitle>나의 VOTE LIST</VoteListTitle>
    </Container>
  );
};

export default MypageVoteList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const VoteListTitle = styled.h1`
  font-family: 'GongGothicMedium';
`;
