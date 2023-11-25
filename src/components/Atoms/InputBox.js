import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import preventTab from '../../utils/preventTab';

function InputBox({
  value,
  placeholder,
  readOnly = false,
  onChange,
  preventTabKey,
}) {
  return !readOnly ? (
    <Choice
      type="text"
      value={value}
      placeholder={placeholder}
      readOnly={readOnly}
      onChange={onChange}
      onKeyDown={placeholder === '선택지 5' ? preventTab : undefined}
    />
  ) : (
    <Choice
      type="text"
      value={value}
      placeholder={placeholder}
      readOnly={readOnly}
      onChange={onChange}
      onKeyDown={preventTab}
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
