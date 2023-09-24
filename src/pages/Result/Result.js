import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ResultTop from './ResultTop';
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
      <ResultTop voteResult={voteResult} />
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
