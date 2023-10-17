import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import styled from 'styled-components';

const AgeGraph = ({
  option1,
  option2,
  choice1_10_Percentage,
  choice2_10_Percentage,
  choice1_20_1_Percentage,
  choice2_20_1_Percentage,
  choice1_20_2_Percentage,
  choice2_20_2_Percentage,
  choice1_30_1_Percentage,
  choice2_30_1_Percentage,
  choice1_30_2_Percentage,
  choice2_30_2_Percentage,
  choice1_40_Percentage,
  choice2_40_Percentage,
}) => {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: option1,
        data: [
          choice1_10_Percentage,
          choice1_20_1_Percentage,
          choice1_20_2_Percentage,
          choice1_30_1_Percentage,
          choice1_30_2_Percentage,
          choice1_40_Percentage,
        ],
      },
      {
        name: option2,
        data: [
          choice2_10_Percentage,
          choice2_20_1_Percentage,
          choice2_20_2_Percentage,
          choice2_30_1_Percentage,
          choice2_30_2_Percentage,
          choice2_40_Percentage,
        ],
      },
    ],
    options: {
      chart: {
        type: 'bar',
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '70%',
          endingShape: 'rounded',
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      xaxis: {
        categories: [
          '10대',
          '20대 초반',
          '20대 후반',
          '30대 초반',
          '30대 후반',
          '40대',
        ],
      },
      yaxis: {
        title: {
          text: '',
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + ' %';
          },
        },
      },
      colors: ['#17355a', '#ff495a'],
    },
  });

  return (
    <Container>
      <div id="chart">
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="bar"
          height={350}
        />
      </div>
    </Container>
  );
};

export default AgeGraph;

const Container = styled.div`
  & span {
    font-family: 'NEXON Lv1 Gothic OTF';
    font-size: 20px;
  }
`;
