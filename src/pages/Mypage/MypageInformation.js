import React from 'react';
import styled from 'styled-components';

const MypageInformation = () => {
  return (
    <Container>
      <InformationTitle>나의 정보</InformationTitle>
    </Container>
  );
};

export default MypageInformation;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const InformationTitle = styled.h1`
  font-family: 'GongGothicMedium';
`;
