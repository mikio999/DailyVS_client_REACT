import React from 'react';
import styled from 'styled-components';

const OptionCard = ({
  voteDetail,
  selectedOption,
  setSelectedOption,
  selectedChoice,
  setSelectedChoice,
}) => {
  const isAuth = localStorage.getItem('access');

  if (!isAuth) {
    setSelectedChoice('');
    setSelectedOption('');
    console.log('slsc', selectedChoice, selectedOption);
  }

  const handleOptionChange = index => {
    setSelectedOption(index);
    setSelectedChoice(index);
  };

  return (
    <DetailContainer>
      {voteDetail && voteDetail?.poll?.choices ? (
        voteDetail?.poll?.choices.map((choice, index) => {
          const isSelected = index === selectedOption;
          return (
            <OptionCardContainer key={choice.id}>
              <DetailOption
                className="radio-input"
                type="radio"
                name="option"
                value={choice.id}
                checked={isSelected}
                onChange={() => handleOptionChange(index)}
                id={choice.id}
              />

              <DetailOptionName
                htmlFor={choice.id}
                className={isSelected ? 'selected' : ''}
                onClick={() => {
                  setSelectedOption(index);
                  setSelectedChoice(choice.id);
                }}
              >
                <VoteName>{choice.choice_text}</VoteName>
              </DetailOptionName>
              {index < voteDetail.poll.choices.length - 1 && (
                <VSWord>
                  <VSRed>V</VSRed>
                  <VSBlue>S</VSBlue>
                </VSWord>
              )}
            </OptionCardContainer>
          );
        })
      ) : (
        <p>Choice text not available</p>
      )}
    </DetailContainer>
  );
};

export default OptionCard;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f8f8ff;
`;

const OptionCardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const DetailOptionName = styled.div`
  display: flex;
  margin: 15px auto;
  min-height: 60px;
  max-width: 350px;
  min-width: 350px;
  padding: 10px;
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
