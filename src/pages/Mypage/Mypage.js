import React from 'react';
import styled from 'styled-components';
import MypageInformation from './MypageInformation';
import MypageVoteList from './MypageVoteList/MypageVoteList';
import MypageLikeList from './MypageLikeList/MypageLikeList';

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

const Container = styled.div`
  background-color: ${props => props.theme.colors.blueBgColor};
`;
