import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import Versus from '../Atoms/VersusText';
import DeleteBtn from '../Atoms/DeleteBtn';
import InputBox from '../Atoms/InputBox';

function InputPollBox({
  value,
  index,
  readOnly = false,
  deleteBtn = false,
  handleDelete,
  setValue,
}) {
  const handleChange = e => {
    const newValue = [...value];
    newValue[index] = e.target.value;
    setValue(newValue);
  };
  return (
    <>
      <Versus index={index} />
      <div data-index={index} style={{ position: 'relative' }}>
        <InputBox
          value={value[index]}
          placeholder={`선택지 ${index + 1}`}
          readOnly={readOnly}
          onChange={handleChange}
        />
        {!!deleteBtn && (
          <Delete>
            <DeleteBtn onClick={handleDelete} />
          </Delete>
        )}
      </div>
    </>
  );
}
const Delete = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
`;

export default InputPollBox;
