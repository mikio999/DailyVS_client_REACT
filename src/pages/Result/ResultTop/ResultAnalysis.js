import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ResultAnalysis = ({ SpecialKey, Analysis }) => {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [showSpinner, setShowSpinner] = useState(true);
  const [analysisMessage, setAnalysisMessage] = useState('분석중...');

  useEffect(() => {
    if (Analysis) {
      let currentText = '';
      let index = 0;

      const typingInterval = setInterval(() => {
        if (index < Analysis.length) {
          currentText += Analysis[index];
          setTypedText(currentText);
          index++;
        } else {
          clearInterval(typingInterval);
          setTimeout(() => {
            setShowCursor(false);
            setAnalysisMessage('분석완료!');
            setShowSpinner(false);
          }, 2000);
        }
      }, 90);

      const cursorInterval = setInterval(() => {
        setShowCursor(prevShowCursor => !prevShowCursor);

        if (index >= Analysis.length) {
          clearInterval(cursorInterval);
          setShowCursor(false);
        }
      }, 500);

      return () => {
        clearInterval(typingInterval);
        clearInterval(cursorInterval);
      };
    }
  }, [Analysis]);

  return (
    <Container>
      <Analyzing>
        {showSpinner && (
          <div className="spinner-border text-secondary" role="status"></div>
        )}
        <Loading>{analysisMessage}</Loading>
      </Analyzing>
      <Analyze>
        {typedText}
        {showCursor && <Cursor>|</Cursor>}
      </Analyze>
    </Container>
  );
};

export default ResultAnalysis;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;

const Analyzing = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px auto;
  height: 30px;
`;

const Loading = styled.div`
  color: gray;
  margin-left: 7px;
`;

const Analyze = styled.div`
  margin: 5px 10px;
  color: ${props => props.theme.colors.darkbluePrimaryColor};
`;

const Cursor = styled.span`
  opacity: ${props => (props.show ? 1 : 0)};
  animation: blink 0.8s infinite;
  font-weight: bold;
  margin-left: 2px;
  display: inline;

  @keyframes blink {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }
`;
