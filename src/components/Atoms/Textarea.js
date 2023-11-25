import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import preventTab from '../../utils/preventTab';

function TextareaWithLimit({
  value,
  onChange,
  id,
  label,
  max,
  placeholder,
  name,
}) {
  const handleChange = e => {
    if (e.target.value.length <= max) {
      onChange(e);
    }
  };
  return (
    <Wrapper>
      {label && <label htmlFor={id}>{label}: </label>}

      <Textarea
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        rows="5"
        maxLength={max}
        onKeyDown={preventTab}
      />
      <p>
        입력한 내용: {value.length}/{max}
      </p>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  & > p {
    margin-left: auto;
    font-size: 12px;
  }
`;
const Textarea = styled.textarea`
  font-size: 16px;
  color: #17355a;
  padding: 7px 12px;
  margin: 5px 0 10px;
  flex: 1;
  resize: none;
  border: none;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${theme.colors.placeholder};
  }
`;

export default TextareaWithLimit;
