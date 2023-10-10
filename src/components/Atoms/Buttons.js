import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';

const MintButton = ({ content, onClick }) => (
  <>
    <MintButtonCSS onClick={onClick}>{content}</MintButtonCSS>
  </>
);

export default MintButton;

const MintButtonCSS = styled.div`
  background-color: ${theme.colors.turquoisSecondaryColor};
  padding: 10px 20px;
  cursor: pointer;
  color: white;
  &:hover {
    background-color: ${theme.colors.turquoisSecondaryColorHover};
  }
`;
