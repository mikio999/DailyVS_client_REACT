import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
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

  const location = useLocation();
  const pathnameParts = location.pathname.split('/');
  const id = pathnameParts[pathnameParts.length - 1];
  const selectedVoteResult = voteResult[id - 1];

  return (
    <ResultContainer>
      {selectedVoteResult ? (
        <>
          <ResultTitle>{selectedVoteResult.name}</ResultTitle>
          <ResultExplanation>{selectedVoteResult.explain}</ResultExplanation>
          <ResultPercentage>
            <FirstOption>
              <FirstOptionName>{selectedVoteResult.option_1}</FirstOptionName>
              <FirstPercentage>
                {selectedVoteResult.option_1_percentage} %
              </FirstPercentage>
            </FirstOption>
            <SecondOption>
              <SecondOptionName>{selectedVoteResult.option_2}</SecondOptionName>
              <SecondPercentage>
                {selectedVoteResult.option_2_percentage} %
              </SecondPercentage>
            </SecondOption>
          </ResultPercentage>
        </>
      ) : (
        <p>Result not found</p>
      )}
      <ResultGraph selectedVoteResult={selectedVoteResult} />
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
