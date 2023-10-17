import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../../AuthContext';
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
  const { user } = useAuth();
  const location = useLocation();

  // const user = 'mikio';
  const handleDispatch = selectedOption => {
    dispatch(setOption(voteDetail.poll?.choices[selectedOption]));
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
  const navigate = useNavigate();
  const selectedCategoryP = useSelector(
    state => state.category.selectedCategory,
  );

  // const handleVoteSubmit = e => {
  //   e.preventDefault();

  //   if (isAuthenticated) {
  //     // 로그인된 경우
  //     navigate(`/vote-result/${detailId}`);
  //   } else {
  //     // 로그인되지 않은 경우
  //     const nextLocation = `/vote-detail/gender/${detailId}`;
  //     navigate(nextLocation, { state: { prevLocation: location.pathname } });
  //   }
  // };

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
          {isAuthenticated ? ( // 유저가 로그인한 경우
            <SubmitBtn />
          ) : (
            // 로그인하지 않은 경우
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
