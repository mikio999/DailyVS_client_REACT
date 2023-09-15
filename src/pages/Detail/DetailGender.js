import React, { useState } from 'react';
import styled from 'styled-components';

const DetailGender = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const handleOptionChange = e => {
    setSelectedOption(e.target.value);
  };
  console.log(selectedOption);
  return (
    <DetailGenderContainer>
      <GenderQuestion>당신의 성별은?</GenderQuestion>
      <GenderOptionContainer>
        <GenderOptionName>
          <GenderOption
            type="radio"
            name="option"
            value="man"
            checked="man"
            onChange={handleOptionChange}
          />
          남성
        </GenderOptionName>
        <GenderOptionName>
          <GenderOption
            type="radio"
            name="option"
            value="woman"
            checked="woman"
            onChange={handleOptionChange}
          />
          여성
        </GenderOptionName>
      </GenderOptionContainer>
      <GenderButton>등록하기</GenderButton>
    </DetailGenderContainer>
  );
};

export default DetailGender;

const DetailGenderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  width: 500px;
  min-height: 800px;
`;

const GenderQuestion = styled.h1`
  margin: 30px auto 10px;
  font-size: 28px;
`;

const GenderOptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const GenderOptionName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  font-size: 24px;
`;
const GenderOption = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
`;

const GenderButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
  width: 300px;
  height: 50px;
  font-size: 24px;
`;
