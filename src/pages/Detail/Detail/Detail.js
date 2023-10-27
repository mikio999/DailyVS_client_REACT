import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import DetailCard from './DetailCard';
import OptionCard from './OptionCard';
import {
  setOption,
  setCategory,
  setCategoryList,
} from '../../../actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import RegisterBtn from '../../../components/Molecules/RegisterBtn';
import SubmitBtn from '../../../components/Molecules/SubmitBtn';

const Detail = () => {
  const dispatch = useDispatch();

  const [voteDetail, setVoteDetail] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const params = useParams();
  const detailId = params.id;

  console.log(selectedOption);
  const handleDispatch = selectedOption => {
    dispatch(setOption(selectedOption + 1));
  };

  handleDispatch(selectedOption);
  const handleCategoryDispatch = selectedCategory => {
    dispatch(setCategory(selectedCategory));
  };

  const selectedCategory = voteDetail.category_list;
  handleCategoryDispatch(selectedCategory);

  const handleCategoryListDispatch = selectedCategoryList => {
    dispatch(setCategoryList(selectedCategoryList));
  };
  handleCategoryListDispatch(selectedCategory);

  useEffect(() => {
    if (detailId) {
      fetch(`http://localhost:8000/${detailId}`)
        .then(response => response.json())
        .then(result => {
          setVoteDetail(result);
          console.log(result);
        });
    }
  }, [detailId]);
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const isFormValid = () => {
    return selectedOption !== '';
  };

  return (
    <DetailContainer>
      {voteDetail ? (
        <>
          <DetailCard voteDetail={voteDetail} />
          <OptionCard
            voteDetail={voteDetail}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
          {isAuthenticated ? (
            <SubmitBtn isFormValid={isFormValid} />
          ) : (
            <RegisterBtn isFormValid={isFormValid} />
          )}
        </>
      ) : (
        <p>Vote not found</p>
      )}
    </DetailContainer>
  );
};

export default Detail;

const DetailContainer = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  background-color: #f8f8ff;
`;

const DetailSubmitBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
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
