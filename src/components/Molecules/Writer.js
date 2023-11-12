import React from 'react';
import styled from 'styled-components';

const Writer = ({ information }) => {
  const parsedDate = information?.created_at?.split('T')[0];
  return (
    <Container>
      <FirstWriter>
        <Title>글쓴이</Title>
        <Content>{information?.owner?.nickname}</Content>
        <Content>{parsedDate}</Content>
      </FirstWriter>
    </Container>
  );
};
export default Writer;

const Container = styled.div`
  font-size: 16px;
  height: 20px;
`;

const FirstWriter = styled.div`
  font-size: 14px;
  margin: auto;
  padding-top: 3px;
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
