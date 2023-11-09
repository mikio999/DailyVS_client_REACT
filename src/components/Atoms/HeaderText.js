import React from 'react';
import styled from 'styled-components';

function HeaderText({ content }) {
  return <Header>{content}</Header>;
}
const Header = styled.h2`
  font-size: 24px;
  font-weight: 900;
  text-align: center;
  margin-bottom: 16px;
  text-align: center;
  word-break: keep-all;
  line-height: 1.5rem;
  color: #457c9e;
`;
export default HeaderText;
