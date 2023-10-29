import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

const SubmitBtn = ({ isFormValid }) => {
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const navigate = useNavigate();
  const detailId = params.id;

  const selectedOption = useSelector(state => state.option.selectedOption);
  const selectedGender = useSelector(state => state.gender.selectedGender);
  const selectedMBTI = useSelector(state => state.mbti.selectedMBTI);
  const selectedAge = useSelector(state => state.age.selectedAge);
  const selectedCategoryList = useSelector(
    state => state.categoryList.selectedCategoryList,
  );

  const handleInformationClick = () => {
    setIsLoading(true);
    fetch(`http://127.0.0.1:8000/${detailId}/poll_result_page`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        choice_id: selectedOption,
        category_list: selectedCategoryList,
        gender: selectedGender,
        mbti: selectedMBTI,
        age: selectedAge,
      }),
    })
      .then(response => response.json())
      .then(result => {
        console.log('서버 응답:', result);
        console.log(
          'Request Body:',
          JSON.stringify({
            choice_id: selectedOption,
            category_list: selectedCategoryList,
            gender: selectedGender,
            mbti: selectedMBTI,
            age: selectedAge,
          }),
        );
        if (result) {
          navigate(`/vote-result/${detailId}`);
        }
      })
      .catch(error => {
        setIsLoading(false);
        console.error('POST 요청 오류:', error);
      });
  };

  return (
    <RegisterButton onClick={handleInformationClick} disabled={!isFormValid()}>
      투표하기
    </RegisterButton>
  );
};

export default SubmitBtn;

const RegisterButton = styled.button`
  justify-content: center;
  align-items: center;
  margin: 40px auto;
  width: 300px;
  height: 50px;
  font-size: 24px;
  background-color: ${props => (props.disabled ? '#BDBDBD' : '#17355a')};
  color: white;
  border: none;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
  }
`;
