import React, { useRef } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { setCategory } from '../../../actions/actions';
import SubmitBtn from './SubmitBtn';
import useClickEffect from '../../../utils/hooks/useClickEffect';

const RegisterBtn = ({ isFormValid }) => {
  const ref = useRef(null);
  const { handleBtnMD, handleBtnMU, handleBtnME, handleBtnML } =
    useClickEffect(ref);
  const params = useParams();
  const navigate = useNavigate();
  const detailId = params.id;
  const dispatch = useDispatch();

  const selectedCategory = useSelector(
    state => state.category.selectedCategory,
  );

  const handleRegisterClick = () => {
    if (selectedCategory.length > 0) {
      const currentCategory = selectedCategory[0];

      if (currentCategory === 'gender') {
        navigate(`/vote-detail/gender/${detailId}`);
      } else if (currentCategory === 'mbti') {
        navigate(`/vote-detail/mbti/${detailId}`);
      } else if (currentCategory === 'age') {
        navigate(`/vote-detail/age/${detailId}`);
      }

      const remainingCategories = selectedCategory.slice(1);
      dispatch(setCategory(remainingCategories));
    }
  };
  return selectedCategory?.length === 0 ? (
    <SubmitBtn isFormValid={isFormValid} />
  ) : (
    <RegisterButton
      ref={ref}
      onMouseDown={handleBtnMD}
      onMouseUp={handleBtnMU}
      onMouseEnter={handleBtnME}
      onMouseLeave={handleBtnML}
      onClick={handleRegisterClick}
      disabled={!isFormValid()}
    >
      등록하기
    </RegisterButton>
  );
};

export default RegisterBtn;

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
