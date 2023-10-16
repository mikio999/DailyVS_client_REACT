import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';

function HeaderSubText({ content }) {
  return <Text>{content}</Text>;
}
const Text = styled.h3`
  font-size: 16px;
  color: ${theme.colors.turquoisSecondaryColor};
  text-align: center;
  text-align: center;
  word-break: keep-all;
  line-height: 1.8rem;
`;
export default HeaderSubText;
