import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../AuthContext';

const Detail = () => {
  const [voteDetail, setVoteDetail] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const { detailId } = useParams();
  const { user } = useAuth();
  console.log({ user });
  const location = useLocation();

  // useEffect(() => {
  //   fetch(`http://127.0.0.1:8000/api/${detailId}`)
  //     .then(response => response.json())
  //     .then(result => {
  //       setVoteDetail(result);
  //       console.log(result);
  //     });
  // }, []);

  useEffect(() => {
    fetch('/data/data.json')
      .then(response => response.json())
      .then(result => {
        setVoteDetail(result);
        console.log(result);
      });
  }, []);

  const handleOptionChange = event => {
    setSelectedOption(event.target.value);
    console.log(selectedOption);
  };

  const navigate = useNavigate();
  const handleVoteSubmit = e => {
    e.preventDefault();
    console.log('Selected Option:', selectedOption);
    if (user) {
      // 로그인된 경우
      navigate(`/vote-result/${detailId}`);
    } else {
      // 로그인되지 않은 경우
      const nextLocation = `/vote-detail-gender/${detailId}`;
      navigate(nextLocation, { state: { prevLocation: location.pathname } });
    }
  };

  const handleOptionSelect = selectedOption => {
    const nextLocation = `/vote-detail-gender/${detailId}?selectedOption=${selectedOption}`;
    navigate(nextLocation);
  };

  const isFormValid = () => {
    return selectedOption !== '';
  };

  // const handleVoteSubmit = () => {

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
  //         if (user) {
  //           // 로그인된 경우
  //           navigate(`/vote-result/${detailId}`);
  //         } else {
  //           // 로그인되지 않은 경우
  //            navigate(`/vote-detail-gender/${detailId}`);
  //         }
  //       } else {
  //         console.error('투표 처리 실패');
  //       }
  //     });
  // };

  return (
    <DetailContainer>
      {voteDetail ? (
        <>
          <DetailTitle>{voteDetail.name}</DetailTitle>
          <DetailImage src={voteDetail.url} alt={voteDetail.name} />
          <DetailExplain>{voteDetail.explain}</DetailExplain>
          <DetailOption
            className="radio-input"
            type="radio"
            name="option"
            value="option_1"
            checked={selectedOption === 'option_1'}
            onChange={e => handleOptionChange(e)}
            id="option1-radio"
          />

          <DetailOptionName
            htmlFor="option1-radio"
            className={selectedOption === 'option_1' ? 'selected' : ''}
            onClick={() => setSelectedOption('option_1')}
            style={{ backgroundImage: `url("${voteDetail.option_1_url}")` }}
          >
            <VoteNameWhite>{voteDetail.option_1}</VoteNameWhite>
          </DetailOptionName>
          <VSWord>
            <VSRed>V</VSRed>
            <VSBlue>S</VSBlue>
          </VSWord>
          <DetailOption
            className="radio-input"
            type="radio"
            name="option"
            value="option_2"
            checked={selectedOption === 'option_2'}
            onChange={e => handleOptionChange(e)}
            id="option2-radio"
          />
          <DetailOptionName
            htmlFor="option2-radio"
            className={selectedOption === 'option_2' ? 'selected' : ''}
            onClick={() => setSelectedOption('option_2')}
            style={{ backgroundImage: `url("${voteDetail.option_2_url}")` }}
          >
            <VoteNameWhite>{voteDetail.option_2}</VoteNameWhite>
          </DetailOptionName>
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

const DetailTitle = styled.h1`
  font-family: 'GongGothicMedium';
  display: flex;
  text-align: center;
  align-items: center;
  font-size: 30px;
  margin: 30px auto 10px auto;
  color: #17355a;
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

const DetailOptionName = styled.div`
  display: flex;
  margin: 10px auto;
  border: 1px rgba(128, 128, 128, 0.2) solid;
  height: 200px;
  width: 350px;
  position: relative;
  color: white;
  cursor: pointer;
  background-size: cover;
  background-position: center;
  transition: border 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  &:hover {
    border: 15px #ff495a solid;
  }
`;

const VoteNameWhite = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  font-size: 40px;
  font-family: 'GongGothicLight';
  color: white;
  z-index: 3;
`;

const VSWord = styled.div`
  font-size: 30px;
  display: flex;
  font-family: 'GongGothicMedium';
  margin: 0 auto;
`;

const VSRed = styled.div`
  color: #ff495a;
`;

const VSBlue = styled.div`
  color: #17355a;
`;

const DetailOption = styled.input`
  display: none;

  &:checked + ${DetailOptionName} {
    border: 15px #ff495a solid;
  }
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
