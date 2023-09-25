import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import html2canvas from 'html2canvas';
import ResultTop from './ResultTop/ResultTop';
import TotalGraph from './ResultTop/TotalGraph';
import ResultGraph from './ResultGraph/ResultGraph';
import ResultAnalysis from './ResultTop/ResultAnalysis';
import AnalysisChart from './ResultGraph/AnalysisChart';
import ResultBtn from './ResultBtn/ResultBtn';

const Result = () => {
  const [voteResult, setVoteResult] = useState([]);
  const resultRef = useRef(null);

  useEffect(() => {
    fetch('/data/vote_result.json')
      .then(response => response.json())
      .then(result => {
        setVoteResult(result);
      });
  }, []);

  const handleCapture = () => {
    html2canvas(resultRef.current, { scale: 4 }).then(canvas => {
      const capturedImage = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = capturedImage;
      link.download = 'result_capture.png';
      link.click();
    });
  };

  return (
    <ResultContainer>
      <CaptureContainer ref={resultRef}>
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
      </CaptureContainer>
      <ResultBtn onCapture={handleCapture} />
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

const CaptureContainer = styled.div``;
