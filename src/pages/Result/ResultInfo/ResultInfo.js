import React from 'react';
import styled from 'styled-components';
import PollLikeBtn from '../../../components/Atoms/PollLikeBtn';

const ResultInfo = ({ information }) => {
  const parsedDate = information?.created_at?.split('T')[0];
  return (
    <Container>
      <FirstWriter>
        <Title>글쓴이</Title>
        <Content>{information?.owner?.nickname}</Content>
        <Content>{parsedDate}</Content>
      </FirstWriter>
      <SecondContainer>
        <PollLikeBtn />
      </SecondContainer>
    </Container>
  );
};
export default ResultInfo;

const Container = styled.div`
  width: min(100%, 1100px);
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const FirstWriter = styled.div`
  font-size: 14px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-family: 'GongGothicLight';
  color: #457c9e;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  line-height: 1.2;
  color: #17355a;
`;

const SecondContainer = styled.div`
  display: flex;
  margin-left: auto;
`;
