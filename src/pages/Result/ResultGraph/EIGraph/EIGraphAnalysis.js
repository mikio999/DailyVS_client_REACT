import React from 'react';
import styled from 'styled-components';
import ApexCharts from 'react-apexcharts';

const EIGraphAnalysis = ({
  option1,
  option2,
  eChoice1Percentage,
  iChoice1Percentage,
  eChoice2Percentage,
  iChoice2Percentage,
}) => {
  const chartOptions = {
    series: [
      {
        name: option1,
        data: [eChoice1Percentage, iChoice1Percentage],
      },
      {
        name: option2,
        data: [eChoice2Percentage, iChoice2Percentage],
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

  return (
    <EIContainer>
      <ApexCharts
        options={chartOptions}
        series={chartOptions.series}
        type="bar"
        width="400"
        height="200"
      />
    </EIContainer>
  );
};

export default EIGraphAnalysis;

const EIContainer = styled.div`
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
