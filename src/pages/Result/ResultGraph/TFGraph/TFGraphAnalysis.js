import React from 'react';
import styled from 'styled-components';
import ApexCharts from 'react-apexcharts';

const TFGraphAnalysis = ({
  option1,
  option2,
  tChoice1Percentage,
  fChoice1Percentage,
  tChoice2Percentage,
  fChoice2Percentage,
}) => {
  const chartOptions = {
    series: [
      {
        name: option1,
        data: [tChoice1Percentage, fChoice1Percentage],
      },
      {
        name: option2,
        data: [tChoice2Percentage, fChoice2Percentage],
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
      categories: ['T', 'F'],
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
    <TFContainer>
      <ApexCharts
        options={chartOptions}
        series={chartOptions.series}
        type="bar"
        width="400"
        height="200"
      />
    </TFContainer>
  );
};

export default TFGraphAnalysis;

const TFContainer = styled.div`
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
