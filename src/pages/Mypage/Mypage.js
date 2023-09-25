import React from 'react';
import styled from 'styled-components';
import MypageInformation from './MypageInformation';
import MypageVoteList from './MypageVoteList';
import MypageLikeList from './MypageLikeList';

const Mypage = () => {
  return (
    <Container>
      <MypageInformation />
      <MypageVoteList />
      <MypageLikeList />
    </Container>
  );
};

export default Mypage;

const Container = styled.div``;
