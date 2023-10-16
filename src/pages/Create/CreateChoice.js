import React from 'react';
import styled from 'styled-components';
import HeaderText from '../../components/Atoms/HeaderText';

function CreateChoice() {
  return (
    <Container>
      <HeaderText content="투표 선택지" />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
  width: min(100%, 400px);
`;
export default CreateChoice;
