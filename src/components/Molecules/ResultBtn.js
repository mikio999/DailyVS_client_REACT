import React from 'react';
import styled from 'styled-components';

const ResultBtn = () => {
  return <Container>결과보기</Container>;
};

export default ResultBtn;

const Container = styled.button`
  width: 160px;
  height: 50px;
  font-size: 24px;
  color: white;
  background-color: #ff495a;
  border: none;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
  }
`;
