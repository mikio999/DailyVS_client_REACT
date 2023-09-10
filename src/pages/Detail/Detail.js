import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const Detail = () => {
  const [voteDetail, setVoteDetail] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  useEffect(() => {
    fetch('/data/vote_list.json')
      .then(response => response.json())
      .then(result => {
        setVoteDetail(result);
      });
  }, []);
  const location = useLocation();
  const pathnameParts = location.pathname.split('/');
  const id = pathnameParts[pathnameParts.length - 1];
  const selectedVoteDetail = voteDetail[id - 1];

  const handleOptionChange = event => {
    setSelectedOption(event.target.value);
  };

  const handleVoteSubmit = () => {
    console.log('Selected Option:', selectedOption);
  };

  return (
    <DetailContainer>
      {selectedVoteDetail ? (
        <>
          <DetailTitle>{selectedVoteDetail.name}</DetailTitle>
          <DetailExplain>{selectedVoteDetail.explain}</DetailExplain>
          <DetailImage
            src={selectedVoteDetail.url}
            alt={selectedVoteDetail.name}
          />
          <DetailOptionName>
            <DetailOption
              type="radio"
              name="option"
              value={selectedVoteDetail.option_1}
              checked={selectedOption === selectedVoteDetail.option_1}
              onChange={handleOptionChange}
            />
            {selectedVoteDetail.option_1}
          </DetailOptionName>
          <DetailOptionName>
            <DetailOption
              type="radio"
              name="option"
              value={selectedVoteDetail.option_2}
              checked={selectedOption === selectedVoteDetail.option_2}
              onChange={handleOptionChange}
            />
            {selectedVoteDetail.option_2}
          </DetailOptionName>
          <DetailSubmitBtn onClick={handleVoteSubmit}>투표하기</DetailSubmitBtn>
        </>
      ) : (
        <p>Vote not found</p>
      )}
    </DetailContainer>
  );
};

export default Detail;

const DetailContainer = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px auto;
`;

const DetailTitle = styled.h1`
  display: flex;
  text-align: center;
  align-items: center;
  font-size: 24px;
  margin: 10px auto;
`;

const DetailExplain = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  font-size: 16px;
  margin: 10px auto;
`;

const DetailImage = styled.img`
  margin: 10px auto;
  width: 450px;
  height: 250px;
  object-fit: cover;
`;

const DetailOptionName = styled.div``;
const DetailOption = styled.input``;
const DetailSubmitBtn = styled.button``;
