import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ResultGraph from './ResultGraph/ResultGraph';

const Result = () => {
  const [voteResult, setVoteResult] = useState([]);

  useEffect(() => {
    fetch('/data/vote_result.json')
      .then(response => response.json())
      .then(result => {
        setVoteResult(result);
      });
  }, []);

  return (
    <ResultContainer>
      <ResultTitle>{voteResult.name}</ResultTitle>
      <ResultExplanation>{voteResult.explain}</ResultExplanation>
      <ResultPercentage>
        <FirstOption>
          <FirstOptionName>{voteResult.option_1}</FirstOptionName>
          <FirstPercentage>{voteResult.option_1_percentage} %</FirstPercentage>
        </FirstOption>
        <SecondOption>
          <SecondOptionName>{voteResult.option_2}</SecondOptionName>
          <SecondPercentage>
            {voteResult.option_2_percentage} %
          </SecondPercentage>
        </SecondOption>
      </ResultPercentage>

      <ResultGraph voteResult={voteResult} />
    </ResultContainer>
  );
};

export default Result;

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  width: 500px;
`;

const ResultTitle = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 24px;
`;

const ResultExplanation = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  font-size: 20px;
`;

const ResultPercentage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const FirstOption = styled.div`
  display: flex;
  flex-direction: row;
`;

const FirstOptionName = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

const FirstPercentage = styled.span`
  margin-left: 5px;
  font-size: 18px;
`;

const SecondOption = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

const SecondOptionName = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

const SecondPercentage = styled.span`
  margin-left: 5px;
  font-size: 18px;
`;
