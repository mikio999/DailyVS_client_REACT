import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import Versus from '../Atoms/VersusText';
import DeleteBtn from '../Atoms/DeleteBtn';
import InputBox from '../Atoms/InputBox';

function InputPollBox({
  value = '',
  index,
  readOnly = false,
  deleteBtn = false,
}) {
  return (
    <>
      <Versus index={index} />
      <div style={{ position: 'relative' }}>
        <InputBox
          value={value}
          placeholder={`선택지 ${index + 1}`}
          readOnly={readOnly}
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
