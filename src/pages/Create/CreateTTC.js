import React, { useState } from 'react';
import styled from 'styled-components';

function CreateTTC({ formData, setFormData }) {
  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(name, value);
  };
  return (
    <Container>
      <Thumbnail src={'images/Nav/unLogged.png'} alt={'test'} />
      <CreateBottom>
        <div>
          <label for="createTitle">제목:</label>
          <Input
            id="createTitle"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="약먹고 물먹기 vs 물먹고 약먹기"
          />
        </div>
        <div>
          <label for="createContent">투표 설명: </label>
          <Input
            id="createContent"
            type="text"
            name="content"
            value={formData.content}
            onChange={handleInputChange}
            placeholder="당신의 선택은?"
          />
        </div>
      </CreateBottom>
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
const Thumbnail = styled.img`
  margin: 10px auto 0 auto;
  width: 100%;
  height: 360px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  object-fit: cover;
  box-shadow:
    rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;
const CreateBottom = styled.div`
  width: min(100%, 400px);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 20px;
  box-shadow:
    rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

  & > div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;
const Input = styled.input`
  font-family: 'GongGothicMedium';
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: #17355a;
  padding: 7px 12px;
  margin: 5px;
  flex: 1;

  &::placeholder {
    color: lightgray;
  }
`;

export default CreateTTC;
