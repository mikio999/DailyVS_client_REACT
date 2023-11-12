import React from 'react';
import styled from 'styled-components';

const ReportComment = () => {
  return <Container>신고</Container>;
};
export default ReportComment;

const Container = styled.div`
  display: flex;
  font-size: 13px;
  width: 26px;
  margin-left: auto;
  color: gray;
  &:hover {
    color: #d4d4d4;
    cursor: pointer;
  }
`;
