import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import HeaderText from '../../components/Atoms/HeaderText';
import InputPollBox from '../../components/Molecules/InputPollBox';
import Versus from '../../components/Atoms/VersusText';
import Plus from '../../components/Atoms/Plus';
import HeaderSubText from '../../components/Atoms/HeaderSubText';
import useClickEffect from '../../utils/hooks/useClickEffect';

const AddChoice = ({ value, index, handleClick }) => {
  const refPlus = useRef(null);
  const {
    handleBtnMD: buttonMD,
    handleBtnMU: buttonMU,
    handleBtnME: buttonME,
    handleBtnML: buttonML,
  } = useClickEffect(refPlus);
  const refPlusText = useRef(null);
  const { handleBtnMD, handleBtnMU, handleBtnME, handleBtnML } =
    useClickEffect(refPlusText);
  if (index < 5) {
    return (
      <>
        <PlusWrap onClick={handleClick}>
          <div style={{ opacity: 0, cursor: 'default' }}>
            <HeaderSubText content={'선택지 추가하기'} />
          </div>
          <div
            ref={refPlus}
            style={{ transition: '0.3s' }}
            onMouseDown={handleBtnMD}
            onMouseUp={handleBtnMU}
            onMouseEnter={handleBtnME}
            onMouseLeave={handleBtnML}
          >
            <Plus />
          </div>
          <div
            ref={refPlusText}
            style={{ cursor: 'pointer', transition: '0.3s', padding: 10 }}
            onMouseDown={() => {
              handleBtnMD();
              buttonMD();
            }}
            onMouseUp={() => {
              handleBtnMU();
              buttonMU();
            }}
            onMouseEnter={() => {
              handleBtnME();
              buttonME();
            }}
            onMouseLeave={() => {
              handleBtnML();
              buttonML();
            }}
          >
            <HeaderSubText content={'선택지 추가하기'} />
          </div>
        </PlusWrap>

        <OpacityWrap>
          <Versus />
          <InputPollBox value={value} index={index} readOnly={true} />
        </OpacityWrap>
      </>
    );
  }
};
const OpacityWrap = styled.div`
  opacity: 0.5;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: default;
`;
const PlusWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
  padding: 0 20px;
`;
function CreateChoice({ formData, setFormData }) {
  // const handleChange = e => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     choice: [
  //       {
  //         choice_text: value,
  //       },
  //     ],
  //   });
  // };
  const handleAddChoice = () => {
    setIndex(prev => prev + 1);
  };
  const [value, setValue] = useState(Array(5).fill(''));
  const [index, setIndex] = useState(1);
  const valueProps = {
    value,
    setValue,
  };
  useEffect(() => {
    const transformedValue = [];
    value.map(item => {
      if (item.length > 0) {
        transformedValue.push({ choice_text: item });
      }
    });
    setFormData({
      ...formData,
      choice: transformedValue,
    });
  }, [value]);

  let addedInputPollBoxes = [];
  const handleDelete = e => {
    const newValue = [...value];
    const Dindex =
      e.target.parentElement.parentElement.getAttribute('data-index');

    newValue[Dindex] = '';
    newValue.map((v, i) => {
      if (i > Dindex) {
        newValue[i - 1] = newValue[i];
        newValue[i] = '';
      }
    });
    setIndex(prev => prev - 1);
    setValue(newValue);
    console.log('value:', value);
  };
  for (let idx = 2; idx <= index; idx++) {
    addedInputPollBoxes.push(
      <InputPollBox
        key={idx}
        index={idx}
        deleteBtn={true}
        handleDelete={handleDelete}
        {...valueProps}
      />,
    );
  }
  return (
    <Container>
      <HeaderText content="투표 선택지" />
      <InputPollBox index={0} {...valueProps} />
      <InputPollBox index={1} {...valueProps} />
      {addedInputPollBoxes}
      <AddChoice
        value={value}
        index={index + 1}
        handleClick={handleAddChoice}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
  width: min(100%, 400px);
  gap: 10px;
  padding: 20px;
`;

export default CreateChoice;
