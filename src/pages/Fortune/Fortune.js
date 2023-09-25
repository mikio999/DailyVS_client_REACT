import React from 'react';
import styled from 'styled-components';

const Fortune = () => {
  return (
    <FortunePage>
      <FortuneTitle>🥠 오늘의 포춘 쿠키 🥠</FortuneTitle>
    </FortunePage>
  );
};

export default Fortune;

const FortunePage = styled.div`
  display: flex;
  width: 500px;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
`;

const FortuneTitle = styled.h1`
  margin-top: 30px;
  font-family: 'GongGothicLight';
  font-size: 24px;
`;
