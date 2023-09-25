import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ResultTop from './ResultTop/ResultTop';
import TotalGraph from './ResultTop/TotalGraph';
import ResultGraph from './ResultGraph/ResultGraph';
import ResultAnalysis from './ResultTop/ResultAnalysis';
import AnalysisChart from './ResultGraph/AnalysisChart';
import ResultBtn from './ResultBtn/ResultBtn';

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
      <ResultTop voteResult={voteResult} />
      <TotalGraph voteResult={voteResult} />
      <ResultAnalysis
        SpecialKey={voteResult.special_key}
        Analysis={voteResult.analysis}
      />
      <AnalysisChart
        voteResult={voteResult}
        SpecialKey={voteResult.special_key}
      />
      <ResultBtn />
      <ResultGraph voteResult={voteResult} />
    </ResultContainer>
  );
};

export default Result;

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 500px;
  background-color: ${props => props.theme.colors.pinkBgColor};
`;
