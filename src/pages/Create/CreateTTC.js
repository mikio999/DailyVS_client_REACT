import React from 'react';
import styled from 'styled-components';
import TextareaWithLimit from '../../components/Atoms/Textarea';
import HeaderText from '../../components/Atoms/HeaderText';

function CreateTTC({ formData, setFormData }) {
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(name, value);
  };

  return (
    <Container>
      <HeaderText content="투표 만들기" />
      <Thumbnail src={'images/Nav/unLogged.png'} alt={'test'} />
      <CreateBottom>
        <Wrapper>
          <label for="createTitle">제목:</label>
          <Input
            id="createTitle"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="약먹고 물먹기 vs 물먹고 약먹기"
          />
        </Wrapper>

        <TextareaWithLimit
          id="createContent"
          name="content"
          value={formData.content}
          onChange={handleChange}
          placeholder="당신의 선택은?"
          max={100}
          label={'투표 설명'}
        />
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
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: #17355a;
  padding: 7px 12px;
  margin: 5px 0 10px 0;
  flex: 1;
  border: 2px solid black;

  &::placeholder {
    color: lightgray;
  }
`;

export default CreateTTC;
