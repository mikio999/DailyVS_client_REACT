import React, { useState } from 'react';
import styled from 'styled-components';
import ApexCharts from 'react-apexcharts';

const PJGraphAnalysis = ({
  option1,
  option2,
  pChoice1Percentage,
  jChoice1Percentage,
  pChoice2Percentage,
  jChoice2Percentage,
}) => {
  const chartOptions = {
    series: [
      {
        name: option1,
        data: [pChoice1Percentage, jChoice1Percentage],
      },
      {
        name: option2,
        data: [pChoice2Percentage, jChoice2Percentage],
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
      categories: ['P', 'J'],
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

  return (
    <PJContainer>
      <ApexCharts
        options={chartOptions}
        series={chartOptions.series}
        type="bar"
        width="400"
        height="200"
      />
    </PJContainer>
  );
};

export default PJGraphAnalysis;

const PJContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -40px;
  & tspan {
    font-size: 16px;
  }

  & .apexcharts-legend-series {
    opacity: 0;
  }
`;
