import React from 'react';
import styled from 'styled-components';

const ResultTop = ({ voteResult }) => {
  const getChartColors = length => {
    if (length === 2) {
      return ['#17355a', '#ff495a'];
    } else {
      return ['#17355a', '#457c9e', '#a7dcdd', '#D9D9D9', '#4F4F4F'];
    }
  };

  const choiceColors = getChartColors(voteResult?.poll?.choices?.length);

  const total_choices = voteResult?.statistics?.choice;
  const total_choicesArray = [];

  for (let i = 1; i <= 5; i++) {
    const choiceKey = `choice${i}`;
    if (total_choices?.hasOwnProperty(choiceKey)) {
      total_choicesArray.push(total_choices[choiceKey]);
    }
  }

  return (
    <ResultTopContainer>
      <ResultTitle>{voteResult.poll?.title}</ResultTitle>
      <ResultExplanation>{voteResult.poll?.content}</ResultExplanation>
      <Information>
        {voteResult.poll?.choices.map((choice, index) => (
          <Option key={index}>
            <ChoiceCircle
              style={{ backgroundColor: choiceColors[index] || '#D9D9D9' }}
            />
            <Percentage>{total_choicesArray[index]} %</Percentage>
            <OptionName>{choice.choice_text}</OptionName>
          </Option>
        ))}
      </Information>
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
`;

const ResultTitle = styled.h1`
  word-break: keep-all;
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 20px;
  font-size: 28px;
  font-family: 'GongGothicMedium';
  color: ${props => props.theme.colors.darkbluePrimaryColor};
`;

const ResultExplanation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 10px;
  padding: 0 20px;
  font-size: 16px;
  word-break: keep-all;
  color: ${props => props.theme.colors.grayColor};
`;

const Option = styled.div`
  display: grid;
  grid-template-columns: 35% 20% 45%;
  width: 100vw;
  margin: 5px auto;
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const OptionName = styled.div`
  display: flex;
  justify-content: start;
  margin-left: 0;
  align-items: center;
  font-size: 16px;
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
  margin-left: auto;
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
