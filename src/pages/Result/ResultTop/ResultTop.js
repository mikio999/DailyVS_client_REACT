import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
 0% {
    color: #D9D9D9; 
  }
  70% {
    color: #a7dcdd; 
  }
  100% {
    color: #ff495a; 
  }
`;

const AnimatedPercentage = ({ initialValue, finalValue }) => {
  const [count, setCount] = useState(initialValue);

  useEffect(() => {
    const increment = finalValue / 100;

    let currentCount = initialValue;

    const interval = setInterval(() => {
      currentCount += increment;

      setCount(prevCount => Math.min(currentCount, finalValue));

      if (currentCount >= finalValue) {
        clearInterval(interval);
      }
    }, 20);

    return () => {
      clearInterval(interval);
    };
  }, [initialValue, finalValue]);

  return <Percentage>{Math.round(count)} %</Percentage>;
};

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
      <Information>
        {voteResult.poll?.choices.map((choice, index) => (
          <Option key={index}>
            <ChoiceCircle
              style={{ backgroundColor: choiceColors[index] || '#D9D9D9' }}
            />
            <AnimatedPercentage
              initialValue={0}
              finalValue={total_choicesArray[index]}
            />
            <OptionName>{choice.choice_text}</OptionName>
          </Option>
        ))}
      </Information>
    </ResultTopContainer>
  );
};

export default ResultTop;

const ResultTopContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  @media (min-width: 768px) {
    margin-top: 5rem;
    margin-bottom: auto;
    margin-left: auto;
  }
`;

const Option = styled.div`
  display: grid;
  grid-template-columns: 40% 10% 50%;
  grid-gap: 10px;
  width: 100vw;
  margin: 5px auto;
  @media (min-width: 768px) {
    width: 100%;
    display: grid;
    grid-gap: 30px;
    grid-template-columns: 20% 20% 60%;
  }
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: auto;
`;

const OptionName = styled.div`
  font-family: 'GongGothicLight';
  display: flex;
  justify-content: start;
  margin-left: 5px;
  align-items: center;
  font-size: 16px;
  width: 85%;
  color: ${props => props.theme.colors.grayColor};
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

const Percentage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  color: #ff495a;
  animation: ${fadeIn} 2s ease;
`;
