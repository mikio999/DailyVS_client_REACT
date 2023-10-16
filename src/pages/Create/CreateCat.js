import React from 'react';
import styled from 'styled-components';
import HeaderText from '../../components/Atoms/HeaderText';
import HeaderSubText from '../../components/Atoms/HeaderSubText';

function CreateCat() {
  return (
    <Container>
      <HeaderText content="분석 카테고리" />
      <HeaderSubText content="통계 및 분석하고 싶은 카테고리 (다중선택가능)" />
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
export default CreateCat;
