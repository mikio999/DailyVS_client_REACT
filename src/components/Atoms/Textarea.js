import React, { useState } from 'react';
import styled from 'styled-components';

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
      {label && <label for={id}>{label}: </label>}

      <Textarea
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        rows="5"
        maxLength={max}
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
  margin: 5px 0;
  flex: 1;
  resize: none;
  border: 2px solid black;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: lightgray;
  }
`;

export default TextareaWithLimit;
