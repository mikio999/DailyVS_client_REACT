import React, { useState } from 'react';
import styled from 'styled-components';

const OptionCard = ({ voteDetail, selectedOption, setSelectedOption }) => {
  const handleOptionChange = event => {
    setSelectedOption(event.target.value);
  };

  return (
    <DetailContainer>
      {voteDetail && voteDetail.choice_text ? (
        voteDetail.choice_text.map((choice, index) => (
          <OptionCardContainer key={index}>
            <DetailOption
              className="radio-input"
              type="radio"
              name="option"
              value={`option_${index + 1}`}
              checked={selectedOption === `option_${index + 1}`}
              onChange={e => handleOptionChange(e)}
              id={`option${index + 1}-radio`}
            />

            <DetailOptionName
              htmlFor={`option${index + 1}-radio`}
              className={
                selectedOption === `option_${index + 1}` ? 'selected' : ''
              }
              onClick={() => setSelectedOption(`option_${index + 1}`)}
            >
              <VoteName>{choice}</VoteName>
            </DetailOptionName>
            {index < voteDetail.choice_text.length - 1 && (
              <VSWord>
                <VSRed>V</VSRed>
                <VSBlue>S</VSBlue>
              </VSWord>
            )}
          </OptionCardContainer>
        ))
      ) : (
        <p>Choice text not available</p>
      )}
    </DetailContainer>
  );
};

export default OptionCard;

const DetailContainer = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  background-color: #f8f8ff;
`;

const OptionCardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const DetailOptionName = styled.div`
  display: flex;
  margin: 15px auto;
  height: 60px;
  width: 350px;
  position: relative;
  color: black;
  background-color: white;
  cursor: pointer;
  transition: border 0.3s ease;
  box-shadow:
    rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

  &:hover {
    border: 10px #ff495a solid;
  }
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
    border: 10px #ff495a solid;
  }
`;

const VoteName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  font-family: 'GongGothicMedium';
  font-size: 28px;
`;
