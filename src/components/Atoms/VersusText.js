import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';

const Versus = ({ index }) =>
  index > 0 ? (
    <VScontainer>
      <span>V</span>
      <span>S</span>
    </VScontainer>
  ) : null;

const VScontainer = styled.div`
  display: flex;
  gap: 3px;
  margin: 10px 0;
  & > span {
    font-size: 28px;
    font-weight: 900;
  }
  & > span:first-child {
    color: ${theme.colors.darkbluePrimaryColor};
  }
  & > span:last-child {
    color: ${theme.colors.redpinkPrimaryColor};
  }
`;

export default Versus;
