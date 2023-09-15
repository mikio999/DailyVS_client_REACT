import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';

const Detail = () => {
  const [voteDetail, setVoteDetail] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/')
      .then(response => response.json())
      .then(result => {
        setVoteDetail(result);
        console.log(result);
      });
  }, []);
  const location = useLocation();
  const pathnameParts = location.pathname.split('/');
  const id = pathnameParts[pathnameParts.length - 1];
  const selectedVoteDetail = voteDetail[id - 1];

  const handleOptionChange = event => {
    setSelectedOption(event.target.value);
  };

  const navigate = useNavigate();
  const handleVoteSubmit = () => {
    console.log('Selected Option:', selectedOption);
    navigate(`/vote-result/${id}`);
  };

  // const handleVoteSubmit = () => {
  //   // 선택한 옵션 데이터를 백엔드로 전송
  //   fetch('/api/vote', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ selectedOption }),
  //   })
  //     .then(response => response.json())
  //     .then(result => {
  //       console.log('Selected Option:', selectedOption);
  //       if (result.success) {
  //         // 선택한 투표의 ID를 결과 페이지로 전달
  //         navigate(`/vote-result/${id}`);
  //       } else {
  //         console.error('투표 처리 실패');
  //       }
  //     });
  // };

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
