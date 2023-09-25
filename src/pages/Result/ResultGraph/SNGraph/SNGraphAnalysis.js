import React, { useState } from 'react';
import styled from 'styled-components';
import ApexCharts from 'react-apexcharts';

const SNGraphAnalysis = ({
  option1,
  option2,
  sChoice1Percentage,
  nChoice1Percentage,
  sChoice2Percentage,
  nChoice2Percentage,
}) => {
  const chartOptions = {
    series: [
      {
        name: option1,
        data: [sChoice1Percentage, nChoice1Percentage],
      },
      {
        name: option2,
        data: [sChoice2Percentage, nChoice2Percentage],
      },
    ],
    colors: ['#17355a', '#ff495a'],
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
      categories: ['S', 'N'],
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
  };

  return (
    <SNContainer>
      <ApexCharts
        options={chartOptions}
        series={chartOptions.series}
        type="bar"
        width="400"
        height="200"
      />
    </SNContainer>
  );
};

export default SNGraphAnalysis;

const SNContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -40px;
  & tspan {
    font-size: 16px;
  }
`;
