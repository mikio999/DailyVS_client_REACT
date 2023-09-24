import React from 'react';
import styled from 'styled-components';
import ApexCharts from 'react-apexcharts';

const ManChart = ({
  choice1ManPercentage,
  choice2ManPercentage,
  option1,
  option2,
}) => {
  const chartOptions = {
    series: [choice1ManPercentage, choice2ManPercentage]?.filter(Boolean),
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
    <ManContainer>
      <ManTitle>남성</ManTitle>
      <ApexCharts
        options={chartOptions}
        series={chartOptions.series}
        type="pie"
        width="200"
        height="200"
      />
    </ManContainer>
  );
};

export default ManChart;

const ManContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px auto;
`;

const ManTitle = styled.h2`
  display: flex;
  justify-content: center;
`;
