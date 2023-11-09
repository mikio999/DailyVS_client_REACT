import React from 'react';
import styled from 'styled-components';
import PollLikeBtn from '../../../components/Atoms/PollLikeBtn';

const ResultInfo = ({ information }) => {
  const parsedDate = information?.created_at?.split('T')[0];
  return (
    <Container>
      <SecondWriter>
        <FirstWriter>
          <Title>글쓴이</Title>
          <Content>{information?.owner?.nickname}</Content>
          <Content>{parsedDate}</Content>
        </FirstWriter>
      </SecondWriter>
      <PollLikeBtn />
    </Container>
  );
};
export default ResultInfo;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FirstWriter = styled.div`
  display: flex;
  font-size: 14px;
  margin: 1rem;
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
  color: #17355a;
`;

const SecondWriter = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  font-size: 14px;
`;
