import React from 'react';
import styled from 'styled-components';
import ApexCharts from 'react-apexcharts';

const ManChart = ({ man_choices, choices }) => {
  const getChartColors = length => {
    if (length === 2) {
      return ['#17355a', '#ff495a'];
    } else {
      return ['#17355a', '#457c9e', '#a7dcdd', '#D9D9D9', '#4F4F4F'];
    }
  };

  const chartOptions = {
    series: man_choices,
    labels: [],
    colors: getChartColors(choices.length),
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
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  };
  chartOptions.labels = choices?.map(choice => choice?.choice_text);

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
  margin: 0px auto;
`;

const ManTitle = styled.h2`
  display: flex;
  justify-content: center;
`;
