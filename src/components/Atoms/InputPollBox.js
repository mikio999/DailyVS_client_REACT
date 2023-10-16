import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import Versus from './VersusText';
import DeleteBtn from './DeleteBtn';

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
        <Choice
          type="text"
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
