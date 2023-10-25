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
  setValue,
}) {
  console.log('this:', index, value[index]);
  const handleChange = e => {
    const newValue = [...value];
    newValue[index] = e.target.value;
    setValue(newValue);
    console.log('old:', value, 'new: ', newValue);
  };
  return (
    <>
      <Versus index={index} />
      <div style={{ position: 'relative' }}>
        <InputBox
          value={value[index]}
          placeholder={`선택지 ${index + 1}`}
          readOnly={readOnly}
          onChange={handleChange}
        />
        {!!deleteBtn && (
          <Delete>
            <DeleteBtn />
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
{
  /* <Input
id="createTitle"
type="text"
name="title"
value={formData.title}
onChange={handleChange}
placeholder="약먹고 물먹기 vs 물먹고 약먹기"
/> */
}
