import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../../AuthContext';
import DetailCard from './DetailCard';
import OptionCard from './OptionCard';

const Detail = () => {
  const [voteDetail, setVoteDetail] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const params = useParams();
  const detailId = params.id;
  const { user } = useAuth();
  const location = useLocation();

  useEffect(() => {
    if (detailId) {
      fetch(`http://127.0.0.1:8000/${detailId}`)
        .then(response => response.json())
        .then(result => {
          setVoteDetail(result);
        });
    }
  }, [detailId]);

  const handleOptionChange = event => {
    setSelectedOption(event.target.value);
  };

  const navigate = useNavigate();
  const handleVoteSubmit = e => {
    e.preventDefault();

    if (user) {
      // 로그인된 경우
      navigate(`/vote-result/${detailId}`);
    } else {
      // 로그인되지 않은 경우
      const nextLocation = `/vote-detail-gender/${detailId}`;
      navigate(nextLocation, { state: { prevLocation: location.pathname } });
    }
  };

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
          <DetailSubmitBtn onClick={handleVoteSubmit} disabled={!isFormValid()}>
            투표하기
          </DetailSubmitBtn>
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
  border-radius: 15px;
  &:hover {
    cursor: pointer;
  }
`;
