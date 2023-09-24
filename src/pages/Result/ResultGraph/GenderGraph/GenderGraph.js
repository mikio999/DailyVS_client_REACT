import React, { useState } from 'react';
import styled from 'styled-components';
import ManChart from './ManChart';
import WomanChart from './WomanChart';

const GenderGraph = ({
  option1,
  option2,
  choice1ManPercentage,
  choice2ManPercentage,
  choice1WomanPercentage,
  choice2WomanPercentage,
}) => {
  const [isRotated, setIsRotated] = useState(false);
  const [isGraphVisible, setIsGraphVisible] = useState(true);

  const toggleRotation = () => {
    setIsRotated(!isRotated);
    setIsGraphVisible(!isGraphVisible);
  };

  return (
    <GenderContainer>
      <Toggler onClick={toggleRotation}>
        <Chevron
          src="/images/Buttons/chevron.png"
          alt="chevron"
          className={isRotated ? '' : 'rotated'}
        />
        성별
      </Toggler>
      {isGraphVisible && (
        <Charts>
          <ManChart
            choice1ManPercentage={choice1ManPercentage}
            choice2ManPercentage={choice2ManPercentage}
            option1={option1}
            option2={option2}
          />
          <WomanChart
            choice1WomanPercentage={choice1WomanPercentage}
            choice2WomanPercentage={choice2WomanPercentage}
            option1={option1}
            option2={option2}
          />
        </Charts>
      )}
    </GenderContainer>
  );
};

export default GenderGraph;

const GenderContainer = styled.div`
  display: flex;
  flex-direction: column;
  & tspan {
    font-size: 16px;
  }
`;

const Toggler = styled.div`
  display: flex;
  align-items: center;
  font-family: 'GongGothicMedium';
  font-size: 18px;
  color: ${props => props.theme.colors.darkbluePrimaryColor};
  margin-top: 30px;
`;

const Chevron = styled.img`
  margin-right: 20px;
  width: 30px;
  &.rotated {
    transform: rotate(180deg);
  }
  transition: transform 0.3s ease;
`;

const Charts = styled.div`
  display: flex;
`;
