import React from 'react';
import styled from 'styled-components';

const MypageLikeList = () => {
  return (
    <Container>
      <LikeTitle>나의 VOTE 좋아요 LIST</LikeTitle>
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
`;
