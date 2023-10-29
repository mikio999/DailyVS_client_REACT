import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { setGender, setAge, setMBTI } from '../../actions/actions';

const AuthSubmitBtn = ({ isFormValid }) => {
  const params = useParams();
  const navigate = useNavigate();
  const detailId = params.id;
  const dispatch = useDispatch();
  const [userInformation, setUserInformation] = useState('');

  const selectedOption = useSelector(state => state.option.selectedOption);
  const selectedGender = useSelector(state => state.gender.selectedGender);
  const selectedMBTI = useSelector(state => state.mbti.selectedMBTI);
  const selectedAge = useSelector(state => state.age.selectedAge);
  const selectedCategoryList = useSelector(
    state => state.categoryList.selectedCategoryList,
  );

  useEffect(() => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const accessToken = localStorage.getItem('access');
    if (accessToken) {
      headers.append('Authorization', `Bearer ${accessToken}`);
    }

    const requestOptions = {
      method: 'GET',
      headers: headers,
    };

    fetch(`http://127.0.0.1:8000/accounts/user_info/`, requestOptions)
      .then(response => response.json())
      .then(response => console.log(response))
      .then(result => {
        setUserInformation(result);
      });
  }, []);

  dispatch(setAge(userInformation?.age));
  dispatch(setMBTI(userInformation?.mbti));
  dispatch(setGender(userInformation?.gender));

  const handleInformationClick = () => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const accessToken = localStorage.getItem('access');
    if (accessToken) {
      headers.append('Authorization', `Bearer ${accessToken}`);
    }

    const requestOptions = {
      method: 'POST',
      headers: 'application/json',
      body: JSON.stringify({
        choice_id: selectedOption,
        category_list: selectedCategoryList,
        gender: selectedGender,
        mbti: selectedMBTI,
        age: selectedAge,
      }),
    };

    fetch(`http://localhost:8000/${detailId}/poll_result_page`, requestOptions)
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
        console.error('POST 요청 오류:', error);
      });
  };

  return (
    <RegisterButton onClick={handleInformationClick} disabled={!isFormValid()}>
      투표하기
    </RegisterButton>
  );
};

export default AuthSubmitBtn;

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
