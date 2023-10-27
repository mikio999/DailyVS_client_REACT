import React from 'react';
import styled from 'styled-components';

const choiceColors = ['#17355a', '#457c9e', '#a7dcdd', '#D9D9D9', '#4F4F4F'];

const ResultTop = ({ voteResult }) => {
  return (
    <ResultTopContainer>
      <ResultTitle>{voteResult.poll?.title}</ResultTitle>
      <ResultExplanation>{voteResult.poll?.content}</ResultExplanation>
      {voteResult.poll?.choices.map((choice, index) => (
        <Option key={index}>
          <ChoiceCircle
            style={{ backgroundColor: choiceColors[index] || '#D9D9D9' }}
          />
          <Percentage>
            {voteResult?.statistics?.[`choice${index + 1}_percentage`]} %
          </Percentage>
          <OptionName>{choice.choice_text}</OptionName>
        </Option>
      ))}
      <ResultTotalPeople>
        <ResultTotal>총 투표수:</ResultTotal>
        <TotalPeople>{voteResult.statistics?.total_count}</TotalPeople>
        <ResultTotal>건</ResultTotal>
      </ResultTotalPeople>
    </ResultTopContainer>
  );
};

export default ResultTop;

const ResultTopContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 500px;
`;

const ResultTitle = styled.h1`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  font-size: 28px;
  font-family: 'GongGothicMedium';
  color: ${props => props.theme.colors.darkbluePrimaryColor};
`;

const ResultExplanation = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  font-size: 16px;
  color: ${props => props.theme.colors.grayColor};
`;

const Option = styled.div`
  display: grid;
  grid-template-columns: 50px 100px 200px;
  margin-top: 10px;
  margin-left: 100px;
`;

const OptionName = styled.div`
  display: flex;
  justify-content: start;
  padding-left: 20px;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  color: ${props => props.theme.colors.grayColor};
`;

const Percentage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  font-size: 16px;
  color: ${props => props.theme.colors.redpinkPrimaryColor};
`;

const ChoiceCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  border-radius: 50%;
`;

const ResultTotalPeople = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  font-size: 16px;
`;

const ResultTotal = styled.div`
  font-family: 'GongGothicMedium';
  color: ${props => props.theme.colors.darkbluePrimaryColor};
`;

const TotalPeople = styled.div`
  margin-left: 10px;
  margin-right: 5px;
  color: ${props => props.theme.colors.redpinkPrimaryColor};
`;
