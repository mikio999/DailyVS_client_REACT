import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ResultTop = ({ voteResult }) => {
  return (
    <ResultTopContainer>
      <ResultTitle>{voteResult.name}</ResultTitle>
      <ResultExplanation>{voteResult.explain}</ResultExplanation>
      <ResultPercentage>
        <Option>
          <FirstCircle></FirstCircle>
          <Percentage>{voteResult.option_1_percentage} %</Percentage>
          <OptionName>{voteResult.option_1}</OptionName>
        </Option>
        <Option>
          <SecondCircle></SecondCircle>
          <Percentage>{voteResult.option_2_percentage} %</Percentage>
          <OptionName>{voteResult.option_2}</OptionName>
        </Option>
      </ResultPercentage>
      <ResultTotalPeople>
        <ResultTotal>총 투표수:</ResultTotal>
        <TotalPeople>{voteResult.total_count}</TotalPeople>
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

const ResultPercentage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const Option = styled.div`
  display: grid;
  grid-template-columns: 50px 100px 200px;
  margin-top: 5px;
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
  font-size: 18px;
  color: ${props => props.theme.colors.redpinkPrimaryColor};
`;

const FirstCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.darkbluePrimaryColor};
  width: 25px;
  height: 25px;
  border-radius: 50%;
`;

const SecondCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.redpinkPrimaryColor};
  width: 25px;
  height: 25px;
  border-radius: 50%;
`;

const ResultTotalPeople = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  font-size: 18px;
`;

const ResultTotal = styled.div`
  font-family: 'GongGothicMedium';
  color: ${props => props.theme.colors.darkbluePrimaryColor};
`;
const TotalPeople = styled.div`
  margin-left: 10px;
  color: ${props => props.theme.colors.redpinkPrimaryColor};
`;
