import React, { useState } from 'react';
import styled from 'styled-components';
import ApexCharts from 'react-apexcharts';

const EIGraph = ({ choices, e_choices, i_choices }) => {
  const getChartColors = length => {
    if (length === 2) {
      return ['#17355a', '#ff495a'];
    } else {
      return ['#17355a', '#457c9e', '#a7dcdd', '#D9D9D9', '#4F4F4F'];
    }
  };

  const [isGraphVisible, setIsGraphVisible] = useState(true);
  const [isRotated, setIsRotated] = useState(false);

  const toggleRotation = () => {
    setIsRotated(!isRotated);
    setIsGraphVisible(!isGraphVisible);
  };

  const chartOptions = {
    series: [],
    colors: getChartColors(choices.length),
    chart: {
      type: 'bar',
      stacked: true,
      stackType: '100%',
      height: 50,
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    stroke: {
      width: 1,
      colors: ['#fff'],
    },
    title: {
      text: '',
    },
    xaxis: {
      categories: ['E', 'I'],
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + '%';
        },
      },
    },
    fill: {
      opacity: 1,
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      offsetX: 40,
    },
  };

  choices?.forEach((choice, index) => {
    chartOptions.series.push({
      name: choice.choice_text,
      data: [e_choices[index], i_choices[index]],
    });
  });
  return (
    <EIContainer>
      <Toggler onClick={toggleRotation}>
        <Chevron
          src={require('../../../../assets/Buttons/chevron.png')}
          alt="chevron"
          className={isRotated ? '' : 'rotated'}
        />
        E / I
      </Toggler>
      {isGraphVisible && (
        <ApexCharts
          options={chartOptions}
          series={chartOptions.series}
          type="bar"
          width="400"
          height="200"
        />
      )}
    </EIContainer>
  );
};

export default EIGraph;

const EIContainer = styled.div`
  display: flex;
  flex-direction: column;
  & tspan {
    font-size: 16px;
  }
`;

const Toggler = styled.div`
  display: flex;
  align-items: center;
  font-family: 'GongGothicBold';
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
