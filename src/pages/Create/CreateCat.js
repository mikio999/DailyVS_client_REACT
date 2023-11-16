import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import HeaderText from '../../components/Atoms/HeaderText';
import HeaderSubText from '../../components/Atoms/HeaderSubText';
import InputCatBox from '../../components/Molecules/InputCatBox';

function CreateCat({ formData, setFormData }) {
  const [selectedCat, setSelectedCat] = useState([1, 2]);

  useEffect(() => {
    const transformedArr = selectedCat.map(item => ({ id: item }));
    setFormData({
      ...formData,
      category: transformedArr,
    });

  }, [selectedCat]);

  const catProps = {
    selectedCat,
    setSelectedCat,
  };
  return (
    <Container>
      <HeaderText content="분석 카테고리" />
      <HeaderSubText content="통계 및 분석하고 싶은 카테고리 (다중선택가능)" />
      <Categories>
        <InputCatBox value={'성별'} placeholder={'성별'} id={1} {...catProps}/>
        <InputCatBox value={'MBTI'} placeholder={'MBTI'} id={2} {...catProps}/>
        <InputCatBox
          value={'연령대'}
          placeholder={'연령대'}
          id={3}
          {...catProps}
        />
      </Categories>
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
`;
const Categories = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 20px 0;
`;
export default CreateCat;
