import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';

function InputBox({ value, placeholder, readOnly = false, onChange }) {
  return (
    <Choice
      type="text"
      value={value}
      placeholder={placeholder}
      readOnly={readOnly}
      onChange={onChange}
    />
  );
}

const Choice = styled.input`
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 10px 10px;
  width: 100%;
  flex: 1;
  font-size: 24px;
  text-align: center;
  border: none;
  font-weight: 900;
  &::placeholder {
    color: ${theme.colors.placeholder};
  }
  cursor: ${props => (props.readOnly === true ? 'pointer' : 'text')};
`;
export default InputBox;
