import React from 'react';
import styled from 'styled-components';
import ApexCharts from 'react-apexcharts';

const WomanChartAnalysis = ({
  choice1WomanPercentage,
  choice2WomanPercentage,
  option1,
  option2,
}) => {
  const chartOptions = {
    series: [choice1WomanPercentage, choice2WomanPercentage]?.filter(Boolean),
    labels: [option1, option2]?.filter(Boolean),
    colors: ['#a7dcdd', '#457c9e'],
    chart: {
      type: 'pie',
      height: 350,
    },
    legend: {
      position: 'bottom',
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 300,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  };
  return (
    <WomanContainer>
      <WomanTitle>여성</WomanTitle>
      <ApexCharts
        options={chartOptions}
        series={chartOptions.series}
        type="pie"
        width="200"
        height="200"
      />
    </WomanContainer>
  );
};

export default WomanChartAnalysis;

const WomanContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px auto;
`;

const WomanTitle = styled.h2`
  display: flex;
  justify-content: center;
`;
